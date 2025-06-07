<?php

namespace App\Services\Services;

use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Services\Constructors\GalleryConstructor;
use Illuminate\Http\Request;

class GalleryService implements GalleryConstructor
{
    /**
     * List All Galleries
     */
    public function index(Request $request)
    {
        $query = Gallery::with('category', 'project.projectCategory');
    
        /**
         * Filter by project_category_id if provided
         */
        if ($request->has('project_category_id')) {
            $query->whereHas('project.projectCategory', function ($q) use ($request) {
                $q->where('id', $request->project_category_id);
            });
        }
    
        /**
         * Filter by project id if provided (this is your "project" param)
         */
        if ($request->has('project')) {
            $query->where('project_id', $request->project);
        }
    
        $galleries = $query->get()->map(function ($gallery) {
            return [
                'id' => $gallery->id,
                'src' => asset('storage/' . $gallery->image),
                'alt' => $gallery->category ? $gallery->category->title : 'Gallery Image',
                'category_id' => $gallery->gallery_category_id,
                'category_title' => $gallery->category ? $gallery->category->title : null,
                'project_id' => $gallery->project?->id,
                'project_title' => $gallery->project?->title,
                'project_category_id' => $gallery->project?->projectCategory?->id,
                'project_category_title' => $gallery->project?->projectCategory?->title,
            ];
        });
    
        $categories = GalleryCategory::all();
    
        return inertia('GalleryPage', [
            'galleries' => $galleries,
            'categories' => $categories,
            'selectedProjectCategoryId' => $request->project_category_id,
            'selectedProjectId' => $request->project,  
        ]);
    }
    
    /**
     * Get All Galleries
     */
    public function getGalleries()
    {
        $galleries = Gallery::with('category')->get();
        return GalleryResource::collection($galleries);
    }

}
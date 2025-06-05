<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;
use App\Http\Resources\GalleryResource;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::with('category')->get()->map(function($gallery) {
            return [
                'id' => $gallery->id,
                'src' => asset('storage/' . $gallery->image),
                'alt' => $gallery->category ? $gallery->category->title : 'Gallery Image',
                'category_id' => $gallery->gallery_category_id,
                'category_title' => $gallery->category ? $gallery->category->title : null
            ];
        });
        
        $categories = GalleryCategory::all();
        
        return inertia('GalleryPage', [
            'galleries' => $galleries,
            'categories' => $categories
        ]);
    }

    public function getGalleries()
    {
        $galleries = Gallery::with('category')->get();
        return GalleryResource::collection($galleries);
    }
}

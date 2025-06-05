<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
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
                'alt' => $gallery->category ? $gallery->category->name : 'Gallery Image',
                'category_id' => $gallery->gallery_category_id
            ];
        });
        
        return inertia('GalleryPage', [
            'galleries' => $galleries
        ]);
    }

    public function getGalleries()
    {
        $galleries = Gallery::with('category')->get();
        return GalleryResource::collection($galleries);
    }
}

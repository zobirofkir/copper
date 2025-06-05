<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use App\Http\Resources\GalleryResource;

class GalleryController extends Controller
{
    public function index()
    {
        return inertia('GalleryPage');
    }

    public function getGalleries()
    {
        $galleries = Gallery::with('category')->get();
        return GalleryResource::collection($galleries);
    }
}

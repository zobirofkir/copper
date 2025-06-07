<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;
use App\Http\Resources\GalleryResource;
use App\Services\Facades\GalleryFacade;

class GalleryController extends Controller
{
    /**
     * List All Galleries
     */
    public function index(Request $request)
    {
        return GalleryFacade::index($request);
    }

    /**
     * Get ALl Galleries
     */
    public function getGalleries(Request $request)
    {
        return GalleryFacade::getGalleries($request);
    }
}

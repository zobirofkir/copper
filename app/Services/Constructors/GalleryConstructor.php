<?php

namespace App\Services\Constructors;

use Illuminate\Http\Request;

interface GalleryConstructor
{
    /**
     * List All Galleries
     */
    public function index(Request $request);

    /**
     * Get All Galleries
     */
    public function getGalleries();
}
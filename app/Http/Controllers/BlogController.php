<?php

namespace App\Http\Controllers;

use App\Filament\Resources\BlogResource;
use App\Models\Blog;
use App\Services\Facades\BlogFacade;

class BlogController extends Controller
{
    /**
     * List All Blogs
     */
    public function index()
    {
        return BlogFacade::index();
    }

    /**
     * Show Blog by slug
     */
    public function show($slug)
    {
        return BlogFacade::show($slug);
    }
}

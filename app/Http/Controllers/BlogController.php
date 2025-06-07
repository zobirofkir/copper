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
     * Show Blog by id
     */
    public function show($id)
    {
        return BlogFacade::show($id);
    }
}

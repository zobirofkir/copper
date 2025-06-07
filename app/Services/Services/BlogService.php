<?php

namespace App\Services\Services;

use App\Filament\Resources\BlogResource;
use App\Models\Blog;
use App\Services\Constructors\BlogConstructor;

class BlogService implements BlogConstructor
{
    /**
     * List All Blogs
     */
    public function index()
    {
        $blogs = BlogResource::getEloquentQuery()->get()->map(function ($blog) {
            $blog->image = $blog->image ? asset('storage/' . $blog->image) : null;
            return $blog;
        });

        return inertia('BlogPage', ['blogs' => $blogs]);
    }

    /**
     * Show Blog By slug
     */
    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        
        $blog->image = $blog->image ? asset('storage/' . $blog->image) : null;

        return inertia('blogs/ShowBlogPage', ['blog' => $blog]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Filament\Resources\BlogResource;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = BlogResource::getEloquentQuery()->get()->map(function ($blog) {
            $blog->image = $blog->image ? asset('storage/' . $blog->image) : null;
            return $blog;
        });

        return inertia('BlogPage', ['blogs' => $blogs]);
    }

    public function show($id)
    {
        $blog = BlogResource::getEloquentQuery()->findOrFail($id);
        $blog->image = $blog->image ? asset('storage/' . $blog->image) : null;

        return inertia('blogs/ShowBlogPage', ['blog' => $blog]);
    }
}

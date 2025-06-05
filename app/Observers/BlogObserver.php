<?php

namespace App\Observers;

use App\Models\Blog;
use Illuminate\Support\Str;

class BlogObserver
{
    /**
     * Handle the Blog "creating" event.
     */
    public function creating(Blog $blog): void
    {
        if (!$blog->slug) {
            $blog->slug = Str::slug($blog->title);
        }
    }

    /**
     * Handle the Blog "updating" event.
     */
    public function updating(Blog $blog): void
    {
        if ($blog->isDirty('title') && !$blog->isDirty('slug')) {
            $blog->slug = Str::slug($blog->title);
        }
    }
}
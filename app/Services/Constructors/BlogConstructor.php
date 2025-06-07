<?php

namespace App\Services\Constructors;

interface BlogConstructor
{
    /**
     * List All Blogs
     */
    public function index();

    /**
     * Show Blog By slug
     */
    public function show($slug);
}
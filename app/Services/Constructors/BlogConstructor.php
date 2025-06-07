<?php

namespace App\Services\Constructors;

interface BlogConstructor
{
    /**
     * List All Blogs
     */
    public function index();

    /**
     * Show Blog By Id
     */
    public function show($id);
}
<?php

namespace App\Services\Constructors;

interface ProjectConstructor
{
    /**
     * List All Projects
     */
    public function index();

    /**
     *  Filter Project
     */
    public function getProjects();

    /**
     * Show Project by id
     */
    public function show($id);
}
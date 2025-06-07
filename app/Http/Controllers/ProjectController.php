<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectCategory;
use App\Services\Facades\ProjectFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * List All Projects
     */
    public function index()
    {
        return ProjectFacade::index();
    }

    /**
     * Filter Project
     */
    public function getProjects()
    {
        return ProjectFacade::getProjects();
    }

    /**
     * Show Project by id
     */
    public function show($id)
    {
        return ProjectFacade::show($id);
    }
}
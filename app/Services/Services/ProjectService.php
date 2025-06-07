<?php

namespace App\Services\Services;

use App\Models\Project;
use App\Models\ProjectCategory;
use App\Services\Constructors\ProjectConstructor;
use Inertia\Inertia;

class ProjectService implements ProjectConstructor
{
    /**
     * List All Project
     */
    public function index()
    {
        $projects = Project::with('projectCategory')->get();
        $categories = ProjectCategory::all();
        
        return Inertia::render('ProjectPage', [
            'projects' => $projects,
            'categories' => $categories
        ]);
    }
    
    /**
     * Filter Prject
     */
    public function getProjects()
    {
        $projects = Project::with('projectCategory')->get()->map(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title, 
                'article' => $project->article,
                'name_reference' => $project->name_reference,
                'materials' => $project->materials,
                'dimensions' => $project->dimensions,
                'price_availability' => $project->price_availability,
                'category' => $project->projectCategory->title,
                'image' => $project->image ? asset('storage/' . $project->image) : null,
                'client' => $project->client,
                'location' => $project->location
            ];
        });
        
        return response()->json($projects);
    }
    
    /**
     * Show Project
     */
    public function show($id)
    {
        $project = Project::with('projectCategory')->findOrFail($id);
        
        return response()->json([
            'id' => $project->id,
            'title' => $project->title, 
            'article' => $project->article,
            'name_reference' => $project->name_reference,
            'materials' => $project->materials,
            'dimensions' => $project->dimensions,
            'price_availability' => $project->price_availability,
            'category' => $project->projectCategory->title,
            'image' => $project->image ? asset('storage/' . $project->image) : null,
            'client' => $project->client,
            'location' => $project->location
        ]);
    }

}
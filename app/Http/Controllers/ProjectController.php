<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::with('projectCategory')->get();
        $categories = ProjectCategory::all();
        
        return Inertia::render('ProjectPage', [
            'projects' => $projects,
            'categories' => $categories
        ]);
    }
    
    public function getProjects()
    {
        $projects = Project::with('projectCategory')->get()->map(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title,
                'description' => $project->description,
                'details' => $project->description,
                'category' => $project->projectCategory->title,
                'image' => $project->image ? asset('storage/' . $project->image) : null,
                'client' => $project->client,
                'location' => $project->location
            ];
        });
        
        return response()->json($projects);
    }
    
    public function show($id)
    {
        $project = Project::with('projectCategory')->findOrFail($id);
        
        return response()->json([
            'id' => $project->id,
            'title' => $project->title,
            'description' => $project->description,
            'details' => $project->description, // Using description as details for now
            'category' => $project->projectCategory->title,
            'image' => $project->image ? asset('storage/' . $project->image) : null,
            'client' => $project->client,
            'location' => $project->location
        ]);
    }
}
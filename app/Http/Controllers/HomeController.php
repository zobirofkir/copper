<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::with('projectCategory')->get()->map(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title,
                'description' => $project->description,
                'details' => $project->description, // Using description as details for now
                'category' => $project->projectCategory->title,
                'image' => $project->image ? asset('storage/' . $project->image) : null,
                'client' => $project->client,
                'location' => $project->location
            ];
        });
        
        $categories = ProjectCategory::all()->pluck('title');
        
        return Inertia::render('WelcomePage', [
            'projects' => $projects,
            'categories' => $categories
        ]);
    }
}
<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * List Projects
 */
Route::get('/projects', [ProjectController::class, 'getProjects'])->name('api.projects');

/**
 * Show Project
 */
Route::get('/projects/{id}', [ProjectController::class, 'show'])->name('api.projects.show');


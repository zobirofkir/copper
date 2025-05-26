<?php

use Illuminate\Support\Facades\Route;

/**
 * Home Page
 */
Route::get('/', [App\Http\Controllers\CompanyController::class, 'index'])->name('home');

/**
 * Project Page
 */
Route::get('/projects', [App\Http\Controllers\ProjectController::class, 'index'])->name('project.page');
Route::get('/api/projects', [App\Http\Controllers\ProjectController::class, 'getProjects'])->name('api.projects');
Route::get('/api/projects/{id}', [App\Http\Controllers\ProjectController::class, 'show'])->name('api.projects.show');

Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('about.page');

/**
 * Contact Page
 */
Route::get('/contacts', function() {
    return inertia('ContactPage');
})->name('contact.page');

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

/**
 * About Page
 */
Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('about.page');

/**
 * Blog Page
 */
Route::get('/blogs', [App\Http\Controllers\BlogController::class, 'index'])->name('blog.page');

/**
 * Show Blog Page
 */
Route::get('/blogs/{id}', [App\Http\Controllers\BlogController::class, 'show'])->name('show-blog.page');

/**
 * Gallery Page
 */
Route::get('/galleries', function() {
    return inertia('GalleryPage');
});

/**
 * Contact Page
 */
Route::get('/contacts', function() {
    return inertia('ContactPage');
})->name('contact.page');

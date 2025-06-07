<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

/**
 * Home Page
 */
Route::get('/', [CompanyController::class, 'index'])->name('home');

/**
 * Project Page
 */
Route::get('/projects', [ProjectController::class, 'index'])->name('project.page');

/**
 * About Page
 */
Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('about.page');

/**
 * Blog Page
 */
Route::get('/blogs', [BlogController::class, 'index'])->name('blog.page');

/**
 * Show Blog Page
 */
Route::get('/blogs/{slug}', [BlogController::class, 'show'])->name('show-blog.page');

/**
 * Gallery Page
 */
Route::get('/galleries', [GalleryController::class, 'index'])->name('list-galleries');

/**
 * Contact Page
 */
Route::get('/contacts', function() { return inertia('ContactPage'); })->name('contact.page');

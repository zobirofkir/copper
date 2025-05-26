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
Route::get('/blogs', function() {
    return inertia('BlogPage');
})->name('blog.page');

/**
 * Show Blog Page
 */
Route::get('/blogs/{id}', function ($id) {
    $blog = [
        [
            'id' => 1,
            'title' => 'The Art of Copper Crafting',
            'description' => 'Discover the timeless techniques and artistry behind copper crafting.',
            'image' => 'https://images.unsplash.com/photo-1609387433510-d2ca76dd0259?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'date' => '2023-10-01',
        ],
        [
            'id' => 2,
            'title' => 'Sustainability in Copper Production',
            'description' => 'Learn how copper production is evolving to meet sustainability goals.',
            'image' => 'https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'date' => '2023-09-15',
        ],
        [
            'id' => 3,
            'title' => 'Innovative Uses of Copper',
            'description' => 'Explore the innovative ways copper is being used in modern design.',
            'image' => 'https://images.unsplash.com/photo-1548357204-82fc6c4a0c67?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'date' => '2023-09-05',
        ],
    ];

    $blogDetails = collect($blog)->firstWhere('id', $id);

    return inertia('blogs/ShowBlogPage', [
        'blog' => $blogDetails,
    ]);
})->name('show-blog.page');


/**
 * Contact Page
 */
Route::get('/contacts', function() {
    return inertia('ContactPage');
})->name('contact.page');

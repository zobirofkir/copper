<?php

use Illuminate\Support\Facades\Route;

/**
 * Home Page
 */
Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

/**
 * Project Page
 */
Route::get('/projects', function() {
    return inertia('ProjectPage');
})->name('project.page');

Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('about.page');

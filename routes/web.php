<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');


Route::get('/projects', function() {
    return inertia('ProjectComponent');
})->name('project.pahe');
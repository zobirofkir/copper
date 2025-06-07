<?php

namespace App\Providers;

use App\Services\Services\ProjectService;
use Illuminate\Support\ServiceProvider;

class ProjectServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('ProjectService', ProjectService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}

<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class ProjectFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'ProjectService';
    }
}
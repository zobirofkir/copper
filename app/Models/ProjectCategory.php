<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectCategory extends Model
{
    protected $fillable = [
        "title"
    ];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}

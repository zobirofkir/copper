<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'project_category_id',
        'title',
        'image',
        'description',
        'client',
        'location'
    ];

    public function projectCategory()
    {
        return $this->belongsTo(ProjectCategory::class);
    }
}

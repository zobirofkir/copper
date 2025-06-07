<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'project_category_id',
        'title',
        'image',
    ];

    public function projectCategory()
    {
        return $this->belongsTo(ProjectCategory::class);
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class);
    }
}

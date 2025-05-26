<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'project_category_id',
        'article',
        'name_reference',
        'materials',
        'dimensions',
        'price_availability',
    ];

    public function projectCategory()
    {
        return $this->belongsTo(ProjectCategory::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        "user_id",
        "title",
        "image"
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

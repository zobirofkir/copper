<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public static function getAllCompanies()
    {
        return self::all(['id', 'title as name', DB::raw("CONCAT('/storage/', image) as image")]);
    }
}

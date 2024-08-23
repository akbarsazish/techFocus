<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Task extends Model
{
    use HasFactory;

    // Define the relationship to the Project model
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}

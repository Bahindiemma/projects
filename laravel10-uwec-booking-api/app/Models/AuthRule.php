<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthRule extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'data',
        'created_at',
        'update_at'
    ];
}

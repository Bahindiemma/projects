<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'description',
        'rule_name',
        'data',
        'status',
        'created_at',
        'updated_at',
    ];
}

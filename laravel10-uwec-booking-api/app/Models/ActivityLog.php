<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'created_by',
        'created_at',
        'ip_address',
        'record_id',
        'user_agent',
        'controller_action',
        'description',
    ];

    // Define your relationships and business logic here

}

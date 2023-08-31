<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingInquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'inquiry_number',
        'booking_id',
        'inquiry_reason',
        'remarks',
        'inquiry_via',
        'lastname',
        'firstname',
        'phone',
        'email',
        'country_id',
        'district_id',
        'address',
        'total_students',
        'total_teachers',
        'tour_type',
        'visit_date',
        'school_name',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by'
    ];
}

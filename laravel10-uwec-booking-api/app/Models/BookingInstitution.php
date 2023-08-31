<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingInstitution extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'name',
        'country_id',
        'city',
        'district_id',
        'email',
        'physical_address',
        'organizer_profile',
        'total_students',
        'total_teachers',
        'tour_type',
        'visit_time',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by',
        'telephone',
        'alt_telephone'
    ];
}

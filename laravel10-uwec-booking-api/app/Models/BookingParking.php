<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingParking extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_number',
        'booking_id',
        'vehicle_reg_number',
        'number',
        'parking_date',
        'ref_number',
        'status',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by'
    ];
}

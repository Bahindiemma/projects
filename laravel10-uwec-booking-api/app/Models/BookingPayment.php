<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'prn',
        'booking_currency',
        'prn_amount',
        'prn_created_at',
        'prn_expiry',
        'payment_status',
        'payment_number',
        'payment_reference',
        'transaction_code',
        'payment_method',
        'payment_option',
        'payment_date',
        'paid_by',
        'created_at',
        'updated_at'
    ];
}

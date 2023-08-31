<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingFiscalInvoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'invoice_no',
        'qrcode',
        'gross_amount',
        'tax_amount',
        'net_amount',
        'anti_fake_code',
        'created_at',
        'currency'
    ];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking_fiscal_invoice', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('booking_id');
            $table->string('invoice_no', 25);
            $table->text('qrcode');
            $table->string('gross_amount', 25);
            $table->string('tax_amount', 25);
            $table->string('net_amount', 25);
            $table->string('anti_fake_code');
            $table->integer('created_at');
            $table->integer('currency');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_fiscal_invoice');
    }
};

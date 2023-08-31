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
        Schema::create('mst_coupon_booking', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('coupon_id');
            $table->integer('booking_id');
            $table->integer('discount_value')->nullable();
            $table->integer('discount_amount')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mst_coupon_booking');
    }
};

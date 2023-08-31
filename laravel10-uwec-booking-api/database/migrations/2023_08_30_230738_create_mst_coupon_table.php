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
        Schema::create('mst_coupon', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('coupon_code', 24);
            $table->integer('coupon_type');
            $table->integer('value')->nullable();
            $table->integer('discount_type')->nullable();
            $table->integer('charge_by')->nullable();
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->integer('charge_group')->nullable();
            $table->integer('booking_class')->nullable();
            $table->integer('charge_value')->nullable();
            $table->integer('discount_group')->nullable();
            $table->integer('discount_value')->nullable();
            $table->integer('activity_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mst_coupon');
    }
};

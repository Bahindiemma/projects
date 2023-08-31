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
        Schema::create('booking_payment', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('booking_id');
            $table->string('prn', 45)->nullable();
            $table->decimal('booking_amount', 24)->nullable();
            $table->string('prn_currency', 45)->nullable();
            $table->decimal('prn_amount', 24)->nullable();
            $table->dateTime('prn_created_at')->nullable();
            $table->dateTime('prn_expiry')->nullable();
            $table->text('payment_status');
            $table->string('payment_number')->nullable();
            $table->string('payment_refrence')->nullable();
            $table->string('transaction_code')->nullable();
            $table->string('payment_method', 45)->nullable();
            $table->string('payment_mode')->nullable();
            $table->integer('payment_option')->nullable();
            $table->string('payment_date', 25)->nullable();
            $table->string('paid_by')->nullable();
            $table->integer('created_at');
            $table->integer('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_payment');
    }
};

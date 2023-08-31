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
        Schema::create('booking', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('ref_number', 45)->nullable();
            $table->string('inquiry_number', 45)->nullable();
            $table->integer('booking_class');
            $table->integer('total_visitors')->nullable();
            $table->date('visit_date');
            $table->text('booking_status');
            $table->string('requested_by')->nullable()->comment('Person requesting voucher');
            $table->longText('remarks')->nullable();
            $table->integer('policy_id')->nullable();
            $table->integer('created_at');
            $table->integer('created_by');
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->integer('booking_mode');
            $table->integer('booking_type')->nullable();
            $table->integer('service_type')->nullable();
            $table->date('checkout_date')->nullable();
            $table->string('currency', 5)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking');
    }
};

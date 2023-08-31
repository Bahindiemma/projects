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
        Schema::create('booking_parking', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('ticket_number', 45)->nullable();
            $table->integer('booking_id')->nullable();
            $table->string('vehicle_reg_number')->nullable();
            $table->integer('number')->nullable()->default(0);
            $table->date('parking_date')->nullable();
            $table->string('ref_number', 15)->nullable();
            $table->integer('status')->nullable();
            $table->integer('created_at');
            $table->integer('created_by');
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_parking');
    }
};

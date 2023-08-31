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
        Schema::create('booking_schedule', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('ticket_number', 25)->nullable();
            $table->integer('booking_id');
            $table->string('title')->nullable();
            $table->dateTime('start');
            $table->dateTime('end')->nullable();
            $table->string('color', 45)->nullable();
            $table->string('backgroundColor', 45)->nullable()->default('#eee');
            $table->integer('status')->default(108);
            $table->integer('created_at');
            $table->integer('created_by')->nullable();
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
        Schema::dropIfExists('booking_schedule');
    }
};

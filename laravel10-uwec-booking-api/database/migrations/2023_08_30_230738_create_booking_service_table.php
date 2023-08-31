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
        Schema::create('booking_service', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('booking_id');
            $table->integer('service_id');
            $table->integer('quantity');
            $table->integer('created_at');
            $table->decimal('price', 10);
            $table->string('currency', 5);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_service');
    }
};

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
        Schema::create('booking_walkin', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('sex', 24)->nullable();
            $table->integer('country_id')->nullable();
            $table->integer('residence_id')->nullable();
            $table->integer('age_group')->nullable();
            $table->integer('booking_id');
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
        Schema::dropIfExists('booking_walkin');
    }
};

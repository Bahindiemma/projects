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
        Schema::create('cancellation_policy', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 25);
            $table->integer('duration')->comment('Amount of time in days to visit date');
            $table->integer('cancelation_amount')->comment('Percentage Cancelation Amount');
            $table->integer('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cancellation_policy');
    }
};

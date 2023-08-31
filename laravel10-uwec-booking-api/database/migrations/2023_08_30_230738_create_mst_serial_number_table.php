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
        Schema::create('mst_serial_number', function (Blueprint $table) {
            $table->comment('Reference table for generating reference numbers');
            $table->integer('id', true);
            $table->string('serial_type', 45);
            $table->date('serial_date')->nullable();
            $table->integer('max_count');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mst_serial_number');
    }
};

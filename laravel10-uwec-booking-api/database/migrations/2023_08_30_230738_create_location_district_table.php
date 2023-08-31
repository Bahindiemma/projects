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
        Schema::create('location_district', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 10)->nullable()->unique('code_UNIQUE')->comment('Unique code for each district. This code is used in generating reference numbers ');
            $table->string('name', 225)->nullable();
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
        Schema::dropIfExists('location_district');
    }
};

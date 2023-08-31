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
        Schema::create('user_assignment', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('activity_id');
            $table->integer('user_id');
            $table->integer('assigned_by');
            $table->longText('remarks')->nullable();
            $table->integer('created_at');
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
        Schema::dropIfExists('user_assignment');
    }
};

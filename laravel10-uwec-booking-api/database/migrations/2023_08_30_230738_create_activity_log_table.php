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
        Schema::create('activity_log', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('created_by');
            $table->integer('created_at');
            $table->string('ip_address', 45);
            $table->string('record_id', 45)->nullable();
            $table->longText('user_agent')->nullable();
            $table->longText('controller_action')->nullable();
            $table->longText('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_log');
    }
};

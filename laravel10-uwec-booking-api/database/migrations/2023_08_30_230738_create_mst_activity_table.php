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
        Schema::create('mst_activity', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('code_prefix', 4);
            $table->integer('created_by');
            $table->integer('created_at');
            $table->integer('updated_by')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('status')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mst_activity');
    }
};

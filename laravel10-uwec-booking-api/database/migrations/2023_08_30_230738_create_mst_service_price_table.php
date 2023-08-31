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
        Schema::create('mst_service_price', function (Blueprint $table) {
            $table->integer('id', true);
            $table->year('year');
            $table->string('currency', 45);
            $table->decimal('amount', 10);
            $table->integer('service_id');
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
        Schema::dropIfExists('mst_service_price');
    }
};

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
        Schema::create('mst_service', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 45);
            $table->string('residence_id', 45);
            $table->string('description', 45)->nullable();
            $table->string('grouping_id', 45);
            $table->integer('max_number');
            $table->integer('created_at');
            $table->integer('created_by');
            $table->integer('updated_by')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('category_id');
            $table->integer('service_type_id')->nullable()->comment('Type of Service e.g. Any Day, Week Day, etc');
            $table->string('booking_mode', 25)->nullable()->comment('Attach price for respective booking modes, either internal system or external user portal price');
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
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
        Schema::dropIfExists('mst_service');
    }
};

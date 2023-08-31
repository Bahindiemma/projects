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
        Schema::create('mst_activity_category', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 45);
            $table->string('name');
            $table->integer('max_number')->default(0);
            $table->integer('quantity')->nullable()->comment('Number of available facilities	');
            $table->integer('show_on_frontpage')->nullable();
            $table->integer('service_charge')->default(177);
            $table->longText('description')->nullable();
            $table->integer('activity_id');
            $table->integer('created_at');
            $table->integer('created_by');
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->string('activity_image')->nullable();
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
        Schema::dropIfExists('mst_activity_category');
    }
};

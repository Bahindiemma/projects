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
        Schema::create('masterdata', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('code', 45)->nullable();
            $table->string('name', 225);
            $table->tinyText('description')->nullable();
            $table->integer('created_by');
            $table->integer('created_at')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->string('reference_table', 225)->nullable()->comment('Table to which this masterdata is applicable');
            $table->integer('parent_id')->nullable();
            $table->string('css_class', 45)->nullable();
            $table->integer('status')->default(108);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('masterdata');
    }
};

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
        Schema::create('auth_item', function (Blueprint $table) {
            $table->string('name', 64)->primary();
            $table->smallInteger('type')->index('idx-auth_item-type');
            $table->text('description')->nullable();
            $table->string('rule_name', 64)->nullable()->index('rule_name');
            $table->binary('data')->nullable();
            $table->integer('created_at')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('status')->default(108);
            $table->integer('created_by')->nullable();
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
        Schema::dropIfExists('auth_item');
    }
};

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
        Schema::create('user', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('username')->unique('username');
            $table->string('firstname');
            $table->string('lastname')->nullable();
            $table->string('email')->unique('email');
            $table->integer('category')->nullable()->comment('Is this a staff member, tour guide, or online user?');
            $table->integer('registration_mode')->nullable()->comment('Registered by admin, or self visa the portal?');
            $table->string('office_held', 225)->nullable();
            $table->integer('sex_id')->nullable();
            $table->integer('age_range')->nullable();
            $table->integer('residence')->nullable();
            $table->integer('country_id')->nullable();
            $table->integer('id_type_id')->nullable();
            $table->string('id_number')->nullable();
            $table->integer('district_id')->nullable();
            $table->string('city')->nullable();
            $table->string('auth_key', 32);
            $table->string('password_hash')->nullable();
            $table->string('password_reset_token')->nullable()->unique('password_reset_token');
            $table->smallInteger('status')->default(95);
            $table->integer('created_at');
            $table->integer('updated_at');
            $table->string('verification_token')->nullable();
            $table->text('phone_number')->nullable();
            $table->string('created_by');
            $table->string('updated_by');
            $table->string('user_image')->nullable();
            $table->string('othernames')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};

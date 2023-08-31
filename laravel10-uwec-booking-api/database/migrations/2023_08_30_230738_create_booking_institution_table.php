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
        Schema::create('booking_institution', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('booking_id');
            $table->string('name', 45)->nullable();
            $table->integer('country_id')->nullable();
            $table->string('city', 125)->nullable();
            $table->integer('district_id')->nullable();
            $table->string('email', 45)->nullable();
            $table->string('physical_address', 45)->nullable();
            $table->integer('organizer_profile')->nullable();
            $table->integer('total_students')->nullable();
            $table->integer('total_teachers')->nullable();
            $table->integer('tour_type')->nullable();
            $table->string('visit_time', 24)->nullable();
            $table->integer('created_at')->nullable();
            $table->integer('created_by')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->text('telephone')->nullable();
            $table->text('alt_telephone')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_institution');
    }
};

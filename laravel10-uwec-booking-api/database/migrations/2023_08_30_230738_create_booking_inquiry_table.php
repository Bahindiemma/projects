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
        Schema::create('booking_inquiry', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('inquiry_number', 25);
            $table->integer('booking_id')->nullable();
            $table->longText('inquiry_reason');
            $table->longText('remarks')->nullable();
            $table->integer('inquiry_via');
            $table->string('lastname');
            $table->string('firstname')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->integer('country_id')->nullable();
            $table->integer('district_id')->nullable();
            $table->longText('address')->nullable();
            $table->integer('total_students')->nullable();
            $table->integer('total_teachers')->nullable();
            $table->integer('tour_type')->nullable();
            $table->dateTime('visit_date')->nullable();
            $table->longText('school_name')->nullable();
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
        Schema::dropIfExists('booking_inquiry');
    }
};

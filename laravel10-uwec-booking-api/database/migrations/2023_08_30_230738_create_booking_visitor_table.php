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
        Schema::create('booking_visitor', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('booking_id');
            $table->integer('title_id')->nullable();
            $table->string('email', 75)->nullable();
            $table->string('firstname', 125);
            $table->string('surname', 125)->nullable();
            $table->integer('sex_id')->nullable();
            $table->integer('date_of_birth')->nullable();
            $table->integer('id_type_id')->nullable();
            $table->string('id_number', 45)->nullable();
            $table->integer('position')->nullable();
            $table->integer('hear_about')->nullable();
            $table->string('other_hear_about')->nullable();
            $table->integer('number_of_disabled')->nullable();
            $table->integer('residence_id')->nullable();
            $table->integer('country_id');
            $table->integer('district_id')->nullable();
            $table->string('city', 125)->nullable();
            $table->string('postal_address')->nullable();
            $table->string('zip_code', 15)->nullable();
            $table->string('telephone', 25)->nullable();
            $table->string('alt_telephone', 25)->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->integer('created_at');
            $table->integer('created_by');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_visitor');
    }
};

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
        Schema::create('booking_voucher', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('ref_number', 45);
            $table->integer('total_visitors');
            $table->date('visit_date');
            $table->integer('voucher_status');
            $table->integer('voucher_type')->nullable();
            $table->string('requested_by');
            $table->longText('remarks')->nullable();
            $table->integer('created_at');
            $table->integer('created_by');
            $table->integer('updated_at')->nullable();
            $table->integer('updated_by')->nullable();
            $table->integer('booking_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_voucher');
    }
};

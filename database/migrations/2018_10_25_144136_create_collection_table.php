<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collection', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_usu_creation');
            $table->integer('id_usu_administration');
            $table->decimal('amount_information');
            $table->date('payment_date_information');
            $table->string('medium_payment');
            $table->string('like_voucher');
            $table->string('payment_code');
            $table->decimal('amount_charged');
            $table->date('payment_date_real');
            $table->string('motive_rejection');
            $table->string('status');
            $table->string('document_kennel');
            $table->datetime('date_creats');
            $table->datetime('validation_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('collection');
    }
}

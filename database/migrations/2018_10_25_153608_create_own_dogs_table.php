<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOwnDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('own_dogs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_hatchery');
            $table->integer('id_headline');
            $table->integer('id_kennel');
            $table->date('incription_date');
            $table->date('birth_date');
            $table->char('valid');
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
        Schema::dropIfExists('own_dogs');
    }
}

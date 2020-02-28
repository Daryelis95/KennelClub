<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHatchery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hatchery', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name_hatchery');
            $table->string('address_hatchery');
            $table->string('phone_hatchery');
            $table->string('email_hatchery');
            $table->string('date_inscription');
            $table->string('mobile');
            $table->string('location');
            $table->string('city');
            $table->string('country');
            $table->string('code_postal');
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
        Schema::dropIfExists('hatchery');
    }
}

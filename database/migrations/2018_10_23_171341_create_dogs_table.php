<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('id_hatchery');
            $table->integer('id_race');
            $table->integer('id_variety');
            $table->integer('id_color');
            $table->integer('id_hair_type');
            $table->integer('id_eyes_color');
            $table->integer('id_pattern');
            $table->string('sex');
            $table->string('microchip'); 
            $table->string('adn'); 
            $table->string('tatto'); 
            $table->string('titles');
            $table->string('medical_tests');
            $table->string('tests_of_work');
            $table->string('fit_of_child');
            $table->string('observations');
            $table->string('previous_number');
            $table->string('high_document');
            $table->boolean('high_state');
            $table->date('birth_date');
            $table->datetime('date_ingress_kennel');
            $table->datetime('date_registry');
            $table->date('service_date');
            $table->string('document_aut_service');
            $table->integer('user_load');
            $table->string('fom_high');
            $table->string('fom_signed_high');
            $table->string('fom_trf');
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
        Schema::dropIfExists('dogs');
    }
}

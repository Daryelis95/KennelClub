<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectionDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collection_dogs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_collection');
            $table->integer('id_dogs');
            $table->string('transaction');
            $table->string('status');
            $table->integer('id_usu_creation');
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
        Schema::dropIfExists('collection_dogs');
    }
}

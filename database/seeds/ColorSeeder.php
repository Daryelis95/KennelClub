<?php

use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('color')->insert([
            'name' => 'Marron'
        ]);
        DB::table('color')->insert([
            'name' => 'Blanco'
        ]); 
        DB::table('color')->insert([
            'name' => 'Negro'
        ]); 
        DB::table('color')->insert([
            'name' => 'Gris'
        ]);
    }
}

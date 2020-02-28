<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Dogs\Color;
use App\Models\Dogs\Races;

class ApiController extends Controller{

//  Color CRUD Controler 
    public function all(){
        return response()->json(Color::allColors());
    }

    public function byId($id){
        return response()->json(Color::byId($id));
    }

    public function insert(Request $request){
        return response()->json(Color::insert($request->json()->all()));
    }

    public function update($id, Request $request){
        return response()->json(Color::updateColor($id, $request->json()->all()));
    }

    public function delete($id){
        return response()->json(Color::destroy($id));

    }
// Race CRUD Controler 
    public function allRaces(){
        return response()->json(Races::allRaces());
    }
}
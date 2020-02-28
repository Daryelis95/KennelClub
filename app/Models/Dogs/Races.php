<?php
namespace App\Models\Dogs;

use Illuminate\Database\Eloquent\Model;

class Races extends Model{

    protected $table='race';

   public static function allRaces(){
        return self::all();
    }
    /*
    public static function byId($id){
        return self::find($id);
    }
    
    public static function insert($data){
        $race = new Races();
        $race->name = $data['name'];
        $race->size= $data['size'];
        $race->save();

        return $race;
    }
    public static function updateRaces($id, $data){
        $race = self::find($id);
        $race->name = $data['name'];
        $race->size= $data['size'];
        $race->save();
        return $race;
    }*/

}

?>
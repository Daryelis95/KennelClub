<?php
namespace App\Models\Dogs;

use Illuminate\Database\Eloquent\Model;

class Color extends Model{

    protected $table='color';

   public static function allColors(){
        return self::all();
    }
    public static function byId($id){
        return self::find($id);
    }
    public static function insert($data){
        $color = new Color();
        $color->name = $data['name'];
        $color->save();

        return $color;
    }
    public static function updateColor($id, $data){
        $color = self::find($id);
        $color->name = $data['name'];

        $color->save();
        return $color;
    }

}

?>
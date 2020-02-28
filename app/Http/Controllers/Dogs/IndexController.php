<?php
namespace App\Http\Controllers\Dogs;
use App\Http\Controllers\Controller;

class IndexController extends Controller{

    public function index(){
        return view('app.modules.dogs.index');
    }
   
    public function detail(){
        return view('app.modules.dogs.detail');
    }
}
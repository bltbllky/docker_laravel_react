<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function  get(){

        $data=Todo::get();

        return response()
                ->json([
                    'result'=>true,
                    'data'=>$data
                ],200);
    }

    public function  create(Request $request){

        $data = Todo::create($request->only(['name','status']));

        return response()
                ->json([
                    'result'=>true
                ],200);
    }
}

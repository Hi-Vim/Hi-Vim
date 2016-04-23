<?php
namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class PluginController extends Controller {

    public function showPlugin(){

        return view('pluginList', ['user' => User::findOrFail()]);
    }

    /**
     * 提交新的插件页面
     */
    public function submitPlugin(){
        return view("submitPluginPage");
    }

    /**
     * plugin存储
     * @param $request
     */
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $customer = new $this->customer;
        $customer->name = $request->input('name');
        $customer->phone = $request->input('phone');
        $customer->address = $request->input('address');
        $customer->save();
        return redirect()->route('customer.index');
    }
}
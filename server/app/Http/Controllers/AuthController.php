<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){

        // validate the request
        $userData = $request->validated();

        // Hash the password 
        $userData['password'] = Hash::make($userData["password"]);

        // Create a user
        $user = User::create($userData);

        // Make a token
        $token = $user->createToken("auth_token")->plainTextToken;

        return ["user"=>$user ,"token"=>$token];
    }

    public function login(LoginRequest $request){
        // validate the request
        $userData = $request->validated();

        $user = User::where("email" ,$userData->email);

        if(!$user || !Hash::check($userData->password ,$user->password )){
            return ["message"=>"Invalid credentials."];
        }

        $token = $user->createToken("auth_token")->plainTextToken;

        return ["user"=>$user ,"token"=>$token];
    }

    
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return ["message"=>"user logout successfuly"];
    }   
}

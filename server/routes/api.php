<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CardController;
use Illuminate\Support\Facades\Route;

Route::apiResource("cards" ,CardController::class);

Route::post("/register" ,[AuthController::class ,"register"]);
Route::post("/login" ,[AuthController::class ,"login"]);
Route::post("/logout" ,[AuthController::class ,"logout"])->middleware("auth:sanctum");

// 1|ZiURTDgzZcNL7MPkvFWX2I0uMtIs7QvdxuF4pv6v3f6dc63f

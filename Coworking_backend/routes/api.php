<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ReservationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/contact', [ContactController::class, 'store']);
Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [LoginController::class, 'store']);
Route::post('/reservations', [ReservationController::class, 'store']);

Route::apiResource('contact', ContactController::class);
Route::apiResource('login', LoginController::class);
Route::apiResource('register', RegisterController::class);
Route::apiResource('reservations', ReservationController::class);

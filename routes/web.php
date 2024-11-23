<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\GeneralController;
use Illuminate\Support\Facades\Route;


// General Routes
Route::get('/', [GeneralController::class, 'index'])->name('home');

// Auth Routes - Register
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);


// Auth Routes - Login
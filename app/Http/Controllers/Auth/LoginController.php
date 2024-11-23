<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    // Show the login form
    public function index () {
        return inertia(('auth/login'));
    }
}
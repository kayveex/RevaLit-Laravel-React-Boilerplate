<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    // Make the index method for '/'
    public function index () {
        return inertia('home');
    }
}

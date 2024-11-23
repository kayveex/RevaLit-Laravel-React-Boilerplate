<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    
    // Show the registration form
    public function index () {
        return inertia(('auth/register'));
    }

    public function store(Request $request)  {

        // Validate the request

        $this->validate($request, [
            'name'      => 'required' | 'max:255',
            'email'     => 'required|unique:users',
            'password'  => 'required|confirmed'
        ]);

        // Create Users

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password)
        ]);

        // redirect to login page
        return redirect('login')->with('success', 'Your account has been created successfully');
 
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    // Login simple : vérifier email et password
    public function store(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        $user = Register::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Identifiants invalides ❌'], 401);
        }

        return response()->json([
            'message' => 'Connexion réussie ✅',
            'user'    => $user
        ], 200);
    }
}

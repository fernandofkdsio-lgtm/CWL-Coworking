<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function index()
    {
        return Register::all();
    }

  public function store(Request $request)
{
    // Affiche le contenu reçu pour debug
    \Log::info($request->all());

    $request->validate([
        'first_name' => 'required|string|max:255',
        'last_name'  => 'required|string|max:255',
        'email'      => 'required|email|unique:registers,email',
        'password'   => 'required|string|min:6|confirmed', // doit matcher password_confirmation
    ]);

    $register = Register::create([
        'first_name' => $request->first_name,
        'last_name'  => $request->last_name,
        'email'      => $request->email,
        'password'   => Hash::make($request->password),
    ]);

    return response()->json([
        'message' => 'Inscription réussie ✅',
        'user' => $register,
    ], 201);
}

       
    public function show(Register $register)
    {
        return $register;
    }

    public function update(Request $request, Register $register)
    {
        $request->validate([
            'first_name' => 'sometimes|string|max:255',
            'last_name'  => 'sometimes|string|max:255',
            'email'      => 'sometimes|email|unique:registers,email,' . $register->id,
            'password'   => 'sometimes|string|min:6|confirmed',
        ]);

        if ($request->password) {
            $request->merge(['password' => Hash::make($request->password)]);
        }

        $register->update($request->all());

        return response()->json([
            'message' => 'Utilisateur mis à jour ✅',
            'user'    => $register,
        ]);
    }

    public function destroy(Register $register)
    {
        $register->delete();
        return response()->noContent();
    }
}

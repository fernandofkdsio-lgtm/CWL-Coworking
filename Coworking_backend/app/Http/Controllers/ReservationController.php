<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
     public function index()
    {
        return Reservation::all();
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'room_type' => 'required|string',
            'date' => 'required|date',
            'time' => 'required',
            'payment_method' => 'required|in:physique,en_ligne',
            'card_name' => 'nullable|string',
            'card_number' => 'nullable|string',
            'expiry_date' => 'nullable|string',
            'cvv' => 'nullable|string',
        ]);

        $reservation = Reservation::create($validated);

        return response()->json([
            'message' => 'Réservation enregistrée avec succès',
            'reservation' => $reservation
        ], 201);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //
    public function index()
    {
        return Contact::all();
    }
    public function store(Request $request)
    {
        $request->validate([
            'firstName'=>'required|string|max:255',
            'lastName'=>'required|string|max:255',
            'email'=>'required',
            'sujet'=>'required',
            'message'=>'required',
        ]);
        return Contact::create($request->all());

    }

    public function show(Contact $contact)
    {
        return $contact;
    }

     public function update(Request $request,Contact $contact)
     {
        $contact->update($request->all());
        return $contact;
     }
     public function destroy(Contact $contact)
     {
        $contact->delete();
        return response()->noContent();
     }
}
<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Contact View
     */
    public function index()
    {
        return inertia('ContactPage');
    }

    /**
     * Store New Contact Info
     */
    public function store(ContactRequest $request)
    {
        Contact::create($request->validated());
    
        return redirect('/contacts')
            ->with('success', 'Votre message a été envoyé avec succès.');
    }
}

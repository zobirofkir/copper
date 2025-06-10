<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscriptionRequest;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function store(SubscriptionRequest $request)
    {
        Subscription::create($request->validated());
        return redirect()->back();
    }
}

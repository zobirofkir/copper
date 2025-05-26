<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::getAllCompanies();
        return Inertia::render('WelcomePage', ['companies' => $companies]);
    }
}

<?php

namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HostingController extends Controller
{
    
    public function hostingForm(){
        return Inertia::render('Front/Services/Hosting/HostingForm');
    }
}

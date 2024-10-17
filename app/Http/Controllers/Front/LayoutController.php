<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;


class LayoutController extends Controller
{
    public function home()
    {
        return inertia('Front/Home');
    }

    public function services(){
        return inertia('Front/Contact');
    }

    public function about(){
        return inertia('Front/About');
    }

    public function contact(){
        return inertia('Front/Contact');
    }

    public function blog(){
        return inertia('Front/Blog');
    }

    public function webDevelopment(){
        return inertia('Front/Services/WebDevelopment');
    }

    public function Hosting(){
        return inertia('Front/Services/Hosting');
    }

    public function Ceo(){
        return inertia('Front/Services/CEO');
    }
}

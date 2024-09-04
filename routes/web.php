<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaksController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', 'dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::middleware(['auth','verified'])->group(function(){
     Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
     Route::get('/project', [ProjectController::class, 'index'])->name('project.index');
     Route::get('/project/show/{project}', [ProjectController::class, 'show'])->name('project.show');
     Route::get('/project/edit/{project}', [ProjectController::class, 'edit'])->name('project.edit');
     Route::post('/project/destroy/{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
     Route::get('/project/create', [ProjectController::class, 'create'])->name('project.create');
     Route::post('/project/store', [ProjectController::class, 'store'])->name('project.store');

     Route::get('/task', [TaksController::class, 'index'])->name('task.index');
     Route::get('/task/edite/{project}', [TaksController::class, 'edit'])->name('task.edit');
     Route::post( '/task/destroy/{task}', [TaksController::class, 'destroy'])->name('task.destroy');

     Route::get('/user', [UserController::class, 'index'])->name('user.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

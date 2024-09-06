<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaksController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
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
     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
     Route::resource('project', ProjectController::class);

     Route::get('/task', [TaksController::class, 'index'])->name('task.index');
     Route::get('/task/edite/{project}', [TaksController::class, 'edit'])->name('task.edit');
     Route::post( '/task/destroy/{task}', [TaksController::class, 'destroy'])->name('task.destroy');

     Route::resource('user', UserController::class);
     Route::get('/task/my-tasks', [TaksController::class, 'myTasks'])->name('task.myTasks');
     Route::resource('task', TaksController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

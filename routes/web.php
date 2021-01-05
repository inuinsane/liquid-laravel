<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PenilaianController;
use App\Http\Controllers\RoomController;
use App\Models\Room;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/check-kode', [RoomController::class, 'check_code'])->name('check.kode');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/liquid', [HomeController::class, 'liquid'])->name('liquid');


Route::prefix('room')->group(function() {
    Route::get('/', [RoomController::class, 'view'])->name('view.room');
    Route::post('/', [RoomController::class, 'create'])->name('create.room');
    Route::get('/{code}', [RoomController::class, 'get'])->name('get.room');
});

Route::prefix('penilaian')->group(function() {
    Route::post('/', [PenilaianController::class, 'create'])->name('create.penilaian');
});
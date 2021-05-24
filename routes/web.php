<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\FileController;

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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/upload', [FileController::class, 'upload'])->name('upload');

Route::get('/list_image', [FileController::class, 'index'])->name('images');

// Route::get('/delete_image/{$id}', [FileController::class, 'delete'])->name('delete');

Route::get('/delete_image/{$id}', function(){
    dd(1);
})->name('delete');
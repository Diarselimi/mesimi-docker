<?php

use App\Http\Controllers\CreateBookController;
use App\Http\Controllers\LookupBookController;
use App\Http\Controllers\PopularBooksController;
use App\Http\Controllers\SearchBookController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/books', [PopularBooksController::class, 'show']);
Route::post('/books', [CreateBookController::class, 'create']);
Route::get('/book/lookup', [LookupBookController::class, 'search']);
Route::get('/book/search', [SearchBookController::class, 'search']);

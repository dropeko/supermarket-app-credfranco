<?php

use Illuminate\Http\Request;
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

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

  Route::group(['prefix' => 'v1'], function(){
    
    //Produtos
    Route::apiResource('/produtos', ProdutosController::class);

    // Rota para o gerente
    Route::get('/manager', 'ProdutosController@getProdutosParaGerente');

    // Rota para o cliente
    Route::get('/client', 'ProdutoController@getProdutosParaCliente');
  });

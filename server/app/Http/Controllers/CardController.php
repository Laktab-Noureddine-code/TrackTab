<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class CardController extends Controller implements HasMiddleware
{

    public static function middleware(): array
{
    return [
        new Middleware('auth:sanctum')
    ];
}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Card::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request)
    {
        $fields = $request->validated();

        $card = $request->user()->cards()->create($fields);

        return $card;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

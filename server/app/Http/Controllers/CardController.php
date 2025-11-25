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
        return response()->json(["cards" => Card::all()], 200);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request)
    {
        $fields = $request->validated();

        $card = $request->user()->cards()->create($fields);

        return response()->json(['card' => $card], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}


    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCardRequest $request, string $id)
    {
        $fields = $request->validated();

        $card = Card::find($id);

        if (!$card) {
            return response()->json(["message" => "Card not found"], 404);
        }

        $card->update($fields);

        return response()->json(["card", $card], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json(["message" => "Card not found"], 404);
        }
        $card->delete();

        return response()->json(["message" => "Card deleted"], 200);
    }
}

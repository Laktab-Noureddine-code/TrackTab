<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Card extends Model
{
    /** @use HasFactory<\Database\Factories\CardFactory> */
    use HasFactory ,HasApiTokens;

    protected $fillable = [
        "name",
        "type",
        "last_digits",
        "currency",
        "balance",
        "active"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}

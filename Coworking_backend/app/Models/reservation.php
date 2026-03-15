<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'room_type',
        'date',
        'time',
        'payment_method',
        'card_name',
        'card_number',
        'expiry_date',
        'cvv',
    ];
}

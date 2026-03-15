<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Register extends Authenticatable
{
    use HasApiTokens, HasFactory;

  protected $fillable = [
    'first_name',
    'last_name',
    'email',
    'password',
];

    protected $hidden = [
        'password',
    ];
}

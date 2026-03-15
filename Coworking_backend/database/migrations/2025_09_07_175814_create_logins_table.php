<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');        // Prénom
            $table->string('last_name');         // Nom
            $table->string('email')->unique();   // Email unique
            $table->string('password');          // Mot de passe (hashé)
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('logins');
    }
};

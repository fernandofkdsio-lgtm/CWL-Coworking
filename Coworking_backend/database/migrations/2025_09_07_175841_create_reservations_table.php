<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   public function up()
{
    Schema::create('reservations', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->string('room_type');
        $table->date('date');
        $table->time('time');
        $table->enum('payment_method', ['physique', 'en_ligne']);
        $table->string('card_name')->nullable();
        $table->string('card_number')->nullable();
        $table->string('expiry_date')->nullable();
        $table->string('cvv')->nullable();
        $table->timestamps();
    });
}

    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};

<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
          'name' => 'Jack Sparrow',
          'email' => 'jack@sparrow.com',
          'password' => bcrypt('password')
        ]);

        $user->createToken('JackSparrow')->plainTextToken;

        User::factory()->count(5)->create();
    }
}

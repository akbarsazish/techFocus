<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Project; 

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a user
        User::factory()->create([
            'name' => 'ali',
            'email' => 'ali@gmail.com',
            'password' => bcrypt('abc@12345'),
            'email_verified_at' => now(),
        ]);

        // Create projects with tasks
        Project::factory()
            ->count(30)
            ->hasTasks(30)
            ->create();
    }
}
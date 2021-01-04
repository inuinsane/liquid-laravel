<?php

namespace Database\Seeders;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['jenis' => 'kelebihan', 'keterangan' => 'Menepati Janji', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Murah senyum', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Memotivasi orang lain', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Peduli terhadap lingkungan', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Tidak Sombong', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Rapi', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Lucu', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Sopan & Santun', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Menjadi teladan', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Humoris / lucu', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Senang membantu orang lain', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Suka berbagi', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Rajin', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Tidak menepati janji', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Tidak peka terhadap lingkungan', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Pelit', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Sombong', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Suka menyalahkan orang lain', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Banyak mengeluh', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Pemendam rasa', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Mudah tersinggung', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Menyinggung orang lain', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Kurang sopan santun', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach ($items as $item) {
            Category::updateOrInsert($item);
        }
    }
}

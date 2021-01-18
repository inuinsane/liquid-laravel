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
            ['jenis' => 'kelebihan', 'keterangan' => 'Menepati Janji', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Murah senyum', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Memotivasi orang lain', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Peduli terhadap lingkungan', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Tidak Sombong', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Rapi', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Lucu', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Sopan & Santun', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Menjadi teladan', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Humoris / lucu', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Senang membantu orang lain', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Suka berbagi', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kelebihan', 'keterangan' => 'Rajin', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Tidak menepati janji', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Tidak peka terhadap lingkungan', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Pelit', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Sombong', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Suka menyalahkan orang lain', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Banyak mengeluh', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Pemendam rasa', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Mudah tersinggung', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Menyinggung orang lain', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['jenis' => 'kekurangan', 'keterangan' => 'Kurang sopan santun', 'input_oleh' => 'Sistem', 'edit_oleh' => 'Sistem', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach ($items as $item) {
            Category::updateOrInsert($item);
        }
    }
}

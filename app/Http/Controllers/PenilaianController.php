<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Penilaian;
use App\Models\Room;
use Illuminate\Support\Facades\Auth;

class PenilaianController extends Controller
{
    public function create(Request $request)
    {
        $penilaian = new Penilaian([
            'code' => $request->code,
            'id_penilai' => Auth::user()->id,
            'kelebihan' => serialize($request->kelebihan),
            'kekurangan' => serialize($request->kekurangan),
            'saran' => $request->saran,
            'harapan' => $request->harapan,
            'tigaKata' => $request->tigaKata,
        ]);
        $penilaian->save();

        $success = array('type' => 'success', 'message' => 'Penilaian telah disimpan!');
        return redirect()->back()->with($success);
    }


    public function get($code)
    {
        $error = array('type' => 'error', 'message' => 'Penilaian tidak ditemukan');
        $penilaian = Penilaian::where('code', $code)->get();
        if ($penilaian->isNotEmpty()) {
            $categories = Category::all();
            $target = Room::where('code', $code)->first()->nama_target;
            $penilaian->map(function ($p) {
                $p->list_kelebihan = unserialize($p->kelebihan);
                $p->list_kekurangan = unserialize($p->kekurangan);
            });
            // dd($penilaian);
            return view('penilaian', compact('penilaian', 'categories', 'target', 'code'));
        } else {
            return redirect()->back()->with($error);
        }
    }

    public function view()
    {
        return view('penilaian');
    }
}

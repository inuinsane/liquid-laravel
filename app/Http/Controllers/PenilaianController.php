<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Penilaian;
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

        $success = array('type' => 'success', 'message' => 'Penilaian sukses!');
        return redirect()->back()->with($success);
    }


    public function view($code)
    {
        $penilaian = Penilaian::where('code', $code)->first();
        $categories = Category::all();
        if($penilaian !== null) {
            $penilaian->kelebihan = unserialize($penilaian->kelebihan);
            $penilaian->kekurangan = unserialize($penilaian->kekurangan);
            // return response()->json(['penilaian' =>$penilaian, 'categories' => $categories], 200);
            return view('penilaian', compact('penilaian', 'categories'));
        } else {
            return response()->json('Room tidak ditemukan', 404);
        }
    }
}

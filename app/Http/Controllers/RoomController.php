<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function create(Request $request)
    {
        dd($request->all());
    }

    public function view()
    {
        return view('room');
    }

    // Ajax dari inputan kolom kode
    public function check_code(Request $request)
    {
        if ($request->has('kode')) {
            $room = Room::where('code', $request->kode)->first();
            if (!$room) {
                return response()->json('Kode tidak ditemukan!');
            } else {
                if ($room->open === "1") {
                    return response()->json(true);
                }
                return response()->json('Room sudah ditutup!');
            }
        } else {
            return response()->json('Error! Kode harus diisi');
        }
    }


    // Mengambil data room berdasarkan kode
    public function get($code)
    {
        $room = Room::where('code', $code)->first();
        if($room) {
            if($room->open === "1") {
                return response()->json($room, 200);
            } else {
                return response()->json('Room sudah ditutup', 404);
            }
        } else {
            return response()->json('Tidak ditemukan', 404);
        }
    }
}

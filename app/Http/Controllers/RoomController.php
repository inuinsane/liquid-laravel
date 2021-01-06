<?php

namespace App\Http\Controllers;

use App\Models\Penilaian;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoomController extends Controller
{
    public function create(Request $request)
    {
        $target = Auth::user();
        $date = $request->date;
        $characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $charactersLength = 6;
        $randomString = '';

        if ($date !== null) {
            for ($i = 0; $i < $charactersLength; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            $room = new Room([
                'code' => $randomString,
                'id_target' => $target->id,
                'nama_target' => $target->name,
                'date' => $date,
                'open' => '1',
            ]);
            $room->save();
            return redirect()->back()->with(array('message' => 'Room berhasil dibuat', 'type' => 'success'));
        } else {
            return redirect()->back()->with(array('message' => 'Tanggal harus diisi', 'type' => 'error'));
        }
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
            // Kalau tidak ada room
            if (!$room) {
                return response()->json('Kode tidak ditemukan!');
            } else {
                // Apakah room masih open
                if ($room->open === "1") {
                    // apakah id target = id penilai
                    if ($room->id_target == Auth::user()->id) {
                        return response()->json('Tidak dapat menilai diri sendiri');
                    } else {
                        return response()->json(true);
                    }
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
        $user = Auth::user();
        $room = Room::where('code', $code)->first();
        // Apakah room tersedia
        if ($room) {
            // Apakah room masih open
            if ($room->open === "1") {
                // Apakah user sudah melakukan penilaian
                $penialaian = Penilaian::where('id_penilai', $user->id)->first();
                if (!$penialaian) {
                    return response()->json($room, 200);
                } else {
                    $room->message = 'Anda sudah melakukan penilaian';
                    return response()->json($room, 200);
                }
            } else {
                return response()->json('Room sudah ditutup', 404);
            }
        } else {
            return response()->json('Tidak ditemukan', 404);
        }
    }
}

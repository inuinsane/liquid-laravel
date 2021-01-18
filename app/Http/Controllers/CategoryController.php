<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class CategoryController extends Controller
{
    // Auth Protection
    public function _construct()
    {
        return $this->middleware('auth')->except(['json']);
    }

    // Create
    public function create(Request $request)
    {
        $category = new Category([
            'jenis' => $request->jenis,
            'keterangan' => $request->keterangan,
            'input_oleh' => Auth::user()->name,
        ]);
        $category->save();
        return redirect()->back()->with(array('type' => 'success', 'message' => 'Kategori berhasil ditambahkan'));
    }

    // Datatable
    public function json()
    {
        $categories = Category::all();
        $categories->map(function ($category) {
            $category->dibuat_tanggal = Carbon::createFromDate($category->created_at->toDateTimeString())->locale('id')->isoFormat('dddd, LL');
            $category->diedit_tanggal = Carbon::createFromDate($category->updated_at->toDateTimeString())->locale('id')->isoFormat('dddd, LL');
        });
        return DataTables::of($categories)
            // DeleteButton
            ->editColumn('action', function ($categories) {
                return '<button class="btn btn-danger delete-button" data-id="' . $categories->id . '" data-jenis = "' . $categories->jenis . '" data-keterangan= "' . $categories->keterangan . '" data-tooltip="true" data-placement="top" title="Hapus"><i class="c-icon cil-trash"></i></button>';
            })

            // Keterangan
            ->editColumn('keterangan', function ($categories) {
                return '<a href="javascript:void(0)" class="text-decoration-none edit-button" data-target="#edit-modal" data-toggle="modal" data-id="' . $categories->id . '" data-jenis= "' . $categories->jenis . '" data-keterangan= "' . $categories->keterangan . '" data-tooltip="true"  data-placement="top" title="Klik untuk edit"> ' . $categories->keterangan . ' <i class="c-icon cil-pencil ml-2"></i></a>';
            })

            // Dibuat tanggal 
            ->editColumn('created_at', function ($categories) {
                return  $categories->dibuat_tanggal;
            })
            // Diedit tanggal
            ->editColumn('updated_at', function ($categories) {
                return  $categories->diedit_tanggal;
            })


            ->rawColumns(['action', 'keterangan', 'created_at', 'updated_at'])
            ->make(true);
    }

    // Delete
    public function delete(Category $category)
    {
        $category->delete();
        return redirect()->back()->with(array('type' => 'success', 'message' => 'Kategori berhasil dihapus'));
    }

    // Update
    public function update(Request $request)
    {
        $user = Auth::user();
        $category = Category::find($request->id);
        if ($category != null) {
            $category->update([
                'jenis' => $request->jenis,
                'keterangan' => $request->keterangan,
                'edit_oleh' => $user->name,
            ]);
            $category->save();
            return redirect()->back()->with(array('type' => 'success', 'message' => 'Kategori berhasil diupdate'));
        } else {
            return redirect()->back()->with(array('type' => 'error', 'message' => 'Kategori tidak ditemukan'));
        }
    }
}

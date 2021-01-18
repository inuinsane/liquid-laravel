<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class CategoryController extends Controller
{
    public function json()
    {
        $category = Category::all();
        return DataTables::of($category)
            ->editColumn('action', function ($category) {
                return '<a href="javascript:void(0)" class="btn btn-primary" data-toggle="modal" data-target="edit-modal" onclick="showModal()" data-value= "' . $category->keterangan . '"><i class="c-icon cil-pencil"></i></a>';
            })
            ->rawColumns(['action'])
            ->make(true);
    }
}

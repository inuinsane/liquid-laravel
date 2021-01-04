@extends('layouts.dashboard')

@section('content')
    <div class="row">
        {{-- Melakukan Penilaian --}}
        <div class="col-sm-6 col-lg-4">
            <div class="card text-white bg-primary">
                <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                    <div class="mb-3">
                        <div class="text-value-lg">10 Kali</div>
                        <div>Melakukan Penilaian</div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Liquid Belum dinilai --}}
        <div class="col-sm-6 col-lg-4">
            <div class="card text-white bg-warning">
                <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                    <div class="mb-3">
                        <div class="text-value-lg">0 Liquid</div>
                        <div>Belum Dinilai</div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Dinilai --}}
        <div class="col-sm-6 col-lg-4">
            <div class="card text-white bg-success">
                <div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
                    <div class="mb-3">
                        <div class="text-value-lg">2 Kali</div>
                        <div>Dinilai</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

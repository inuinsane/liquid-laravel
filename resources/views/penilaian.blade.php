@extends('home')
@section('content')
    <div class="row justify-content-center">
        <div class="col-md-4 text-center">
            <h1>Lihat Hasil Liquid</h1>
            <div class="justify-content-center">
                <div class="card">
                    <div class="card-body">
                        <h5>Kode Room</h5>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend mb-3">
                                <span class="input-group-text">
                                    <i class="cil-search"></i>
                                </span>
                            </div>
                            <input name="code" class="form-control mb-3" type="text" placeholder="Masukkan code room"
                                required autofocus>
                            <input type="submit" class="btn btn-block btn-primary" id="submit-btn">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @isset($penilaian)
        <div class="row justify-content-center">
            <div class="col-md 12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Detail</h3>
                        <p class="card-subtitle text-muted">Berikut ini adalah detail penilaian</p>
                    </div>
                </div>
            </div>
        </div>

    @endisset
@endsection

@section('script')
    <script>
        $('#submit-btn').on('click', function() {
            console.log('Clicked');
        });
    </script>
@endsection

@extends('layouts.dashboard')
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
                            <input name="code" id="code" class="form-control mb-3" type="text"
                                placeholder="Masukkan code room" value="{{ $code ?? '' }}"
                                onfocus="this.value = this.value.toUpperCase();"
                                onkeyup="this.value = this.value.toUpperCase();" required autofocus>
                            <input type="submit" class="btn btn-block btn-primary" id="submit-btn">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @isset($penilaian)
        <div class="row">
            <div class="col-md-12">
                <h3 class="card-title">Detail Penilaian</h3>
                <p class="card-subtitle mb-5">Berikut ini adalah detail penilaian liquid untuk:
                    <strong> {{ $target ?? '' }} </strong>
                </p>
            </div>
            {{-- Kelebihan --}}
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-sm-6">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-mood-very-good"></i>
                                    Kelebihan
                                </h5>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-header-action float-right jumlah-penilai">
                                    Dinilai oleh: 0 orang
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        @foreach ($categories as $category)
                            @if ($category->jenis == 'kelebihan')
                                <div class="form-group">
                                    <label for="{{ $category->keterangan }}" class="form-label">
                                        <strong>{{ $category->keterangan }}</strong>
                                        <span id="total-{{ $category->id }}" class="ml-1 text-muted"></span>
                                    </label>
                                    <div class="progress">
                                        <div id="{{ $category->id }}" class="progress-bar bg-info text-white" aria-valuemin="0"
                                            aria-valuemax="100" aria-valuenow="80">
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>

            {{-- Kekurangan --}}
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-sm-6">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-frown"></i>
                                    Kekurangan
                                </h5>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-header-action float-right jumlah-penilai">
                                    Dinilai oleh: 0 orang
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        @foreach ($categories as $category)
                            @if ($category->jenis == 'kekurangan')
                                <div class="form-group">
                                    <label for="{{ $category->keterangan }}" class="form-label">
                                        <strong>{{ $category->keterangan }}</strong>
                                        <span id="total-{{ $category->id }}" class="ml-1 text-muted"></span>
                                    </label>
                                    <div class="progress">
                                        <div id="{{ $category->id }}" class="progress-bar bg-info text-white" aria-valuemin="0"
                                            aria-valuemax="100" aria-valuenow="80">
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>

            {{-- Saran - Harapan - Tiga Kata --}}
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-sm-6">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-gift"></i>
                                    Saran dan Harapan
                                </h5>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-header-action float-right jumlah-penilai">
                                    Dinilai oleh: 0 orang
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5>Harapan</h5>
                        <h5>Saran</h5>
                    </div>
                </div>
            </div>
        </div>
    @endisset
@endsection

@section('script')
    <script>
        const penilaian = @json($penilaian ?? '');
        // jumlah penilai
        const jumlah_penilai = penilaian.length;

        if (penilaian !== '') {
            const dinilai = document.querySelectorAll('.jumlah-penilai');
            dinilai[0].innerHTML = `Dinilai oleh: ${jumlah_penilai} orang`;
            dinilai[1].innerHTML = `Dinilai oleh: ${jumlah_penilai} orang`;
            // console.log(penilaian);


            // mengisi kelebihan dan kekurangan
            let kelebihan_kekurangan = [];
            penilaian.forEach(item => {
                item.list_kelebihan.forEach(el => {
                    if (el !== null) {
                        kelebihan_kekurangan.push(el);
                    }
                });
                item.list_kekurangan.forEach(el => {
                    if (el !== null) {
                        kelebihan_kekurangan.push(el);
                    }
                });

            });
            // console.log(kelebihan_kekurangan);



            // menghitung kelebihan dan kekurangan
            let isian = {};
            kelebihan_kekurangan.forEach(function(i) {
                isian[i] = (isian[i] || 0) + 1;
            });
            // console.log(isian);
            let element_kelebihan = Object.getOwnPropertyNames(isian);


            // Menghitung sesuai dengan kategori kelebihan dan kekurangan
            Object.keys(isian).forEach(function(key) {
                let progress = document.getElementById(key);
                let persen = document.getElementById(`total-${key}`);

                // Mengisi progress bar
                progress.setAttribute('aria-valuenow', Math.round((isian[key] / jumlah_penilai) * 100));
                progress.style.width = Math.round((isian[key] / jumlah_penilai) * 100).toString() + "%";

                // Mengisi keterangan penilai pada progress bar
                progress.innerHTML = `(${isian[key]} dari ${jumlah_penilai})`;

                // Mengisi persen nilai
                persen.innerHTML = Math.round((isian[key] / jumlah_penilai) * 100).toString() + "%";
            });
        }




        $('#submit-btn').on('click', function() {
            let code = document.getElementById('code');
            window.location = `/penilaian/${code.value}`;
        });

    </script>
@endsection

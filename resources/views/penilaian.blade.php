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
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Detail Penilaian</h3>
                        <p class="card-subtitle mb-2">Berikut ini adalah detail penilaian liquid untuk:
                            <strong> {{ $target ?? '' }} </strong>
                        </p>
                        <p class="card-subtitle text-muted jumlah-penilai mb-2">Dinilai Oleh: </p>
                        <p class="card-subtitle text-muted" id="status">Status:</p>
                    </div>
                </div>
            </div>
            {{-- Kelebihan --}}
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-mood-very-good"></i>
                                    Kelebihan
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        @foreach ($categories as $category)
                            @if ($category->jenis == 'kelebihan')
                                <div class="form-group isian-wrapper" id="isian-{{$category->id}}" data-value="0">
                                    <label for="{{ $category->keterangan }}" class="form-label kolom-progress">
                                        <strong>{{ $category->keterangan }}</strong>
                                        <span id="total-{{ $category->id }}" class="ml-1 text-muted"></span>
                                    </label>
                                    <div class="progress">
                                        <div id="{{ $category->id }}" class="progress-bar bg-info text-white" aria-valuemin="0"
                                            aria-valuemax="100" aria-valuenow="0">
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
                            <div class="col-sm-12">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-frown"></i>
                                    Kekurangan
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        @foreach ($categories as $category)
                            @if ($category->jenis == 'kekurangan')
                                <div class="form-group isian-wrapper" id="isian-{{$category->id}}" data-value="0">
                                    <label for="{{ $category->keterangan }}" class="form-label kolom-progress">
                                        <strong>{{ $category->keterangan }}</strong>
                                        <span id="total-{{ $category->id }}" class="ml-1 text-muted"></span>
                                    </label>
                                    <div class="progress">
                                        <div id="{{ $category->id }}" class="progress-bar bg-info text-white" aria-valuemin="0"
                                            aria-valuemax="100" aria-valuenow="0">
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
                            <div class="col-sm-12">
                                <h5 class="text-xl">
                                    <i class="c-icon mr-1 cil-gift"></i>
                                    Saran dan Harapan
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h6>Harapan</h6>
                        <ul id="harapan"></ul>

                        <h6>Saran</h6>
                        <ul id="saran"></ul>

                        <h6>Tiga Kata untuk {{$target ?? ''}} </h6>
                        <ul id="tiga-kata"></ul>
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
        const status = @json($status -> open ?? '');
        let isOpen = status == 1 ? `<strong class="text-lg text-success">Open</strong>` :
            `<strong class="text-lg text-danger">Closed</strong>`;

        if (penilaian !== '') {
            const dinilai = document.querySelector('.jumlah-penilai');
            dinilai.innerHTML = `Dinilai oleh: ${jumlah_penilai} orang`;
            document.getElementById('status').innerHTML = `Status: <strong>${isOpen}</strong>`;


            // mengisi kelebihan dan kekurangan
            let kelebihan_kekurangan = [];
            penilaian.forEach(item => {
                if (item.list_kelebihan) {
                    item.list_kelebihan.forEach(el => {
                        if (el !== null) {
                            kelebihan_kekurangan.push(el);
                        }
                    });
                }
                if (item.list_kekurangan) {
                    item.list_kekurangan.forEach(el => {
                        if (el !== null) {
                            kelebihan_kekurangan.push(el);
                        }
                    });
                }

            });



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
                // ini adalah form-group 
                let wrapper = document.getElementById(`isian-${key}`);

                // Mengisi value pada wrapper progress untuk hide / show
                wrapper.setAttribute('data-value', Math.round((wrapper[key] / jumlah_penilai) * 100).toString());

                // Mengisi progress bar
                progress.setAttribute('aria-valuenow', Math.round((isian[key] / jumlah_penilai) * 100));
                progress.style.width = Math.round((isian[key] / jumlah_penilai) * 100).toString() + "%";

                // Mengisi keterangan penilai pada progress bar
                progress.innerHTML = `(${isian[key]} dari ${jumlah_penilai})`;

                // Mengisi persen nilai
                persen.innerHTML = Math.round((isian[key] / jumlah_penilai) * 100).toString() + "%";
            });

            // Mengisi Harapan
            const harapan = document.getElementById('harapan');
            const saran = document.getElementById('saran');
            const tigaKata = document.getElementById('tiga-kata');
            penilaian.forEach(item=> {
                harapan.innerHTML = `<li>${item.harapan}</li>`;
                saran.innerHTML = `<li>${item.saran}</li>`;
                tigaKata.innerHTML = `<li>${item.tigaKata}</li>`;
            })

            // Hide progress bar yang kosong
            $(document).ready(function() {
                const wrapper = $('.isian-wrapper');
                $(wrapper).each(function() {
                    if ($(this).attr('data-value') == '0') {
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                })
            });
            
            
        }



        // Search Liquid Data
        $('#submit-btn').on('click', function() {
            let code = document.getElementById('code');
            if (code.value == '') {
                Swal.fire({
                    title: 'Error!',
                    text: 'Kode room belum diisi',
                    icon: 'error',
                });
            } else {
                window.location = `/penilaian/${code.value}`;
            }
        });

    </script>
@endsection

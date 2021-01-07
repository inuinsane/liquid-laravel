@extends('layouts.dashboard')


@section('content')
    <div class="row" id="room-page">
        <h3 class="ml-3 mb-5">History Liquid Saya</h3>
        <div class="col-md-12">
            <div class="row">
                @if (isset($rooms))
                    @foreach ($rooms as $room)
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mt-2">{{ $room->tanggal }}
                                        <span class="badge badge-success float-right">
                                            {{ $room->code }}
                                        </span>
                                    </h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        Status:
                                        @if ($room->open == 1)
                                            <span class="badge badge-success">Open</span>
                                        @else
                                            <span class="badge badge-danger">Closed</span>
                                        @endif
                                    </p>
                                    <p class="card-text">
                                        Target: {{ $room->nama_target }}
                                    </p>
                                    <p class="card-text">
                                        Dinilai oleh: {{ $room->jumlah }} orang
                                    </p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <a href="/penilaian/{{$room->code}}" target="_blank" class="card-text btn-link view-button"
                                                data-code={{ $room->code }}>
                                                Lihat hasil
                                            </a>
                                        </div>
                                        <div class="col-md-6">
                                            @if ($room->open == 1)
                                                <a href="javascript:void(0)"
                                                    class="card-text btn-link float-right text-danger action-button"
                                                    data-code={{ $room->code }} data-type="menutup">
                                                    Tutup Room
                                                </a>
                                            @else
                                                <a href="javascript:void(0)"
                                                    class="card-text btn-link float-right text-warning action-button"
                                                    data-code={{ $room->code }} data-type="membuka lagi">
                                                    Buka Room
                                                </a>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    {{-- Belum punya history --}}
                    <div class="justify-content-center">
                        <div class="col-md-12">
                            <div class="alert alert-warning">
                                {{ $message }}
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script>
        $(document).ready(function() {
            // Flash Message
            @if(Session::has('message'))
                let type =  "{{Session::get('type')}}";
                Swal.fire({
                    title: type == 'error' ? "Error" : "Sukses",
                    text: "{{Session::get('message')}}",
                    icon: type,
                    showCancelButton: false,
                    showConfirmButton: false,
                })
            @endif

            // Action button
            $(".action-button").click(function() {
                let code = $(this).attr('data-code');
                let type = $(this).attr('data-type');
                Swal.fire({
                    title: "Perhatian",
                    text: `Apakah anda ingin ${type} room ini?`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ok, sikat!',
                    cancelButtonText: 'Eh, Gajadi',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Oke!",
                            text: "Mohon tunggu sebentar",
                            icon: "success",
                            showConfirmButton: false,
                        });
                        type.includes('buka') ? 
                        window.location = `/open-room/${code}` :
                        window.location = `/close-room/${code}`;
                    }
                });
            });

            // View Button
            $(".view-button").click(function() {
                let code = $(this).attr('data-code');
                let url = `/penilaian/${code}`;
                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function(res) {
                        console.log(res);
                    },
                });
            });
        });

    </script>
@endsection

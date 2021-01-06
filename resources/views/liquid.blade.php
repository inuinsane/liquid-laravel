@extends('layouts.dashboard')

@section('content')
    <div class="row">
        <div class="col-md-4">
            {{-- Input Kode Cek Room --}}
            <div class="card">
                <div class="card-header">
                    <h5>Kode Room</h5>
                </div>
                <div class="card-body">
                    {{-- Form Pengecekan Kode --}}
                    <form action="{{ route('check.kode') }}" id="form-kode" method="GET">
                        <div class="form-group">
                            <label for="kode" class="form-label">Kode Room (6 Digit huruf kapital)</label>
                            <input type="text" class="form-control" name="kode" id="kode" placeholder="Masukkan kode room">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block" id="check-code-btn">Cek Room</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-8" id="liquid" style="display: none">
            <div class="card">
                {{-- Penilaian Liquid --}}
                <div class="card-header">
                    <h3>Pengisian Form Liquid</h3>
                    <p id="message"></p>
                    <span id="status" class="badge badge-success">Open</span>
                </div>
                <div class="card-body">
                    <form action="{{ route('create.penilaian') }}" method="POST" id="form-pengisian">
                        @csrf
                        <input type="hidden" id="code" name="code" value="Kode Room">
                        {{-- Detail --}}
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="name" class="form-label">Nama Target</label>
                                    <input type="text" name="name" id="name" class="form-control disabled"
                                        value="Nama Target" disabled>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="kode_room" class="form-label">Kode Room</label>
                                    <input type="text" name="kode_room" id="kode_room" class="form-control disabled"
                                        value="XXXXXX" disabled>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="date" class="form-label">Tanggal Open</label>
                                    <input type="date" name="date" id="date" class="form-control disabled" value=""
                                        disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {{-- Kelebihan --}}
                            <div class="col-md-6">
                                <label for="kelebihan" class="form-label">Kelebihan</label>
                                <select multiplename="kelebihan" id="kelebihan" multiple name="kelebihan[]"
                                    class="form-control c-multi-select c-multi-select-inline">
                                    @foreach ($category as $item)
                                        @if ($item->jenis === 'kelebihan')
                                            <option value="{{ $item->id }}">{{ $item->keterangan }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>

                            {{-- Kekurangan --}}
                            <div class="col-md-6">
                                <label for="kekurangan" class="form-label">Kekurangan</label>
                                <select multiplename="kekurangan" id="kekurangan" multiple name="kekurangan[]"
                                    class="form-control c-multi-select c-multi-select-inline">
                                    @foreach ($category as $item)
                                        @if ($item->jenis === 'kekurangan')
                                            <option value="{{ $item->id }}">{{ $item->keterangan }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                            {{-- Saran --}}
                            <div class="col-md-12 mt-3">
                                <div class="form-group">
                                    <label for="saran" class="form-label">Saran</label>
                                    <textarea name="saran" id="saran" cols="30" rows="5" class="form-control"
                                        placeholder="Masukkan saran anda"></textarea>
                                </div>
                            </div>
                            {{-- Harapan --}}
                            <div class="col-md-12 mt-3">
                                <div class="form-group">
                                    <label for="harapan" class="form-label">Harapan</label>
                                    <textarea name="harapan" id="harapan" cols="30" rows="5" class="form-control"
                                        placeholder="Masukkan harapan anda"></textarea>
                                </div>
                            </div>
                            {{-- Tiga Kata --}}
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="tigaKata" class="form-label">Tiga Kata untuk ...</label>
                                    <input type="tigaKata" name="tigaKata" id="tigaKata" class="form-control"
                                        placeholder="Masukkan tiga kata untuk target">
                                </div>
                            </div>
                            {{-- Submit --}}
                            <div class="col-md-12">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" type="submit">
                                        <i class="cil-icon cil-check"></i>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script>
        // Validasi input kode  
        $("#form-kode").validate({
            rules: {
                kode: {
                    required: true,
                    minlength: 6,
                    maxlength: 6,
                    remote: {
                        url: '/check-kode',
                        type: "GET",
                        data: {
                            kode: function() {
                                return $('#kode').val().toUpperCase();
                            }
                        }
                    }
                }
            },
            messages: {
                kode: {
                    required: 'Kolom harus diisi',
                    minlength: 'Hanya boleh diisi 6 digit',
                    maxlength: 'Hanya boleh diisi 6 digit',
                }
            },
            errorElement: 'em',
            errorPlacement: function errorPlacement(error, element) {
                error.addClass('invalid-feedback');
                if (element.prop('type') === 'checkbox') {
                    error.insertAfter(element.parent('label'));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function highlight(element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function unhighlight(element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            }
        });

        // Get Room Detail
        function getRoomDetail(code) {
            $.ajax({
                type: "GET",
                url: `/room/${code}`,
                success: function(res) {
                    $("#name").val(res.nama_target);
                    $("#kode_room").val(res.code);
                    $("#code").val(res.code);
                    $("#date").val(res.date);
                    if (res.message) {
                        $("#message").html(res.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: res.message,
                            footer: 'Anda hanya dapat melakukan '
                        });
                        $("#liquid").hide();
                    } else {
                        $("#liquid").show();
                    }
                }
            });
        }

        $("#form-kode").submit(function(e) {
            e.preventDefault();
            let target = $(this).attr('action');
            $.ajax({
                type: "GET",
                url: target,
                data: {
                    kode: $("#kode").val().toUpperCase(),
                },
                success: function(res) {
                    res === true ?
                        // $("#liquid").show() && 
                        getRoomDetail($("#kode").val().toUpperCase()) :
                        $("#liquid").hide();
                }
            });
        });

        const kelebihan = $('#kelebihan').filterMultiSelect({

            // displayed when no options are selected
            placeholderText: "Pilih Kelebihan",

            // placeholder for search field
            filterText: "Filter",

            // Select All text
            selectAllText: "Pilih semua",

            // determine if is case sensitive
            caseSensitive: false,

            // allows the user to disable and enable options programmatically
            allowEnablingAndDisabling: false,

        });
        const kekurangan = $('#kekurangan').filterMultiSelect({

            // displayed when no options are selected
            placeholderText: "Pilih Kekurangan",

            // placeholder for search field
            filterText: "Filter",

            // Select All text
            selectAllText: "Pilih semua",

            // determine if is case sensitive
            caseSensitive: false,

            // allows the user to disable and enable options programmatically
            allowEnablingAndDisabling: false,

        });

    </script>
@endsection

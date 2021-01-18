@extends('layouts.dashboard')

@section('content')
    <div class="row">
        <div class="col-md-12">
            {{-- Input Kode Cek Room --}}
            <div class="row mb-3">
                <div class="col-sm-6 text-left">
                    <h3>Tabel Kategori</h3>
                    <button class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#create-modal">
                        <i class="c-icon cil-plus mr-1"></i>
                        Tambah Kategori
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="table table-responsive">
                        <div id="data-tables-wrapper" class="dataTables_wrapper dt-bootstrap4 responsive">
                            <table class="table table-striped table-bordered datatable dataTable no-footer"
                                id="data-kategori">
                                <thead>
                                    <th>No</th>
                                    <th>Jenis</th>
                                    <th>Keterangan</th>
                                    <th>Dibuat Tanggal</th>
                                    <th>Dibuat Oleh</th>
                                    <th>Diedit Tanggal</th>
                                    <th>Diedit Oleh</th>
                                    <th>Action</th>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{-- EDIT CATEGORY --}}
        <div class="modal fade" id="edit-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-modal="true">
            <div class="modal-dialog modal-info modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form action="{{ route('update.category') }}" method="post" id="form-edit-kategori">
                        @csrf
                        <input type="hidden" name="id" id="id" value="">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Kategori</h4>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="jenis" class="form-label">Jenis *</label>
                                <select name="jenis" id="jenis" class="form-control">
                                    <option value="" disabled>Pilih salah satu</option>
                                    <option value="kelebihan">Kelebihan</option>
                                    <option value="kekurangan">Kekurangan</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="keterangan" class="form-label">Keterangan *</label>
                                <input type="text" name="keterangan" id="keterangan" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Batal</button>
                            <button class="btn btn-info save" type="submit">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {{-- INPUT CATEGORY --}}
        <div class="modal fade" id="create-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-modal="true">
            <div class="modal-dialog modal-info modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form action="{{ route('create.category') }}" method="post" id="form-create-kategori">
                        @csrf
                        <input type="hidden" name="id" id="id" value="">
                        <div class="modal-header">
                            <h4 class="modal-title">Tambah Kategori</h4>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="jenis" class="form-label">Jenis *</label>
                                <select name="jenis" class="form-control">
                                    <option value="" disabled>Pilih salah satu</option>
                                    <option value="kelebihan">Kelebihan</option>
                                    <option value="kekurangan">Kekurangan</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="keterangan" class="form-label">Keterangan *</label>
                                <input type="text" name="keterangan" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Batal</button>
                            <button class="btn btn-info save" type="submit">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endsection


    @section('script')
        <script>
            $(document).ready(function() {
                // DATATABLE
                $("#data-kategori").DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: '/kategori/json',
                    columns: [{
                            data: 'id',
                            name: 'id'
                        },
                        {
                            data: 'jenis',
                            name: 'jenis'
                        },
                        {
                            data: 'keterangan',
                            name: 'keterangan'
                        },
                        {
                            data: 'created_at',
                            name: 'created_at'
                        },
                        {
                            data: 'input_oleh',
                            name: 'input_oleh'
                        },
                        {
                            data: 'updated_at',
                            name: 'updated_at'
                        },
                        {
                            data: 'edit_oleh',
                            name: 'edit_oleh'
                        },
                        {
                            data: 'action',
                            name: 'action',
                            orderable: false,
                            searchable: false
                        }
                    ]
                });

                // VALIDASI INPUT EDIT
                $("#form-edit-kategori").validate({
                    rules: {
                        jenis: {
                            required: true,
                        },
                        keterangan: {
                            required: true,
                            minlength: 3,
                        }
                    },
                    messages: {
                        jenis: {
                            required: 'Semua kolom harus disii',
                        },
                        keterangan: {
                            required: 'Keterangan harus diisi',
                            minlength: 'Minimal diisi 3 karakter',
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

                // VALIDASI INPUT CREATE
                $("#form-create-kategori").validate({
                    rules: {
                        jenis: {
                            required: true,
                        },
                        keterangan: {
                            required: true,
                            minlength: 3,
                        }
                    },
                    messages: {
                        jenis: {
                            required: 'Semua kolom harus disii',
                        },
                        keterangan: {
                            required: 'Keterangan harus diisi',
                            minlength: 'Minimal diisi 3 karakter',
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
            });

            // EDIT
            $('#data-kategori').on('click', '.edit-button', function() {
                $('#jenis').val($(this).attr('data-jenis'));
                $('#keterangan').val($(this).attr('data-keterangan'));
                $('#id').val($(this).attr('data-id'));
            });

            // DELETE
            $('#data-kategori').on('click', '.delete-button', function() {
                let id = $(this).attr('data-id');
                Swal.fire({
                        title: "Apakah anda yakin?",
                        text: `Data yang sudah dihapus tidak dapat dikembalikan`,
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
                                title: "Mohon tunggu sebentar",
                                icon: "info",
                                showConfirmButton: false,
                                showCancelButton: false,
                            });
                            window.location = `/kategori/delete/${id}`;
                        }
                    });
            });

        </script>
    @endsection

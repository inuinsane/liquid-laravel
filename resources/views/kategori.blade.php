@extends('layouts.dashboard')

@section('content')
    <div class="row">
        <div class="col-md-12">
            {{-- Input Kode Cek Room --}}
            <div class="card">
                <h3 class="card-header">Tabel Kategori</h3>
            </div>
            <div class="card-body">
                <div id="data-tables-wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="data-kategori">
                        <thead>
                            <th>#</th>
                            <th>Jenis</th>
                            <th>Keterangan</th>
                            <th>Dibuat Tanggal</th>
                            <th>Diedit Tanggal</th>
                            <th>Action</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('script')
    <script>
        $(document).ready(function() {
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
                        data: 'updated_at',
                        name: 'updated_at'
                    },
                    {
                        data: 'action',
                        name: 'action',
                        orderable: false,
                        searchable: false
                    }
                ]
            });
        })

        function showModal() {
            console.log('Tampilkan modal edit');
        }

    </script>
@endsection

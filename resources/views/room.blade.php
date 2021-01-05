@extends('layouts.dashboard')


@section('content')
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <div class="card-header">
                    <strong>Create Room Liquid</strong>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="name">Tanggal</label>
                                <input class="form-control" id="date" type="date" placeholder="Tanggal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

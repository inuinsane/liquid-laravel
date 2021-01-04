@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mx-4">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="card-body p-4">
                            <h1>Register</h1>
                            <p class="text-muted">Create your account</p>
                            {{-- NAME --}}
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="cil-user"></i>
                                    </span>
                                </div>
                                <input class="form-control @error('name') is-invalid @enderror" type="text"
                                    placeholder="Masukkan nama anda" name="name" value="{{ old('name') }}" required
                                    autocomplete="name" autofocus>
                            </div>
                            @error('name')
                                <span class="text-danger mb-2" role="alert">
                                    {{ $message }}
                                </span>
                            @enderror

                            {{-- EMAIL --}}
                            <div class="input-group mt-3 mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="cil-envelope-open"></i>
                                    </span>
                                </div>
                                <input class="form-control @error('email') is-invalid @enderror" type="email"
                                    placeholder="Masukkan email aktif anda" name="email" value="{{ old('email') }}" required
                                    autocomplete="email">
                            </div>
                            @error('email')
                                <span class="text danger mb-2" role="alert">
                                    {{ $message }}
                                </span>
                            @enderror

                            {{-- PASSWORD --}}
                            <div class="input-group mt-3 mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="cil-lock-locked"></i>
                                    </span>
                                </div>
                                <input class="form-control @error('password') is-invalid @enderror" type="password"
                                    placeholder="Masukkan password anda" required autocomplete="new-password"
                                    name="password">
                            </div>
                            @error('password')
                                <span class="text-danger mb-2" role="alert">
                                    {{ $message }}
                                </span>
                            @enderror

                            {{-- CONFIRM PASSWORD --}}
                            <div class="input-group mt-3 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="cil-lock-locked"></i>
                                    </span>
                                </div>
                                <input class="form-control" type="password" placeholder="Ulangi password"
                                    name="password_confirmation" id="password-confirm" required autocomplete="new-password">
                            </div>
                            <button class="btn btn-block btn-success" type="submit">Buat Akun</button>
                        </div>
                    </form>
                    <div class="card-footer p-3 text-center">
                        <div class="row">
                            <div class="col-12">
                                <p>Sudah punya akun? Silakan
                                    <a href="{{ route('login') }}" class="text-decoration-none">login</a>
                                    dengan akun anda
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

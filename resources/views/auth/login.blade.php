@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group">
                    <div class="card p-4">
                        <div class="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <h1>Login</h1>
                                <p class="text-muted">Silakan login di kolom berikut</p>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="cil-user"></i>
                                        </span>
                                    </div>
                                    <input name="email" class="form-control @error('email') is-invalid @enderror" type="email" placeholder="Masukkan Email Anda"
                                         value="{{ old('email') }}" required autocomplete="email" autofocus>
                                </div>
                                @error('email')
                                    <span class="text-danger mb-2" role="alert">
                                        {{ $message }}
                                    </span>
                                @enderror
                                <div class="input-group mt-3 mb-2">
                                    <div class="input-group-prepend"><span class="input-group-text">
                                            <i class="cil-lock-locked"></i>
                                    </div>
                                    <input name="password" class="form-control @error('email') is-invalid @enderror" type="password"
                                        placeholder="Masukkan Password Anda" required
                                        autocomplete="current-password">
                                </div>
                                @error('password')
                                    <p class="text-danger mb-2" role="alert">
                                        {{ $message }}
                                    </p>
                                @enderror
                                <div class="custom-control custom-switch input-group mb-4 mt-2">
                                    <input type="checkbox" class="custom-control-input" id="remember" name="remember"
                                        {{ old('remember') ? 'checked' : '' }}>
                                    <label class="custom-control-label" for="remember">Remember Me</label>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-primary px-4" type="submit">Login</button>
                                    </div>
                                    @if (Route::has('password.request'))
                                        <div class="col-6 text-right">
                                            <a href="{{ route('password.request') }}" class="text-decoration-none">Lupa
                                                Password</a>
                                        </div>
                                    @endif
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                        <div class="card-body text-center">
                            <div>
                                <h2>Registrasi</h2>
                                <p>Belum punya akun? Silakan registrasi terlebih dahulu</p>
                                <a href="{{ route('register') }}" class="btn btn-lg btn-outline-light mt-3" type="button">
                                    Klik Disini!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


@section('script')

@endsection

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- CoreUI --}}
    <link rel="stylesheet" href="/css/coreui.css">
    <script src="/js/coreui.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/all.min.css">
    @yield('head')
</head>

<body class="c-app c-dark-theme">
    {{-- Sidebar --}}
    @include('layouts._sidebar')
    <div class="c-wrapper c-fixed-components">
        {{-- Navbar --}}
        @include('layouts._navbar')

        <div class="c-body">
            {{-- Main Content --}}
            <main class="c-main">
                <div class="container-fluid">
                    <div class="c-fade-in">
                        @yield('content')
                    </div>
                </div>
            </main>

            {{-- Footer --}}
            <footer class="c-footer">
                <div><a href="/">{{config('app.name', 'Liquid Enji')}}</a> &copy; <span id="copy-year"></span></div>
                <div class="ml-auto">Developed by &nbsp;<a href="https://ibnuhasan.netlify.app" target="_blank">me</a></div>
            </footer>
        </div>
    </div>

    <script>
      const copyYear = document.getElementById('copy-year');
      copyYear.innerHTML = new Date().getFullYear().toString();
    </script>

    @yield('script')

</body>

</html>

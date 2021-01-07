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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- CoreUI --}}
    <link rel="stylesheet" href="/css/coreui.css">
    <script src="/js/coreui.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/all.min.css">
    @yield('head')
</head>

<body class="c-app c-dark-theme flex-row align-items-center">
    @yield('content')

    <script>
    </script>

    @yield('script')

</body>

</html>

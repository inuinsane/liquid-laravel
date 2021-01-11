<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    {{-- CoreUI --}}
    <link rel="stylesheet" href="/css/coreui.css">
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/all.min.css">

    {{-- Multi Select --}}
    <link rel="stylesheet" href="/css/filter_multi_select.css">
    <script src="/js/multi-select/filter-multi-select-bundle.min.js"></script>


</head>

<body class="c-app c-dark-theme" id="body-app">
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
                <div><a href="/">{{ config('app.name', 'Liquid Enji') }}</a> &copy; <span id="copy-year"></span></div>
                <div class="ml-auto">Developed by &nbsp;<a href="https://ibnuhasan.netlify.app" target="_blank">me</a>
                </div>
            </footer>
        </div>
    </div>




    {{-- JQuery --}}
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    {{-- JQuery Validation --}}
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.2/dist/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.2/dist/additional-methods.min.js"></script>

    {{-- CoreUI --}}
    <script src="/js/coreui.js"></script>

    <script>
        const copyYear = document.getElementById('copy-year');
        copyYear.innerHTML = new Date().getFullYear().toString();

        const themeBtn = document.getElementById('theme-button');
        const iconTheme = document.getElementById('icon-theme');
        const body = document.getElementById('body-app');

        // Toggle Dark / Light Theme
        themeBtn.addEventListener('click', function() {
            if (body.className.includes('dark')) {
                body.classList.replace('c-dark-theme', 'c-light-theme');
                iconTheme.classList.replace('cil-sun', 'cil-moon');
                $('#theme').html('Dark');
            } else if (body.className.includes('light')) {
                body.classList.replace('c-light-theme', 'c-dark-theme');
                iconTheme.classList.replace('cil-moon', 'cil-sun');
                $('#theme').html('Light');
            }
        });


        // Create Room
        $("#create-liquid").on('click', function() {
            const liquid_url = '/room';
            Swal.fire({
                title: "Masukkan Tanggal Liquid",
                html: `
                <form action=${liquid_url} method="POST" id="form-create-liquid">
                    <input type="hidden" value="{{ csrf_token() }}" name="_token">
                    <input type="date" class="form-control text-dark" id="tanggal-liquid" name="date" required>
                </form>
                `,
                showCancelButton: true,
                confirmButtonText: "Send",
                cancelButtonText: "Cancel",
                buttonsStyling: true
            }).then(result => {
                if (result.isConfirmed) {
                    $("#form-create-liquid").submit();
                    Swal.fire({
                        title: "Mohon tunggu sebentar",
                        text: "",
                        icon: "info",
                        showCancelButton: false,
                        showConfirmButton: false,
                    });
                }
            });
        });

        // Flash Message

        $(document).ready(function() {
            @if(Session::has('message'))
                let type =  "{{Session::get('type')}}";
                Swal.fire({
                    title: type === 'error' ? "Error" : "Sukses",
                    text: "{{Session::get('message')}}",
                    icon: type,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
            @endif
        });

    </script>

    @yield('script')

</body>

</html>

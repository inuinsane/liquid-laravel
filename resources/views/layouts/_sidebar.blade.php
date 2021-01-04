<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
        {{-- <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
        </svg>
        <a href="#" class="c-sidebar-brand-full">CoreUI</a>
        <a href="#" class="c-sidebar-brand-minimized">CoreUI</a>
        <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#signet"></use>
        </svg> --}}
        <div class="c-sidebar-brand-full">
            <i class="cil-sun mr-2 c-icon-lg c-sidebar-nav-icon"></i>
            Liquid Enjiniring
        </div>
        <div class="c-sidebar-brand-minimized">
            <i class="cil-sun"></i>
        </div>
    </div>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item"><a class="c-sidebar-nav-link" href="{{ route('home') }}">
                <i class="cil-home c-sidebar-nav-icon"></i>
                Home
            </a>
        </li>
        <li class="c-sidebar-nav-title">Liquid</li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="{{ route('liquid') }}">
                <i class="c-sidebar-nav-icon cil-lightbulb"></i>
                Isi Penilaian Liquid
            </a>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="#buat-room">
                <i class="c-sidebar-nav-icon cil-calendar-check"></i>
                Buat Room Liquid
            </a>
        </li>
        <li class="c-sidebar-nav-item">
            <a class="c-sidebar-nav-link" href="#kategori">
                <i class="c-sidebar-nav-icon cil-list-rich"></i>
                Kategori Penilaian
            </a>
        </li>
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent"
        data-class="c-sidebar-minimized"></button>
</div>

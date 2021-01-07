<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
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
            <a class="c-sidebar-nav-link" href="{{ route('view.room') }}">
                <i class="c-sidebar-nav-icon cil-calendar-check"></i>
                Liquid Saya
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

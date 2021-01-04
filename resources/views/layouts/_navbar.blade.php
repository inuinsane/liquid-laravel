<header class="c-header c-header-dark c-header-fixed c-header-with-subheader">
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
        data-class="c-sidebar-show">
        <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <a class="c-header-brand d-lg-none" href="#">
        <svg width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
        </svg>
    </a>
    <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
        data-class="c-sidebar-lg-show" responsive="true">
        <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <ul class="c-header-nav d-md-down-none">
        <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="{{route('home')}}">Home</a></li>
    </ul>
    <ul class="c-header-nav ml-auto mr-4">
        <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
                <i class="c-icon cil-user-follow mr-2"></i>
                Buat Liquid
            </a>
        </li>
        <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
                <i class="cil-list-rich c-icon"></i>
            </a>
        </li>
        <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" href="#">
                <i class="c-icon cil-envelope-open"></i>
            </a>
        </li>
        <li class="c-header-nav-item dropdown">
            <a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">
                <div class="c-avatar">
                    <img class="c-avatar-img" src="{{ asset('/images/male-avatar.png') }}" alt="user@email.com">
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right pt-0">
                <div class="dropdown-header bg-light py-2">
                    <strong>Account</strong>
                </div>
                <a class="dropdown-item" href="#">
                    <i class="c-icon mr-2 cil-user"></i>
                    Profile
                </a>
                <div class="dropdown-divider"></div>
                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <a href="javascript:void(0)" type="submit" class="dropdown-item">
                        <i class="c-icon mr-2 cil-account-logout"></i>Logout
                    </a>
                </form>
            </div>
        </li>
    </ul>
</header>

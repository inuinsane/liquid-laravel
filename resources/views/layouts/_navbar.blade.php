<header class="c-header c-header-dark c-header-fixed c-header-with-subheader">
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
        data-class="c-sidebar-show">
        <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <a class="c-header-brand d-lg-none" href="#">
    </a>
    <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
        data-class="c-sidebar-lg-show" responsive="true">
        <i class="c-icon c-icon-lg cil-menu"></i>
    </button>
    <ul class="c-header-nav d-md-down-none">
        <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="{{ route('home') }}">Home</a></li>
    </ul>
    <ul class="c-header-nav ml-auto mr-4">
        <li class="c-header-nav-link d-md-down-none-mx-2">
            <a href="javascript:void(0)" class="c-header-nav-link" id="theme-button">
                <i class="c-icon cil-sun mr-2" id="icon-theme"></i>
            </a>
        </li>
        <li class="c-header-nav-item d-md-down-none mx-2">
            <a class="c-header-nav-link" {{-- href="{{ route('view.room') }}"
                --}} href="javascript:void(0)" id="create-liquid">
                <i class="c-icon cil-fire mr-2"></i>
                New Liquid
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
                    Hai, <strong>{{ Auth::user()->name ?? 'Account' }}</strong> !
                </div>
                <a class="dropdown-item" href="#">
                    <i class="c-icon mr-2 cil-user"></i>
                    My Profile
                </a>
                <div class="dropdown-divider"></div>
                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="dropdown-item">
                        <i class="c-icon mr-2 cil-account-logout"></i>
                        Logout
                    </button>
                </form>
            </div>
        </li>
    </ul>
</header>

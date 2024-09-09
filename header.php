
<!-- ======= Header ======= -->
<header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
        <a href="/GSM_RAVIS/main/home.php" class="logo d-flex align-items-center">
            <img src="/GSM_RAVIS/assets/img/Logo_Ravis01.jpg" alt="">
            <span class="d-none d-lg-block">RAVIS control</span>

        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <div class="d-flex align-items-center justify-content-between m-3  ">
        <h5> <span class="badge bg-<?php if( $user_active_time > 0 )echo "success"; else echo "danger";?>"><?php
                if( $user == "admin") echo "بدون محدودیت";
                else{
                    if( $user_active_time > 0 )echo $user_active_time . "دقیقه" ;
                    else echo "عدم دسترسی";
                }
                ?></span></h5>

    </div><!-- End Logo -->




    <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">


            <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="" data-bs-toggle="dropdown">
                    <img src="/GSM_RAVIS/assets/img/bear.jpg" alt="Profile" class="rounded-circle">
                    <span class="d-none d-md-block dropdown-toggle ps-2"><?php echo $user;?></span>
                </a><!-- End Profile Iamge Icon -->

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                        <h6><?php echo $user;?></h6>
                        <span> Designer</span>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>

                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="/GSM_RAVIS/main/profile.php">
                            <i class="bi bi-person"></i>
                            <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>

                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="/GSM_RAVIS/login/sign_out.php">
                            <i class="bi bi-box-arrow-right"></i>
                            <span>Sign Out</span>
                        </a>
                    </li>

                </ul><!-- End Profile Dropdown Items -->
            </li><!-- End Profile Nav -->

        </ul>
    </nav><!-- End Icons Navigation -->

</header><!-- End Header -->
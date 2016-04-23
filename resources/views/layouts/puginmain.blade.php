<!doctype html>
<html lang="en">
<head>
    <title>Hi-VIM - @yield('title')</title>
    @include('header')
</head>
<body class="container cus-container">
    @section('sidebar')
        <div class="common-sidebar">
            sjfljg;afa;f
        </div>
    @show

    <div class="common-content">
        @yield('content')
    </div>
</body>
</html>
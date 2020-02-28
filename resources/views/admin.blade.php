@extends('base')
@section('css')
    <!-- bower:css -->
    <link rel="stylesheet" href="/lib/ionicons.css" >
    <link rel="stylesheet" href="/lib/angular-toastr.css" >
    <link rel="stylesheet" href="/lib/animate.css" >
    <link rel="stylesheet" href="/lib/bootstrap.css" >
    <link rel="stylesheet" href="/lib/bootstrap-select.css" >
    <link rel="stylesheet" href="/lib/bootstrap-switch.css" >
    <link rel="stylesheet" href="/lib/bootstrap-tagsinput.css" >
    <link rel="stylesheet" href="/lib/font-awesome.css" >
    <link rel="stylesheet" href="/lib/fullcalendar.css" >
    <link rel="stylesheet" href="/lib/leaflet.css" >
    <link rel="stylesheet" href="/lib/angular-progress-button-styles.min.css" >
    <link rel="stylesheet" href="/lib/chartist.min.css" >
    <link rel="stylesheet" href="/lib/morris.css" >
    <link rel="stylesheet" href="/lib/ion.rangeSlider.css" >
    <link rel="stylesheet" href="/lib/ion.rangeSlider.skinFlat.css" >
    <link rel="stylesheet" href="/lib/textAngular.css" >
    <link rel="stylesheet" href="/lib/xeditable.css" >
    <link rel="stylesheet" href="/lib/style.css" >
    <link rel="stylesheet" href="/lib/select.css" >
    <!-- endbower -->

    <link rel="stylesheet" href="/app/main.css">
@endsection
@section('content')

    <div class="body-bg"></div>
    <main ng-if="$pageFinishedLoading" >
        @include("app.components.top-menu")
        @include("app.components.sidebar")
        <div class="al-main">
            <div class="al-content">
                <div class="content-top clearfix">
                    <h1 class="al-title"></h1>

                    <ul class="breadcrumb al-breadcrumb">
                        <li>
                            <a href="/dashboard">Home</a></li>
                        <li></li>
                    </ul>
                </div>
                @yield('module')
            </div>
        </div>

    </main>
    <div id="preloader" ng-show="!$pageFinishedLoading">
        <div></div>
    </div>
@endsection
@section('javascript')
    <!-- bower:js -->
    <script src="/lib/jquery.js"></script>
    <script src="/lib/jquery-ui.js"></script>
    <script src="/lib/jquery.easing.js"></script>
    <script src="/lib/jquery.easypiechart.js"></script>
    <script src="/lib/Chart.js"></script>
    <script src="/lib/amcharts.js"></script>
    <script src="/lib/responsive.min.js"></script>
    <script src="/lib/serial.js"></script>
    <script src="/lib/funnel.js"></script>
    <script src="/lib/pie.js"></script>
    <script src="/lib/gantt.js"></script>
    <script src="/lib/amstock.js"></script>
    <script src="/lib/ammap.js"></script>
    <script src="/lib/worldLow.js"></script>
    <script src="/lib/angular.js"></script>
    <script src="/lib/angular-route.js"></script>
    <script src="/lib/jquery.slimscroll.js"></script>
    <script src="/lib/angular-slimscroll.js"></script>
    <script src="/lib/smart-table.js"></script>
    <script src="/lib/angular-toastr.tpls.js"></script>
    <script src="/lib/angular-touch.js"></script>
    <script src="/lib/sortable.js"></script>
    <script src="/lib/dropdown.js"></script>
    <script src="/lib/bootstrap-select.js"></script>
    <script src="/lib/bootstrap-switch.js"></script>
    <script src="/lib/bootstrap-tagsinput.js"></script>
    <script src="/lib/moment.js"></script>
    <script src="/lib/fullcalendar.js"></script>
    <script src="/lib/leaflet-src.js"></script>
    <script src="/lib/angular-progress-button-styles.min.js"></script>
    <script src="/lib/angular-ui-router.js"></script>
    <script src="/lib/angular-chart.js"></script>
    <script src="/lib/chartist.min.js"></script>
    <script src="/lib/angular-chartist.js"></script>
    <script src="/lib/eve.js"></script>
    <script src="/lib/raphael.min.js"></script>
    <script src="/lib/mocha.js"></script>
    <script src="/lib/morris.js"></script>
    <script src="/lib/angular-morris-chart.min.js"></script>
    <script src="/lib/ion.rangeSlider.js"></script>
    <script src="/lib/ui-bootstrap-tpls.js"></script>
    <script src="/lib/angular-animate.js"></script>
    <script src="/lib/rangy-core.js"></script>
    <script src="/lib/rangy-classapplier.js"></script>
    <script src="/lib/rangy-highlighter.js"></script>
    <script src="/lib/rangy-selectionsaverestore.js"></script>
    <script src="/lib/rangy-serializer.js"></script>
    <script src="/lib/rangy-textrange.js"></script>
    <script src="/lib/textAngular.js"></script>
    <script src="/lib/textAngular-sanitize.js"></script>
    <script src="/lib/textAngularSetup.js"></script>
    <script src="/lib/xeditable.js"></script>
    <script src="/lib/jstree.js"></script>
    <script src="/lib/ngJsTree.js"></script>
    <script src="/lib/select.js"></script>
    <!-- endbower -->
    @include("app.libraries")
    @yield("custom-script")
@endsection
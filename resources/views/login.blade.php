@extends('base')
@section('css')
    <!-- bower:css -->
    <link rel="stylesheet" href="lib/ionicons.css" >
  <link rel="stylesheet" href="lib/angular-toastr.css" >
  <link rel="stylesheet" href="lib/animate.css" >
  <link rel="stylesheet" href="lib/bootstrap.css" >
  <link rel="stylesheet" href="lib/bootstrap-select.css" >
  <link rel="stylesheet" href="lib/bootstrap-switch.css" >
  <link rel="stylesheet" href="lib/bootstrap-tagsinput.css" >
  <link rel="stylesheet" href="lib/font-awesome.css" >
  <link rel="stylesheet" href="lib/fullcalendar.css" >
  <link rel="stylesheet" href="lib/leaflet.css" >
  <link rel="stylesheet" href="lib/angular-progress-button-styles.min.css" >
  <link rel="stylesheet" href="lib/chartist.min.css" >
  <link rel="stylesheet" href="lib/morris.css" >
  <link rel="stylesheet" href="lib/ion.rangeSlider.css" >
  <link rel="stylesheet" href="lib/ion.rangeSlider.skinFlat.css" >
  <link rel="stylesheet" href="lib/textAngular.css" >
  <link rel="stylesheet" href="lib/xeditable.css" >
  <link rel="stylesheet" href="lib/style.css" >
  <link rel="stylesheet" href="lib/select.css" >
    <!-- endbower -->

    <link rel="stylesheet" href="app/auth.css">
@endsection
@section('content')
    <main class="auth-main">
        <div class="auth-block text-center">
            <h1>Kennel</h1>
            <h4>Connexion</h4>

            <form class="form-horizontal">
                <div class="form-group">

                    <div class="col-sm-12 text-left">
                        <label for="inputEmail3" class="control-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">

                    <div class="col-sm-12 text-left">
                        <label for="inputPassword3" class="control-label">Mot de passe</label>
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Mot de passe">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-default btn-auth">Se Connecter</button><br>
                        <a href class="forgot-pass">mot de passe oublié?</a>
                    </div>
                </div>
            </form>
        </div>
    </main>
@endsection
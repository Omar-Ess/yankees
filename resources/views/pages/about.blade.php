@extends('layouts.app')
@section('title')
À propos de nous -
@endsection
@section('description')
Yankees s'engage à fournir à ses clients une nourriture savoureuse et abordable qui garantit une sécurité alimentaire
maximale Notre objectif est d'être classé numéro un de la restauration rapide à Casablanca
@endsection
@section('canonical')
https://yankees.ma/about
@endsection
@section('content')
@include('includes.breadcrumb' , ['pageName'=> 'About'])
<article>
    <!-- ======= About Section ======= -->
    @include('includes.about-section' )
    <!-- End About Section -->
    <br>
    <br>
</article><!-- End #main -->
@endsection

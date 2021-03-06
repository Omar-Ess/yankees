<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function redirectTo()
    {
        if (request()->has('redirect_to_checkout')) {
            return '/checkout';
        }
        /** @var \App\Models\User */
        $authUser =  auth()->user();
        if ($authUser->hasAnyRole(['deliveryman', 'manager', 'admin'])) {
            return "/admin/dashboard";
        }
        return  "/account/dashboard";
    }
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}

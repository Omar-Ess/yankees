<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Gate;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        // For Clients
        Gate::define('checkout', function (User $user) {
            return Cart::total()  >= config('cart.min_order_price') && Cart::count() > 0;
        });
        // For admins and delivery men
        Gate::define('charge', function (User $user, Order $order) {
            return ($user->role == "admin" && $order->payment_mode == "stripe"  &&
                !$order->user_charged &&
                !$order->payment_confirmation_required &&
                $order->status != "cancelled" &&
                $order->status != "failed");
        });
        Gate::define('refund', function (User $user, Order $order) {
            return ($user->role == "admin" && $order->payment_mode == "stripe"  &&
                $order->user_charged &&
                !$order->user_refunded &&
                $order->status == "cancelled");
        });
        Gate::define('update-order', function (User $user, $order, $request_deliveryman_id, $request_status) {
            if ($order->status == 'failed' || $order->status == "cancelled") {
                return false;
            }
            if ($user->role == "deliveryman") {
                return ($order->deliveryman_id == $request_deliveryman_id) && $request_status == "delivered";
            }
            return (!$request_deliveryman_id) && ($request_status == "out_for_delivery" || $request_status == "delivered") ? false : true;
        });
        Gate::define('read-order', function (User $user, $order) {
            return $user->role == "admin" || $user->id == $order->deliveryman_id;
        });
    }
}

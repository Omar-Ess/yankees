<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Laravel\Cashier\Payment;

class OrderNotification extends Notification
{
    use Queueable;
    public $order;
    public $event_name;
    public $payment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Order $order, string $event_name, Payment $payment = null)
    {
        $this->order = $order;
        $this->event_name = $event_name;
        $this->payment = $payment;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        $via = [
            'database',
            'broadcast'
        ];
        if ($this->event_name !== "orderStatusChanged") {
            $via[] = "mail";
        }
        return $via;
    }
    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            "order" => $this->order,
            'url' => $this->getUrl(),
            'event_name' => $this->event_name
        ];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(__('Order Notification'))
            ->markdown('mail.order', [
                "order" => $this->order,
                'url' => $this->getUrl(),
                'event_name' => $this->event_name
            ]);
    }
    private function getUrl()
    {

        switch ($this->event_name) {
            case "paymentConfirmationRequired":
                return route(
                    'cashier.payment',
                    [$this->payment->id, 'redirect' => route('home')],
                    false
                );
            case "userCharged":
            case "userRefunded":
            case "orderStatusChanged":
                return '/account/orders/' . $this->order->id . "/track";
            case "orderCreated":
            case "deliverymanSelected":
            case "paymentConfirmationObtained":
            case "clientCancelledOrder":
                return '/admin/orders/' . $this->order->id;
        }
    }
}

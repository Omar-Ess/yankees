<?php

namespace App\Http\Controllers\API\V1\Shared;

use App\Http\Controllers\Controller;

class NotificationController extends Controller
{

    public function getNotifications()
    {
        return response()->json([
            'notifications' => auth()->user()->notifications
        ]);
    }
    public function deleteNotifications()
    {
        /** @var \App\Models\User */
        $authUser = auth()->user();
        $authUser->notifications()->delete();
        return response()->json([
            'message' => 'notification(s) deleted successfully'
        ]);
    }
    public function markNotifications()
    {
        auth()->user()->unreadNotifications->markAsRead();
        return response()->json([
            'message' => 'notification(s) updated successfully'
        ]);
    }
}

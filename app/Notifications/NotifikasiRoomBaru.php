<?php

namespace App\Notifications;

use App\Models\Room;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NotifikasiRoomBaru extends Notification
{
    use Queueable;

    private $room;
    private $target;
    private $user;

    /**
     * Create a new notification instance.
     * @param Room $room
     * @param User $user
     * @param $target
     * @return void
     */
    public function __construct(Room $room, $target, User $user)
    {
        $this->target = $target;
        $this->room = $room;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $name = $this->user->name;
        return (new MailMessage)
            ->greeting('Halo ' . explode(" ", $name)[0] . ' !')
            ->line('Room baru telah dibuat dengan code: ' . $this->room->code . ', oleh ' . $this->target->name)
            ->action('Nilai Sekarang', route('liquid'))
            ->line('Jangan lupa melakukan penilaian');
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
            //
        ];
    }
}

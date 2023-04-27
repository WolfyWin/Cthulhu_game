<?php

namespace App\Event;

use App\Entity\Player;
use Symfony\Contracts\EventDispatcher\Event;
class WinnerEvent extends Event
{
    public const NAME = 'player.win';

    private Player $winner;

    public function __construct(Player $winner)
    {
        $this->winner = $winner;
    }

    public function getWinner(): Player
    {
        return $this->winner;
    }
}

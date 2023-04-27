<?php

namespace App\EventListener;

use App\Event\WinnerEvent;
use App\Manager\PlayerManager;

class WinnerListener
{
    private PlayerManager $playerManager;

    public function __construct(PlayerManager $playerManager)
    {
        $this->playerManager = $playerManager;
    }

    public function winner(WinnerEvent $event): void
    {
        $winner = $event->getWinner();
        $this->playerManager->incrementGamesPlayed($winner);
        $this->playerManager->incrementGamesWon($winner);
    }
}

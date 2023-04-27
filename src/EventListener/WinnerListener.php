<?php

namespace App\EventListener;

use App\Event\WinnerEvent;
use App\Manager\PlayerManager;

class WinnerListener
{
    /** @var PlayerManager */
    private PlayerManager $playerManager;

    public function __construct(PlayerManager $playerManager)
    {
        $this->playerManager = $playerManager;
    }

    /**
     * @param WinnerEvent $event
     */
    public function winner(WinnerEvent $event): void
    {
        $winner = $event->getWinner();
        $this->playerManager->incrementGamesPlayed($winner);
        $this->playerManager->incrementGamesWon($winner);
    }
}

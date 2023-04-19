<?php

namespace App\Controller;

use App\Manager\PlayerManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController extends AbstractController
{
    private PlayerManager $playerManager;

    public function __construct(PlayerManager $playerManager)
    {
        $this->playerManager = $playerManager;
    }

    #[Route('/api/players', name: 'app_api_player_add', methods: ['POST'])]
    public function add( Request $request ): JsonResponse
    {
        foreach( $request->toArray() as $playerName )
        {
            $player = $this->playerManager->createOrUpdatePlayer( $playerName );
            $this->playerManager->incrementGamesPlayed( $player );
        }

        return new JsonResponse(['message' => 'Players added successfully']);
    }
}

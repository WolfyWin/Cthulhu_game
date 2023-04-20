<?php

namespace App\Controller;

use App\Manager\PlayerManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
class PlayerController extends AbstractController
{
    private PlayerManager $playerManager;

    public function __construct(PlayerManager $playerManager)
    {
        $this->playerManager = $playerManager;
    }

    #[Route('/api/players', name: 'app_api_players', methods: ['GET'])]
    public function all(): JsonResponse
    {
        $serializer = new Serializer([new ObjectNormalizer()]);
        $players = $this->playerManager->getAllPlayers();

        return new JsonResponse( $serializer->normalize( $players, 'json' ) );
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

    #[Route('/api/players/{name}/victory', name: 'app_api_player_victory', methods: ['POST'])]
    public function victory( string $name ): JsonResponse
    {
        $player = $this->playerManager->getPlayerByName( $name );
        $this->playerManager->incrementGamesWon( $player );

        return new JsonResponse(['message' => 'Player victory added successfully']);
    }
}

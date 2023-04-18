<?php

namespace App\Controller;

use App\Manager\PlayerManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController
{
    /**
     * @Route("/players", methods={"POST"})
     */
    public function createPlayer(Request $request, PlayerManager $playerManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // récupérer le nom du joueur à partir des données de la requête
        $name = $data['name'] ?? null;

        // créer ou mettre à jour le joueur avec le PlayerManager
        $player = $playerManager->createOrUpdatePlayer($name);

        // retourner une réponse JSON avec les données du joueur créé ou mis à jour
        return new JsonResponse([
            'id' => $player->getId(),
            'name' => $player->getName(),
            'games_played' => $player->getGamesPlayed(),
            'games_won' => $player->getGamesWon(),
            'last_played' => $player->getLastPlayed()->format('Y-m-d H:i:s'),
        ]);
    }

    /**
     * @Route("/players/{id}", methods={"GET"})
     */
    public function getPlayer(int $id, PlayerManager $playerManager): JsonResponse
    {
        // récupérer le joueur avec le PlayerManager
        $player = $playerManager->getPlayer($id);

        // retourner une réponse JSON avec les données du joueur
        return new JsonResponse([
            'id' => $player->getId(),
            'name' => $player->getName(),
            'games_played' => $player->getGamesPlayed(),
            'games_won' => $player->getGamesWon(),
            'last_played' => $player->getLastPlayed()->format('Y-m-d H:i:s'),
        ]);
    }
}

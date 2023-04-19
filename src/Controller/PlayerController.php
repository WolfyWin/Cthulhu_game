<?php

namespace App\Controller;

use App\Entity\Player;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class PlayerController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }

    #[Route('/api/player/add', name: 'app_api_player_add')]
    public function index(): JsonResponse
    {
        $addPlayer = new Player();
        $addPlayer->setName($_POST['name']);
        $this->entityManager->persist($addPlayer);
        $this->entityManager->flush();

        return new JsonResponse(['message' => 'Player added successfully']);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    #[Route('/', name: 'CthulhuGame', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}

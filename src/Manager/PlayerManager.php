<?php

namespace App\Manager;

use App\Entity\Player;
use Doctrine\ORM\EntityManagerInterface;

class PlayerManager
{
    private const NAME_FIELD = 'name';

    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getAllPlayers(): array
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        return $playerRepository->findAll();
    }

    public function createOrUpdatePlayer(string $name): Player
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        $player = $playerRepository->findOneBy([self::NAME_FIELD => $name]);

        if (!$player) {
            $player = new Player();
            $player->setName($name);
        }

        $player->setLastActivity(new \DateTimeImmutable());

        $this->updatePlayer($player);

        return $player;
    }

    public function incrementGamesPlayed(Player $player): void
    {
        $player->setGamesPlayed($player->getGamesPlayed() + 1);
        $this->updatePlayer($player);
    }

    public function incrementGamesWon(Player $player): void
    {
        $player->setGamesWon($player->getGamesWon() + 1);
        $this->updatePlayer($player);
    }

    public function getPlayer(int $id): ?Player
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        return $playerRepository->find($id);
    }

    public function getPlayerByName(string $name): ?Player
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        return $playerRepository->findOneBy([self::NAME_FIELD => $name]);
    }

    private function updatePlayer(Player $player): void
    {
        $this->entityManager->persist($player);
        $this->entityManager->flush();
    }
}

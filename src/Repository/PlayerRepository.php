<?php

namespace App\Repository;

use App\Entity\Player;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 *
 * @method Player|null find($id, $lockMode = null, $lockVersion = null)
 * @method Player|null findOneBy(array $criteria, array $orderBy = null)
 * @method Player[]    findAll()
 * @method Player[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlayerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Player::class);
    }

    public function getPlayerById(int $id): ?Player
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function getAllPlayers(): array
    {
        return $this->findAll();
    }

    public function save(Player $player): void
    {
        $this->_em->persist($player);
        $this->_em->flush();
    }

    public function delete(Player $player): void
    {
        $this->_em->remove($player);
        $this->_em->flush();
    }
}

<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: 'integer')]
    private int $id;

    #[ORM\Column(type: 'string', length: 255)]
    private string $name;

    #[ORM\Column(type: 'integer')]
    private int $gamesPlayed = 0;

    #[ORM\Column(type: 'integer')]
    private int $gamesWon = 0;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeInterface $lastActivity = null;

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getGamesPlayed(): int
    {
        return $this->gamesPlayed;
    }

    public function setGamesPlayed(int $gamesPlayed): self
    {
        $this->gamesPlayed = $gamesPlayed;
        return $this;
    }

    public function getGamesWon(): int
    {
        return $this->gamesWon;
    }

    public function setGamesWon(int $gamesWon): self
    {
        $this->gamesWon = $gamesWon;
        return $this;
    }

    public function getLastActivity(): ?\DateTimeInterface
    {
        return $this->lastActivity;
    }

    public function setLastActivity(\DateTimeInterface $lastActivity): self
    {
        $this->lastActivity = $lastActivity;
        return $this;
    }
}

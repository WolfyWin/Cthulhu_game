<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(nullable: true)]
    private ?int $games_won = null;

    #[ORM\Column(nullable: true)]
    private ?int $games_played = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $last_activity = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getGamesWon(): ?int
    {
        return $this->games_won;
    }

    public function setGamesWon(int $games_won): static
    {
        $this->games_won = $games_won;

        return $this;
    }

    public function getGamesPlayed(): ?int
    {
        return $this->games_played;
    }

    public function setGamesPlayed(int $games_played): static
    {
        $this->games_played = $games_played;

        return $this;
    }

    public function getLastActivity(): ?\DateTimeImmutable
    {
        return $this->last_activity;
    }

    public function setLastActivity(?\DateTimeImmutable $last_activity): static
    {
        $this->last_activity = $last_activity;

        return $this;
    }
}

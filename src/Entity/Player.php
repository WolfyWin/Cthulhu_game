<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="players")
 */
class Player
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $name = null;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $gamesPlayed = null;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $gamesWon = null;

    /**
     * @ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true, options: ["default" => "CURRENT_TIMESTAMP"])
     */
    private ?\DateTimeInterface $lastPlayed = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getGamesPlayed(): ?int
    {
        return $this->gamesPlayed;
    }

    public function setGamesPlayed(int $gamesPlayed): self
    {
        $this->gamesPlayed = $gamesPlayed;

        return $this;
    }

    public function getGamesWon(): ?int
    {
        return $this->gamesWon;
    }

    public function setGamesWon(int $gamesWon): self
    {
        $this->gamesWon = $gamesWon;

        return $this;
    }

    public function getLastPlayed(): ?\DateTimeInterface
    {
        return $this->lastPlayed;
    }

    public function setLastPlayed(?\DateTimeInterface $lastPlayed): self
    {
        $this->lastPlayed = $lastPlayed;

        return $this;
    }
}






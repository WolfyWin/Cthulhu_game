
# Cthulhu Game

This game was initially made in REACT with [Create React App](https://github.com/facebook/create-react-app).
It was then improved with redux and integrated into symphony.

Link to website [here](https://cthulhu-game.wolfyweb.fr)

![EN](https://user-images.githubusercontent.com/58392030/233780837-e25b245a-433e-449d-9991-241683544e5b.png)
## Installation

- Clone this repository :

```bash
  git clone git@github.com:WolfyWin/Cthulhu_game.git
```

- Install the dependencies :

```bash
  npm install
  composer install
```

- Compile the files :

```bash
  npm run build
  /
  npm run watch
```
- Create the database and make migrations :

```bash
  php bin/console doctrine:database:create
  php bin/console doctrine:migrations:migrate
```

- Start Symfony server :

```bash
  symfony serve
```

-  Access the application in your browser by opening the following URL :

  http://localhost:8000

## 🛠 Objectives

- Creating a TicTacToe game using React.
- Understand and use the fundamental concepts of React and Redux, state management, props and components.
- Use hooks.
- Use named imports/exports (instead of default imports/exports).
- Integrating the React app into a symfony application.

####  API REST :

- The api follows the REST structure (https://restfulapi.net/) and is in JSON format.
- Choice to create a new player at the beginning of the game or to reuse an existing one.
- Presence of a scoreboard in a new view with a route, which lists the players with :
   - the number of games won,
   - the number of games played,
   - the date of the last activity.
   - and a podium of the 3 best players.
- Presence of a manager that contains the business logic and an EventListener.

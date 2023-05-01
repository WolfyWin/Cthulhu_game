Click [here](./README-en.md) for English version.

# Cthulhu Game

Ce jeu a été initialement fait en REACT avec [Create React App](https://github.com/facebook/create-react-app).
Il a ensuite était amélioré avec redux puis intégré à symphony.

![FR](https://user-images.githubusercontent.com/58392030/235081895-c4533606-5bfb-4aaa-b933-079b870ecb21.png)
## Installation

- Clonez le repo :

```bash
  git clone git@github.com:WolfyWin/Cthulhu_game.git
```

- Installez les dépendances :

```bash
  npm install
  composer install
```

- Compilez les fichiers :

```bash
  npm run build
  /
  npm run watch
```
- Créez la base de données et effectuez les migrations :

```bash
  php bin/console doctrine:database:create
  php bin/console doctrine:migrations:migrate
```

- Lancez le serveur Symfony :

```bash
  symfony serve
```

- Accédez à l'application dans votre navigateur en ouvrant l'URL suivante :

  http://localhost:8000

## 🛠 Objectifs

- Créer un jeu de morpion en utilisant React.
- Comprendre et utiliser les concepts fondamentaux de React et de Redux, la gestion d'état, les props et les components.
- Utiliser de hooks.
- Utiliser les imports/exports nommés (au lieu des imports/exports par défaut).
- Intégrer l’appli React dans une application symfony.

#### Création API REST :

-  L'api suit la structure REST (https://restfulapi.net/) et est au format JSON.
-  Choix de création d'un nouveau joueur en début de partie ou bien de réutiliser un existant.
-  Présence d'un scoreboard dans une nouvelle vue avec une route, qui liste les joueurs avec :
    - le nombre de parties gagnées,
    - le nombre de parties jouées,
    - la date de la dernière activité.
    - et d'un podium des 3 meilleurs joueurs.
- Présence d'un manager qui contient la logique métier et d'un EventListener.

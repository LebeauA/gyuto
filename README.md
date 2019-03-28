# Gyuto

Web app en react

Le but principal du projet est de migrer la web app sur un CMS pour que la cliente puisse modifier le contenu (voir google doc demande initiale)

Ce qui a été fait : Mise en place de [Strapi](https://strapi.io/), CMS headless open-source en node.js.
Lien à la base de donnée [MongoDB](https://www.mongodb.com/).
Base [Gatsby.js](https://www.gatsbyjs.org/), framework basé sur React pour constuire des sites et des apps.

Strapi est une couche qui vient se superposer à l'app, qui fait le lien entre la base de donnée et l'app grâce à une API. Strapi vient avec un panel d'administration qui permet de mettre à jour la database, et Gatsby communique avec Strapi pour récupérer les données et ensuite build le site/l'app.

### Etat actuel du projet :
#### Ce dont on a hérité :
Long story short : Le fichier app, grâce a des routes définies, appelle les pages corespondantes, tout est divisé en components.

#### Ce qui a été fait et est utilisable :
Mise en place de Gatsby et Strapi

### Ce qu'il reste à faire :
#### Indispensable :
- Recréer les pages à partir des différents components (On a tenté de faire une "simple" migration de l'app, mais le projet tel qu'on en a hérité est trop obscur) : reprendre les components 1 par 1 pour simplifier et utiliser les query GraphQL pour injecter les données là où nécessaire
- Google Analytics (Il y a un plugin gatsby)
- Page Facebook : Placer correctement le plugin Page
- Bouton choix EN/FR : EN par défaut
- Clef API, accès DB, ... -> Cacher du code source grâce aux variables d'environnements
- Activer des points pour des vidéos pas encores inséerées (Les points sont déjàs dans le code, désactivés pour le moment)
#### Nice to have :
- Passer le lighthouse test avec tout dans le vert(L'audit vous indiquera ce qui pose problème et des pistes pour améliorer cela)
- Il était question de colorer les points du mandala en fonction de la catégorie -> 3 couleurs (pas dans la demande initiale)

### Structure du repo une fois cloné :
En premier lieu le dossier "/gyuto/" contient Strapi
Ensuite, "/gyuto/old_site/" contient l'ancienne version du projet
Enfin, "/gyuto/site/" contient le projet version gatsby
____________________

## Instal Guide
### Strapi
Install strapi in global  
[Doc's](https://strapi.io/documentation/3.x.x/getting-started/installation.html#requirements)
```
npm install strapi@alpha -g
```
#### Strapi (CMS)
```
git clone https://github.com/bouzouitadavid/gyuto
cd gyuto
yarn install
strapi start
```
If error connecting mongodb  
=> look white_list and mongodb link !

##### Admin
Got to localhost:1337/admin  
**User** and **Pass** look Ryver!

##### Layout page
Click add Layout page, remember Save!
Add privilege to Public for all new layout page!

#### Gatsby (Frameworks)
```
cd site
yarn install
gatsby develop
```
Go Develop !

#### Old github
- https://github.com/pedroseromenho/gyuto
#### Ressources
- https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/
- https://www.gatsbyjs.org/
- https://strapi.io/documentation/3.x.x/getting-started/installation.html

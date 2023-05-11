# Rapport d'optimisation du projet ScrollyTelling

[Page Speed Insights - Rapport du 11 mai 2023, 17:06:51](https://pagespeed.web.dev/analysis/https-yourantidote-github-io-Haddad-Antoine-scrollytelling/l56zlqbd7j?form_factor=desktop) à 96% de performence

## Problème #1
### Différez le chargement des images hors écran
Consiste à faire charger les images après qui en demande beaucoup, à la fin du chargement des ressources essentielles afin de réduire le temps de chargement.
### Action concrète pour résoudre le problème :
Je dois ajouter une ligne de code pour que les spritsheets ne s'ative pas avant d'être vu. 

Cible : #sprite1, #sprite2, #sprite3, #sprite4, #feuille et #roche

### Résultat
Je n'ai pas réussi à intégrer toutes les lignes de codes à chacun des éléments; trop de problèmes que je ne trouve pas et comprend pas. Au moins, j'ai suis parvenu à ne plus voir ce problèmes dans les performances.

## Problème #2
### Éliminez les ressources qui bloquent le rendu
Installer la police directement dans le dossier source du projet.
### Action concrète pour résoudre le problème :
Je vais supprimer les lignes de code qui importe la police google. Par la suite, je vais téléchager la police google Shantell et Sriracha et les mettre dans le dossier racine. Enfin, il faut relié les zones de textes à la police. 

### Résultat
Mission accomplie: la police a été remplacé avec succès.

## Problème #3
### Diffusez des images aux formats nouvelle génération
Changement les images avec l'extension PNG par WebP.
### Action concrète pour résoudre le problème :
Je vais convertir les 2 images PNG ("spritesheet-fantome-ciel.png" et "spritesheet-fantome-foret2.png") en WEBP. Après, simplement changer les liens sources des sprit sheet pour les remplacer par la version WEBP

### Résultat 

Je suis parvenu à changer un spritsheet avec son image correspondant WEBP, mais le second fais juste disparaitre dans mon site lorsque je le change. Alors spritsheet2 à toujours une image en PNG.


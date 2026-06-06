# Photobox - TD7
Application web monopage (SPA) de galerie photos en TypeScript.

## Installation
```bash
npm install
```

## Build
```bash
npm run build
```

## Lancement
Ouvrir `index.html` avec un serveur HTTP (XAMPP, Live Server...)

## Fonctionnalités réalisées

### Exercice 1 : récupération des données d'une image
- Chargement d'une photo depuis l'API via son identifiant
- Affichage dans la console du titre, du type et de l'url de la photo
- Récupération de l'identifiant depuis l'URL (window.location.hash)

### Exercice 2 : affichage d'une image dans la page
- Affichage de l'image avec son titre, sa description et ses dimensions
- Affichage de la catégorie de la photo
- Affichage des commentaires associés

### Exercice 3 : galerie de photos
- Chargement de la liste de photos depuis l'API
- Affichage des vignettes en grille 3 colonnes
- Navigation entre les pages avec les boutons prev/next
- Accès direct à la première/dernière page avec les boutons first/last

### Exercice 4 : affichage d'une photo depuis la galerie
- Cliquer sur une vignette permet l'affichage de la photo complète avec catégorie et commentaires

## Technologies utilisées
- TypeScript
- ESBuild
- Handlebars
- Fetch API / Promesses

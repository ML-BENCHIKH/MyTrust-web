# Sécuriser l'authentification des utilisateurs avec JWT + Refresh Token + Device ID

## Objectif
Mettre en place un système d'authentification sécurisé pour une application web/mobile en utilisant des **JWT (JSON Web Tokens)**, des **Refresh Tokens** et un **Device ID** unique pour chaque appareil de l'utilisateur. 

## Contexte
- **JWT (JSON Web Token)** : Token court terme (ex: 5 min) utilisé pour accéder aux ressources protégées. Il est généré par le serveur et stocké côté client, il est signé (donc pas modifiable par des parties tierces) et auto-contenu (contenant les informations nécessaires pour identifier l'utilisateur). Il est stateless (pas stocké côté serveur) : en vérifiant sa signature cryptographique, le serveur peut valider le token et identifier l'utilisateur sans avoir besoin d'accéder à une base de données (gain de performance, requêtes rapides et sécurisées).
- **Refresh Token** : Token long terme (ex: 7 jours) utilisé pour obtenir de nouveaux **JWT** sans forcer l'utilisateur à se reconnecter. Il est stocké côté serveur (dans une base de données) pour pouvoir être révoqué si nécessaire (ex: déconnexion, révocation). Il est lié à un **Device ID** unique pour chaque appareil.
- **Device ID** : Identifiant unique (UUID) généré pour chaque appareil (mobile, desktop) de l'utilisateur. Il est stocké côté serveur et côté client pour lier chaque session à un appareil spécifique. Cela permet de protéger contre le vol de **Refresh Tokens** : si un **Refresh Token** est volé, il ne pourra pas être utilisé depuis un autre appareil car le **Device ID** ne correspondra pas.
---

## Fonctionnement

### 1. Première Connexion
- Login avec email et mot de passe → le serveur renvoie :
    - **Access Token (JWT)** : durée courte (ex: 5 min) stocké côté client.
    - **Refresh Token** : durée longue (ex: 7 jours) stocké côté client et serveur.
    - **Device ID** : UUID unique, stocké côté client et serveur.

### 2. Utilisation quotidienne
- Le client utilise son **JWT** pour éffectuer des requêtes.
- Si le **JWT** est éxpiré, le client utilise le **Refresh Token** + **Device ID** pour essayer d'obtenir un nouveau **JWT** et un nouveau **Refresh Token**.
- Le serveur vérifie que le **Refresh Token** est valide et que le **Device ID** correspond à celui stocké (donc l'utilisateur est toujours sur le même appareil).
- Si valide, le serveur renvoie un nouveau **JWT** et un nouveau **Refresh Token**, l'ancien **Refresh Token** précédent est marqué révoqué.
- Si le **Device ID** ne correspond pas, le serveur refuse la demande et force une nouvelle connexion.

## Pourquoi combiner JWT + Refresh Token + Device ID ?
- Il faut d'abord comprendre que le **JWT** est un token auto-contenu reflétant un utilisateur. Il est signé avec un algorithme cryptographique pour garantir son authenticité et est surtout **stateless** (donc pas stocké côté serveur) : ce qui fait que les requêtes authentifiées avec un JWT sont rapides et efficaces, sans avoir besoin d'accéder à la base de données. Il est affecté d'une durée de vie lors de sa création.
- Cependant, vu que le **JWT** n'est pas stocké côté serveur, il peut être utilisé jusqu'à son expiration. C'est pourquoi on utilise des **JWT** avec une durée de vie courte (ex: 5 min).
- Pour prolonger la session sans forcer l'utilisateur à se reconnecter fréquemment, on utilise des **Refresh Tokens** avec une durée de vie plus longue (ex: 7 jours) qui servent à obtenir de nouveaux **JWT** sans avoir à se reconnecter.
- Ces **Refresh Tokens** sont stockés côté serveur (dans une base de données) pour pouvoir les invalider si nécessaire (ex: déconnexion, révocation).
- Donc la combinaison de **JWT** + **Refresh Token** permet de limiter les requêtes à la base de données (grâce au JWT) tout en offrant une gestion sécurisée des sessions (grâce aux Refresh Tokens).
- Pour protéger contre le vol de **Refresh Tokens**, on lie chaque **Refresh Token** à un **Device ID** unique. Cela signifie que même si un attaquant vole un **Refresh Token**, il ne pourra pas l'utiliser depuis un autre appareil car le **Device ID** ne correspondra pas.

## Flux d'authentification
- **Login** : Client envoie **email + mot de passe** au serveur → Serveur valide → renvoie Access Token + Refresh Token + Device ID.
- **Accès aux ressources** : 
  - Client envoie une requête avec un **JWT** :
    - Si le **JWT** est valide → accès autorisé.
    - Si le **JWT** est expiré → utilise **Refresh Token** + **Device ID** pour essayer d'obtenir un nouveau **JWT :** 
      - Si le **Refresh Token** + **Device ID** sont valides → renvoie un nouveau **JWT** + nouveau **Refresh Token** et l'ancien est révoqué.
      - Si le **Refresh Token** est invalide ou le **Device ID** ne correspond pas → accès refusé, forcer une nouvelle connexion.
- **Déconnexion** : Client envoie une requête de déconnexion → Serveur révoque le **Refresh Token** et supprime le **Device ID** associé.

### Donc la paire (Refresh Token + Device ID) reflète une session unique de l'utilisateur sur un seul appareil.

## Prototype de schéma de base de données
- Table `users` : 
  - `user_id` (ID du user, unique)
  - `email` (string, unique)
  - `password_hash` (string, hash cryptographique du mot de passe)
- Table `refresh_tokens` :
  - `token_id` (ID du token, unique)
  - `user_id` (ID du user lié, clé étrangère)
  - `device_id` (Device ID unique de l'appareil)
  - `refresh_token` (string, le token sécurisé)
  - `expires_at` (date)
  - `created_at` (date)
  - `revoked_at` (date, nullable)
  - `revoked` (booléen)
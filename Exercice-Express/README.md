# Exercice Express

Nous allons créer un API REST pour remplacer la resource `/todos` de JSONPlaceholder :
[https://jsonplaceholder.typicode.com/todos]()

Tout l'exercice se fait dans le même fichier, créer un fichier `index.js` (ou `index.ts` si vous faites l'exercice en TypeScript).

On pourra tester notre code avec un client HTTP comme Postman :
[https://www.postman.com/downloads/]()

## Installations

Installer `express`, `cors` en `dependencies`

Installer `nodemon` en `devDependencies`

*Optionnel si exercice en TypeScript : installer `typescript`, `@types/node`, `@types/express`, `ts-node`  en `devDependencies` puis créer une config `tsconfig.json`*

## Scripts

Créer un script `start` qui démarre le serveur avec `node`

Créer un script `start:dev` qui démarre le serveur avec `nodemon`

*Optionnel si exercice en TypeScript : créer un script `build` qui transpile le code en JavaScript*

## Stockage des données

Les données seront stockées dans un tableau à ce stade :

```
const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  }
];
```

*Optionnel si exercice en TypeScript : créer une interface Todo et typer le tableau*

## Génération du prochain id

Ecrire une fonction `nextId()`, qui retourne l'id le plus grand du tableau todos que vous incrémenterez de 1.

Vous pouvez l'écrire dans un style impératif, ou bien si vous souhaitez vous risquer à la programmation fonctionnelle, en utilisant la méthode `reduce` des tableaux :
[https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce]()

*Optionnel : Vous pouvez aussi installer `lodash` et utiliser la méthode `maxBy` : [https://lodash.com/docs/#maxBy]()*

## Créer un API REST

Avec express créer les routes suivantes :

- `GET /api/todos`
- `GET /api/todos/:todoId`
- `POST /api/todos`
- `DELETE /api/todos/:todoId`
- `PUT /api/todos/:todoId`
- `PATCH /api/todos/:todoId`

## GET /api/todos

Devra retourner dans la réponse HTTP le tableau complet en JSON

Status code : `200` (par défaut dans express)

## GET /api/todos/:todoId

Devra retourner dans la réponse HTTP la todo dont l'id est reçu en paramètre en JSON

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`

ATTENTION `req.params.todoId` est de type `string` et l'id de la todo de type `number`, penser à faire la conversion.

## POST /api/todos

Recevra en entrée une todo au format : `{"title": "Acheter du lait", "completed": false}`, devra parser cette entrée avec `body-parser` (`express.json()`);

Ajouter une clé `id` générée à partir de la méthode `nextId()` et ajouter la todo au tableau

Devra retourner dans la réponse HTTP la todo avec son `id` généré

Status code : `201`

## DELETE /api/todos/:todoId

Devra retourner dans la réponse HTTP la todo dont l'id est reçu en paramètre en JSON

Devra supprimer la todo du tableau (avec les méthodes `filter` ou `splice` du type Array)

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`


## PUT /api/todos/:todoId

Recevra en entrée une todo au format : `{"title": "Acheter du lait", "completed": false}`, ou `{"title": "Acheter du lait", "completed": false, id: 123}`, devra parser cette entrée avec `body-parser`

Devra remplacer la todo du tableau en conservant l'id tel que dans l'URL de la requête

Devra retourner dans la réponse HTTP cette nouvelle todo

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`


## PATCH /api/todos/:todoId

Recevra en entrée une todo au format : `{"completed": false}`, ou `{"title": "Acheter du lait", id: 123}`, devra parser cette entrée avec `body-parser`

Devra fusionner les clés de la todo reçu en entrée avec celle de la todo du tableau (dont l'id correspond à celui de l'URL)

Devra répondre en JSON l'objet todo fusionné

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`

## Différence entre PUT et PATCH

PUT === remplacement (on supprime les clés qui ne sont pas reçu en body de la requête sauf l'id)

PATCH === mise à jour (on conserve les clés qui ne sont pas reçu en body de la requête)

Exemples :

```
PATCH /api/todos/1 HTTP/1.1
Host: localhost:4000
Content-Type: application/json
Content-Length: 25

{
    "completed": true
}
```

Retourne

```
{
  "id": 1,
  "title": "Acheter du pain",
  "completed": true
}
```

```
PUT /api/todos/1 HTTP/1.1
Host: localhost:4000
Content-Type: application/json
Content-Length: 25

{
    "completed": true
}
```

Retourne

```
{
  "id": 1,
  "completed": true
}
```

### Exercice MongoDB

#### Exercice 1

Ajouter une nouvelle collection `User` au serveur.

Créer un nouveau dossier `users` sur le model de `todos` avec 3 fichiers `model.ts`, `controller.ts` et `routes.ts`.

Un document User sera défini par les clés suivants :

name de type string et obligatoire
email de type string (optionnel), email doit contenir un @

Pour gérer le @ obligatoire, il faudra créer un custom validator :
https://mongoosejs.com/docs/validation.html#custom-validators

Récreer les routes et controllers associés à :
- GET /api/users
- GET /apu/users/:userId
- POST /api/users

Pensez à enregister userRouter dans `app.ts`

#### Exercice 2

Retourner dans `todos/model.ts` et ajouter au schéma une clé
`user` de type `ObjectId` :
https://mongoosejs.com/docs/schematypes.html#objectids

Modifier le code `showCtrl` dans `todos/controllers` de sorte à retourner un sous-objet user plutôt que sont id.

Exemple :

```
{
  "_id": "6b4353465343464554",
  "title": "ABC",
  "completed": true,
  "user": {
    "name": "Toto",
    "email": "toto@toto.com"
  }
}
```

2 versions possibles :
- soit faire 2 requêtes
- soit utiliser la méthode populate de mongoose :
https://mongoosejs.com/docs/populate.html



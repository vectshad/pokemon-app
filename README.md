# Pokémon App

React app for browsing Pokémon from a public GraphQL API, trying to catch them, and keeping a list of the ones you caught.

Built in December 2021.

**Live demo:** https://pokemon-app-b0bf9.web.app

<!-- Screenshot: add an image at docs/screenshot.png and uncomment the line below -->
<!-- ![Pokémon list](docs/screenshot.png) -->

## Tech stack

- React 17 (Create React App)
- Apollo Client + GraphQL, using the public [GraphQL PokeAPI](https://graphql-pokeapi.graphcdn.app/)
- React Router v6
- React Context for state, saved in `localStorage`
- Font Awesome icons
- Firebase Hosting (the automatic GitHub Actions deploy was removed because its credentials no longer work)

## Features

- **Pokémon list**: the first 40 Pokémon, with name and image
- **Detail page**: sprite, types and moves for one Pokémon
- **Catch**: a 50% chance to catch; on success you give it a nickname, and duplicate nicknames are rejected
- **My Pokémon**: list of caught Pokémon, with a release button
- The caught list stays after a page reload (saved in `localStorage`)

## Run locally

Requires Node.js and npm.

```bash
npm install
npm start
```

The app opens at http://localhost:3000.

## Project structure

```
src/
  graphql/      GraphQL queries (list and detail)
  contexts/     PokemonContext: caught list, catch and release
  components/   Header, PokemonList, PokemonDetail, MyPokemonList
  styles/       CSS per component
```

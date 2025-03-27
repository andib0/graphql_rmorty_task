## Rick and Morty Character List

A React application that displays a list of characters from the Rick and Morty GraphQL API.
Users can filter, scroll infinitely, and switch between supported languages.

This project uses modern frontend technologies and follows the atomic design pattern for component architecture.

## Installation

1. Clone the repository:
   git clone https://github.com/andib0/graphql_rmorty_task.git
   cd graphql_rmorty_task

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open your browser at:
   http://localhost:5173

## Tech Stack

- React with TypeScript
- Apollo Client (GraphQL)
- TailwindCSS
- Zustand (local state management)
- React-i18next (internationalization)
- localStorage (for persisting language selection)
- Vite (build tool)
- Atomic Design Pattern (for component structure)

## Features

- Fetch and display characters from the Rick and Morty GraphQL API
- Infinite scroll (pagination using `fetchMore`)
- Filter characters by status and species
- Reset filters to default state
- Multi-language support (English and German)
- Language switcher in the footer with persisted selection using `localStorage`
- Basic error and loading state handling
- Responsive, accessible, and styled with TailwindCSS

## Internationalization

- Implemented using `react-i18next`
- Language files are located under `src/i18n/locales/`
- Language selection is persisted using `localStorage`
- UI elements are translated based on the selected language

## API

- Data is fetched from: [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql)
- Supports filtering and pagination

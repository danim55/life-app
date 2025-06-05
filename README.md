````markdown
# life-app

**life-app** is a starter Angular application for managing recipes and ingredients. It was generated with Angular CLI and uses Bootstrap 3 for basic styling.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation & Local Development](#installation--local-development)  
5. [Running the App](#running-the-app)  
6. [Building for Production](#building-for-production)  
7. [Project Structure](#project-structure)  
8. [Testing](#testing)  
9. [Deployment](#deployment)  
10. [License](#license)  

---

## Features

- Create, read, update, and delete recipes  
- Add, edit, and remove ingredients  
- Simple Bootstrap-based UI  

> **Note**: This initial version does not include a backend or data persistence. It is intended as a learning project and starting point for integrating a persistence layer (for example, Firebase Firestore or another API of your choice).

---

## Tech Stack

- **Framework**: Angular 15.1.x  
- **Styling**: Bootstrap 3.4.1  
- **Language**: TypeScript ~4.9.4  
- **Package Manager**: npm  

---

## Prerequisites

1. **Node.js & npm** (version 16.x and npm 8.x or higher)  
   - Download and install from [nodejs.org](https://nodejs.org/).  
   - Verify:
     ```bash
     node -v
     npm -v
     ```

2. **Angular CLI** (v14.2.9, used to generate this project)  
   Install Globally:
   ```bash
   npm install -g @angular/cli@14.2.9
````

Verify:

```bash
ng version
// Should show Angular CLI: 14.2.9, and Angular framework versions ~15.1.1
```

---

## Installation & Local Development

1. **Clone the Repository**

   ```bash
   git clone https://github.com/danim55/life-app.git
   cd life-app
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```

   This will pull in:

   * Angular framework packages (`@angular/*` v15.1.x)
   * Bootstrap 3.4.1
   * RxJS, Zone.js, and other runtime dependencies
   * Dev dependencies for testing (Karma, Jasmine, TypeScript, etc.)

---

## Running the App

To launch the development server with live-reload:

```bash
ng serve
```

* Open your browser to `http://localhost:4200/`.
* Any changes to source files under `src/` will automatically reload the page.

---

## Building for Production

To produce an optimized, production-ready build:

```bash
ng build --configuration production
```

* The compiled files will be output to the `dist/life-app/` folder.
* You can serve this folder from any static host (for example, GitHub Pages, Netlify, or Firebase Hosting).

---

## Project Structure

```
life-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── (generated components for recipes/ingredients go here)
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   └── (static assets and stylesheets)
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── karma.conf.js
├── .gitignore
└── README.md
```

* **`src/app/`**: Contains the root module (`AppModule`), main component (`AppComponent`), routing module, and sub-folders for generated components and services.
* **`src/environments/`**: Holds environment configuration (e.g., `production: false` vs. `true`).
* **`angular.json`**: Angular CLI workspace configuration.
* **`package.json`**: Lists dependencies and npm scripts.

---

## Testing

Unit tests are configured with Karma and Jasmine. To run tests:

```bash
ng test
```

* This will launch Karma, execute all `.spec.ts` tests, and report code coverage if configured.

---

## Deployment

Because this project does not include an integrated backend or data persistence, deployment primarily involves serving static files. Below is a generic approach; adapt as needed for your hosting choice.

1. **Build**

   ```bash
   ng build --configuration production
   ```
2. **Serve `dist/life-app/`**

   * **GitHub Pages**:

     1. Install the `angular-cli-ghpages` package:

        ```bash
        npm install -g angular-cli-ghpages
        ```
     2. From the project root:

        ```bash
        ng deploy --base-href=/life-app/
        ```

        (> This automatically builds and publishes to `gh-pages` branch.)
   * **Netlify**:

     1. Create a new site and point the “Publish directory” to `dist/life-app`.
     2. Netlify will serve the compiled Angular app.
   * **Firebase Hosting** (if you choose to integrate later):

     1. Install Firebase CLI:

        ```bash
        npm install -g firebase-tools
        firebase login
        ```
     2. Initialize hosting in your project root:

        ```bash
        firebase init hosting
        ```

        * Set `dist/life-app` as the public directory.
        * Configure as a single-page app (rewrite all URLs to `index.html`).
     3. Deploy:

        ```bash
        ng build --configuration production
        firebase deploy --only hosting
        ```
     4. Your site will be live at the Firebase-provided URL.

> **Note**: If you elect to add Firebase or another backend later, you can update `environment.ts` with your Firebase config and install `@angular/fire + firebase`. Until then, this project remains a static frontend scaffold.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

```

# Docs

This directory contains the configuration of the website that powers **Kaga**.

- [Main Directories](#)
- [Get Started](#)
  - [Prerequisites](#)
  - [How to Run](#)

## 📁 Main Directories

The [/.vitepress](./.vitepress) folder contains the core configuration of the website, including styling, components, and internationalization (i18n) settings.

All web pages are written in Markdown, with their souce code can be found in [/docs](./docs) directory. Vitepress autogenerates routes based on this folder structure.

Public assets, such as the article thumbnails and the Presentation slides, are located in the [/public](./public) directory.

## 🚀 Get Started

### 📋 Prerequisites

1. [Node.js](https://nodejs.org/en)
2. [Git](https://git-scm.com/install/)

### 💻 How to Run

In case, you want to run the website locally, you can follow these instructions

1. Clone the repository and enter directory

```bash
$ git clone https://github.com/adriytkr/kaga.git
$ cd ./kaga/docs
```

2. Install dependencies

```bash
$ npm install
```

3. Run server

```bahsh
$ npm run docs:dev
```

4. The website will be hosted at http://localhost:5173/ by default.

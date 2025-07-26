# 🛡️ MyTrust Frontend

Interface web du projet **MyTrust**, développée par l’équipe interne de **TRUST ASSURANCE & RÉASSURANCE**.  
Elle vise à offrir une expérience fluide, moderne et sécurisée aux clients, partenaires et visiteurs.

🛑 **Ce repository est privé. Il est exclusivement réservé à l’équipe interne.**

---

## 🌐 Objectifs du projet

- Refonte technique et graphique moderne, alignée à la charte de l’entreprise
- Création d’un portail client MyTrust performant et responsive
- Intégration de modules interactifs : chatbot, simulateur, e-paiement, suivi sinistres
- Optimisation SEO, accessibilité et performances globales

---
## Structure de projet

my-trust/
├── app/                          # ✅ Next.js App Router (pages/layouts)
│   ├── layout.tsx                # Root layout with container & theme
│   ├── page.tsx                  # Home page using composed sections
│   └── favicon.ico
│
├── components/                   # 🧩 Shared UI & layout wrappers
│   ├── ui/                       # ✅ ShadCN components (managed by CLI)
│       ├── button.tsx
│       ├── input.tsx
│       └── ...etc
│   
│
├── features/                     # 💡 Features pages 
│   └── home /                    # Create branche same as feature page part you are working on it
│       ├── navbar/
│       │   └── Navbar.tsx
│       ├── carousel/
│       │   └── Carousel.tsx
│       ├── products-overview/
│       │   └── ProductsOverview.tsx
│       ├── news/
│       │   └── NewsSection.tsx
│       ├── clients-trust/
│       │   └── ClientsTrust.tsx
│       ├── product-cards/
│       │   └── ProductCards.tsx
│       ├── newsletter/
│       │   ├── NewsletterForm.tsx
│       │   └── helpers.ts
│       └── footer/
│           └── Footer.tsx
│
├── shared/                       # ♻️ Shared logic between all layers
│   ├── types/
│   │   └── newsletter.ts         # `export { type NewsletterFormData to assure harmony between frontend and backend data types }`
│   ├── validators/
│   │   └── newsletter.schema.ts  # ✅ Zod schema for form
│   ├── lib/
│   │   ├── utils.ts              # formatDate, devLog, etc.
│   │   └── auth.ts               # (for future login logic)
│
│
├── public/                       # Static assets (images, icons, etc.)
│   └── logo.png
│
├── .gitignore                    # Hide .env, .DS_Store, etc.
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts            # ShadCN theme + colors
├── tsconfig.json
├── package.json
└── README.md

## 🚀 Technologies utilisées

- [Next.js 14](https://nextjs.org/) — App Router, React Server Components
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/) — bibliothèque de composants UI modernes
- TypeScript
- ESLint + Prettier
- Framer Motion (animations UI)
- Google Analytics (prévu)
- Déploiement : Vercel / serveur interne
- Zod for validations

---

## 📦 UI & Design System

Le projet repose sur une intégration propre et réutilisable via :

- **Tailwind CSS** pour le design rapide et responsive
- **shadcn/ui** pour les composants standards et accessibles (boutons, inputs, modals...)

### 🔧 Exemple pour ajouter un bouton

```bash
npx shadcn-ui@latest add button
```
## 👥 Méthode de travail interne

- 📌 **Outils** : Microsoft Teams (communication) + Trello (gestion des tâches)
- 📆 **Réunions d’équipe** : chaque dimanche et jeudi:
- **Format d'échanges** :  
                                                        1. ✅ Ce que j’ai fait  
                                                        2. 🔜 Ce que je vais faire  
                                                        3. 🚧 Mes blocages  


## 🔁 Workflow Git interne
### Branches principales

| Branche      | Rôle                                 |
|--------------|--------------------------------------|
| `master`     | Code de production stable            |
| `DEV`        | Intégration continue des features    |
| `feature/*`  | Développement de nouvelles features  |

📝 Toutes les pull requests vont vers la branche **DEV**.  
Après validation finale, **DEV** est fusionnée dans la branche **master**.  

## 📋 Conventions de code
### Conventions de nommage

| Élément     | Convention                                                                 | Exemple                         |
|-------------|----------------------------------------------------------------------------|----------------------------------|
| Composants  | `PascalCase`                                                              | `ContactForm.tsx`               |
| Fonctions   | `camelCase`                                                               | `handleSubmit()`                |
| Dossiers    | `kebab-case`                                                              | `user-profile/`                 |
| Commits     | [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-scope-and--to-draw-attention-to-breaking-change) | `feat()`, `fix()`, `refactor()` |

### 🔧 Exemple de commit

```bash
feat(contact): création du formulaire de contact
```

## 🤝 Contribution interne

- Chaque membre travaille sur une branche feature/*
- PR obligatoire avec titre clair et description dans la branche **DEV**.
- Revue de code par un autre membre avant merge
- Tâches suivies dans Trello
## 🎓 Ressources & support de formation

Pour faciliter la montée en compétences de l'équipe, voici une sélection de tutoriels et playlists YouTube recommandés :

### 🔧 Git & GitHub

- [Apprendre Git et GitHub pour les débutants (Grafikart)](https://www.youtube.com/watch?v=7yF-XJ4o3Dk) — 🇫🇷
- [Git & GitHub - Full Course for Beginners (freeCodeCamp)](https://www.youtube.com/watch?v=RGOj5yH7evk) — 🇬🇧

### ⚛️ Next.js

- [Next.js 14 App Router Course (Lee Robinson – Vercel)](https://www.youtube.com/watch?v=Y6KDk5iyrYE) — 🇬🇧
- [Next.js 14 App Router Crash Course (Traversy Media)](https://www.youtube.com/watch?v=R6f7qwb1v1I) — 🇬🇧

### 🧩 shadcn/ui

- [Getting Started with shadcn/ui (official)](https://www.youtube.com/watch?v=9TOe1WzvSmo) — 🇬🇧
- [shadcn/ui Tutorial with Next.js & Tailwind (Code with Antonio)](https://www.youtube.com/watch?v=ZxMB6Njs3ck) — 🇬🇧

### 🎨 Tailwind CSS

- [Tailwind CSS Crash Course (Traversy Media)](https://www.youtube.com/watch?v=UBOj6rqRUME) — 🇬🇧
- [Tailwind CSS pour les débutants (Grafikart)](https://www.youtube.com/watch?v=Vqcgk3fSeiA) — 🇫🇷

> 💡 Astuce : Ajouter ces vidéos à une **playlist d'équipe sur YouTube** pour centraliser le support interne.

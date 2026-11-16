# johanlopes.fr

Site personnel de Johan LOPES : une page unique construite avec Vue 3, Vite et Bootstrap 5 (SCSS).

## Contenu

Le contenu éditorial est séparé du code :

- `src/assets/datas/career.yaml` : parcours professionnel. Le logo d'une expérience est
  `src/assets/datas/career/<slug>.png`, ou `<logo>.png` si le champ `logo` est renseigné.
- `src/assets/datas/customers.yml` : logos clients, attendus en `.png` et `.webp` dans
  `src/assets/datas/customers/`.

## Commandes

```sh
bun install      # installe les dépendances
bun run dev      # serveur de développement
bun run build    # build de production dans dist/
bun run preview  # prévisualise le build
bun run lint     # ESLint (avec correction automatique)
bun run format   # Prettier sur src/
```

## Déploiement

Chaque push sur `main` lance le workflow `.github/workflows/continous-deployment.yml`, qui vérifie
le lint, construit le site et le publie sur GitHub Pages. `index.html` y est copié en `404.html`
pour que les URL profondes comme `/legal-notices` fonctionnent en accès direct.

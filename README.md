# Dream2Discern project page

Static project page for *Dream2Discern: Learning from Hard Latent Variants for Runtime Failure Prediction in Multi-Agent Systems*.

## Preview locally

No build step or package installation is required. From this directory, run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. The page uses `index.html`, `support.js`, and `data/results.js`. Open it through HTTP, since the result tables are loaded as a JavaScript module. React, ReactDOM, Babel and fonts currently load from their public CDNs, so an internet connection is required for the first three scripts. Their URLs and integrity hashes are pinned in `support.js`.

## Publish on GitHub Pages

The site is arranged for publishing from the `main` branch's root directory. In the repository's **Settings → Pages → Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save. The expected URL is `https://zbox1005.github.io/dream2discern-project/` after GitHub completes deployment. The empty `.nojekyll` file tells Pages to serve these files directly.

## Edit content

- `index.html`: page markup, styles, interactions and page properties.
- `data/results.js`: result tables.
- `assets/video/dream2discern.mp4`: current v3 animation. Replace this file to update the on-page video; it starts muted when scrolled into view.
- `figures/`, `assets/`, `paper/dream2discern.pdf`: figures, logos and downloadable paper.
- `docs/paper-notes.md`: source notes for the abstract, captions and result numbers.

`arxivUrl`, `codeUrl` and `hfUrl` remain empty until those destinations are available. The BibTeX entry marks the arXiv identifier as pending rather than showing a fabricated ID.

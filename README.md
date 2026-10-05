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
- `data/results.js`: full paper result tables. The project page shows selected main-table rows via `VISIBLE_MAIN_ROWS` in `index.html`; detailed cross-model and ablation data remain here for future use.
- `assets/animation/dream2discern.html`: the supplied self-contained animation, embedded in the video section. To update it, replace this file and change the `?v=` value on both animation URLs in `index.html` so cached pages load the new version. The link below the frame opens it at full size.
- `figures/`, `assets/`: figures and logos. The paper PDF is withheld from the published site until the arXiv page is available.
- `docs/paper-notes.md`: source notes for the abstract, captions and result numbers.

`arxivUrl`, `codeUrl` and `hfUrl` remain empty until those destinations are available. The BibTeX entry marks the arXiv identifier as pending rather than showing a fabricated ID.

The animation is an HTML/JavaScript player, not an MP4. It is isolated in a sandboxed iframe and loops automatically. The published viewer hides its playback bar, Claude Design badge and host-only Export button. Its scale calculation uses the full 16:9 canvas height so hiding the bar does not create black edges. The original file in Downloads was not changed.

If restoring the playback bar in a later version, update both the animation's `barH` scale reservation and the iframe wrapper height together; the visible canvas is 16:9 and the original bar needed another 44px.

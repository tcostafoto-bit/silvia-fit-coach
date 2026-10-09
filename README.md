# Silvia Fit Coach

App de treino (PWA) da Silvia. Um só `index.html` sem framework, publicada na Vercel. Sem servidor, sem contas: os dados ficam no telemóvel.

- `index.html` — a app inteira (gerado por `tools/build.sh` a partir de `src/`)
- `manifest.webmanifest`, `sw.js`, `icons/` — PWA (adicionar ao ecrã principal, funciona offline)

Para atualizar: muda os ficheiros em `src/`, corre `./tools/build.sh && node tools/check.js`, sobe a versão em `sw.js` (`VERSION`) e faz push para `main`. A Vercel publica sozinha.

# Silvia Fit Coach — instruções para o Claude

App de treino (PWA) da Silvia, amiga do Tiago. Publicada na Vercel a partir deste repositório: cada push para `main` publica sozinho (~1 min). É uma app estática: **não tem funções de servidor nem variáveis de ambiente** (não há Coach/chat).

## Quem pede mudanças
O Tiago (ou a Silvia através dele). Fala sempre em **português de Portugal, informal**. A Silvia não é programadora: explica as mudanças pelo que ela vê na app, nunca pelo código.

## Como está feito
- **Nunca editar `index.html` à mão.** É gerado por `tools/build.sh` a partir de `src/`:
  - `00-head.html` — HTML, CSS (paleta: marfim + petróleo `#1E2D33` + coral `#E8927A`), os 4 separadores (Treinos, Mobilidade, Nutrição, Perfil).
  - `01-base-data.js`, `02-extra-data.js`, `02b-figs.js` — biblioteca de exercícios partilhada com a app da Diana (`LIB`, `EX_EN`, `FEEL`, `FIG`, `ALIAS`). Mudanças aqui devem ser genéricas.
  - **`02c-person-data.js` — tudo o que é da Silvia**: `PERSON` (nome, chave do localStorage `sfc1`, metas), locais (`LOCS`: ginásio / em casa), grupos da biblioteca por local, exercícios novos (lombar e pescoço) com figuras e "sentir/evitar".
  - **`03-program.js` — o plano**: `VARIANTS` (padrão → exercício e carga de partida por local) e `TYPES` (programas com `program:true` = 3 treinos A/B/C por ordem; `quick` = Rápido 20′; `mob_*` = rotinas de mobilidade com `mobility:true`). `TYPE_ORDER` e `MOB_ORDER` definem o que aparece.
  - `03b-nutri.js` — guia de nutrição simples (princípios, suplementos, receitas).
  - `04-engine.js` — lógica e ecrãs. Coisas específicas desta app: check-in da lombar antes de cada treino (`askThenStart`, guardado em `st.pain`), `startType` (começa uma rotina sem mudar o programa escolhido), subida de peso com um toque no fim do treino (`bumpCandidates`/`applyBumps`), passos e metas no Perfil, separador Mobilidade (`renderMob`).
- Depois de mudar `src/`: `./tools/build.sh` e `node tools/check.js` (tem de dar `no LIB: []`, `no FIG: []` e `no FEEL: []`; mostra também os minutos de cada treino).
- Ao publicar: subir `VERSION` em `sw.js` (ex.: `sfc-v1` → `sfc-v2`) para os telemóveis apanharem a versão nova.
- Plano e decisões: `docs/PROGRAMA-silvia-fit-coach.md`.

## Regras do plano da Silvia (não mudar sem o Tiago pedir)
49 anos, dia inteiro sentada, nível intermédio. Objetivo: perder gordura; secundários: fôlego, postura, tonificar. **Hérnia lombar diagnosticada, dor que por vezes desce à perna; pescoço do computador.** Por isso: **nada de barra às costas, peso morto do chão, abdominais em flexão (crunch/sit-up), saltos ou press de ombros em pé.** Pernas com leg press, goblet ao banco e afundo inverso; posteriores com leg curl sentada e pull-through; press só sentada com encosto; core anti-extensão/anti-rotação. 3 treinos por semana de 50 min (curto ≈ 35), intensidade 3/5 (esforço 6–7), cardio sem impacto (adora cardio). Cargas de partida conservadoras. Com dor ≥ 6/10 ou formigueiro novo: só mobilidade e falar com o médico.

## Como trabalhar
1. Faz a mudança em `src/`, build, check.
2. Testa no telemóvel simulado (Playwright, 390×844) o ecrã que mudaste.
3. Commit e push para `main`. Diz ao Tiago em 2–3 frases o que mudou e onde ver.
4. Se algo correr mal: `git revert` do último commit e push repõe a versão anterior.
5. Os dados dela ficam só no telemóvel (localStorage, chave `sfc1`). Nunca mudar a estrutura de `st` sem migrar os dados antigos.

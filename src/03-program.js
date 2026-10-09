
/* ---------- padrões de movimento → exercício por local ----------
   VARIANTS[padrão] = {gym:[exercício, carga de referência], home:[...]}
   Um padrão que não esteja aqui é usado tal e qual em todos os locais (sem carga).
   Cargas de partida CONSERVADORAS (hérnia lombar): é melhor subir na 2.ª semana. */
var VARIANTS = {
  /* pernas e glúteos — sem barra às costas, sem peso morto convencional */
  leg_press:    {gym:["Leg Press (Máquina)","50 kg"],                      home:["Agachamento (Peso Corporal)",""]},
  box_squat:    {gym:["Goblet Squat ao Banco (Halter)","12 kg"],           home:["Agachamento (Peso Corporal)",""]},
  goblet:       {gym:["Goblet Squat (Halter)","12 kg"],                    home:["Agachamento (Peso Corporal)",""]},
  hip_thrust:   {gym:["Hip Thrust (Barra)","30 kg"],                       home:["Ponte Glúteos",""]},
  hip_thrust_db:{gym:["Hip Thrust (Halter)","15 kg"],                      home:["Ponte Glúteos Unilateral",""]},
  glute_bridge: {gym:["Ponte Glúteos (c/ Elástico nos joelhos)",""],       home:["Ponte Glúteos (c/ Elástico nos joelhos)",""]},
  pull_through: {gym:["Pull-Through (Polia)","15 kg"],                     home:["Bom Dia c/ Elástico",""]},
  rev_lunge:    {gym:["Afundo Inverso (Halteres)","6 kg/mão"],             home:["Afundo Inverso",""]},
  stepup:       {gym:["Stepup (Banco + Halteres)","6 kg/mão"],             home:["Split Squat (Peso Corporal)",""]},
  hamstring:    {gym:["Leg Curl Sentada (Máquina)","20 kg"],               home:["Hamstring Walkout",""]},
  abductor:     {gym:["Abdutora (Máquina)","30 kg"],                       home:["Clamshell c/ Mini Band",""]},
  glute_med:    {gym:["Abdução de Anca (Polia)","7,5 kg"],                 home:["Abdução de Anca Deitada",""]},
  kickback:     {gym:["Kickback de Glúteo (Polia)","7,5 kg"],              home:["Kickback de Glúteo c/ Mini Band",""]},
  adductor:     {gym:["Adutora (Máquina)","30 kg"],                        home:["Agachamento Sumo c/ Elástico",""]},
  leg_ext:      {gym:["Extensão de Pernas (Máquina)","20 kg"],             home:["Agachamento Tempo 3-1-1",""]},
  /* superior — tudo sentado ou com apoio; press só com encosto */
  incline:      {gym:["Supino Inclinado (Halteres)","8 kg/mão"],           home:["Flexões em Incline",""]},
  chest_press:  {gym:["Chest Press (Máquina)","25 kg"],                    home:["Flexões em Incline",""]},
  fly:          {gym:["Crossover (Polia)","10 kg"],                        home:["Flexões em Incline",""]},
  ohp:          {gym:["Desenvolvimento Ombro (Halteres) – Banco Sentado","5 kg/mão"], home:["Press de Ombros c/ Elástico",""]},
  ohp_machine:  {gym:["Shoulder Press (Máquina)","15 kg"],                 home:["Press de Ombros c/ Elástico",""]},
  lat_raise:    {gym:["Elevação Lateral (Halteres)","4 kg/mão"],           home:["Elevação Lateral c/ Elástico",""]},
  row_cable:    {gym:["Remada Sentada (Polia)","25 kg"],                   home:["Remada c/ Elástico",""]},
  row_chest:    {gym:["Remada c/ Apoio ao Peito (Máquina)","20 kg"],       home:["Remada c/ Elástico",""]},
  pulldown:     {gym:["Lat Pulldown (Polia)","25 kg"],                     home:["Puxada c/ Elástico (Porta)",""]},
  face_pull:    {gym:["Face Pull (Polia)","10 kg"],                        home:["Pull Apart (c/ Elástico)",""]},
  rear_delt:    {gym:["Fly Reverso (Halteres) – Banco Inclinado","4 kg/mão"], home:["Pull Apart (c/ Elástico)",""]},
  ext_rot:      {gym:["Rotação Externa Ombro (c/ Elástico)",""],           home:["Rotação Externa Ombro (c/ Elástico)",""]},
  pull_apart:   {gym:["Pull Apart (c/ Elástico)",""],                      home:["Pull Apart (c/ Elástico)",""]},
  biceps:       {gym:["Rosca Direta (Halteres) – Banco Sentado","6 kg/mão"], home:["Rosca Bíceps c/ Elástico",""]},
  triceps:      {gym:["Tríceps na Polia (Corda)","12,5 kg"],               home:["Extensão de Tríceps c/ Elástico",""]},
  farmer:       {gym:["Farmer's Carry (Halteres)","12 kg/mão"],            home:["Prancha (Frontal)",""]},
  /* core amigo da lombar: anti-extensão e anti-rotação, nada em flexão */
  pallof:       {gym:["Pallof Press (Polia)","7,5 kg"],                    home:["Pallof Press (Elástico na Porta)",""]},
  dead_bug:     {gym:["Dead Bug (Chão)",""],                               home:["Dead Bug (Chão)",""]},
  bird_dog:     {gym:["Bird Dog (Chão)",""],                               home:["Bird Dog (Chão)",""]},
  side_plank:   {gym:["Prancha Lateral (Cada lado)",""],                   home:["Prancha Lateral (Cada lado)",""]},
  plank:        {gym:["Prancha (Frontal)",""],                             home:["Prancha (Frontal)",""]},
  curl_up:      {gym:["McGill Curl-Up",""],                                home:["McGill Curl-Up",""]},
  /* cardio sem impacto */
  cardio_warm:  {gym:["Passadeira – Aquecimento",""],                      home:["Marcha no Lugar",""]},
  cardio_warm2: {gym:["Bicicleta – Aquecimento",""],                       home:["Marcha no Lugar",""]},
  cardio_bike:  {gym:["Bicicleta – Intervalos (1′ / 1′)",""],              home:["Marcha no Lugar",""]},
  cardio_inc:   {gym:["Passadeira – Inclinada",""],                        home:["Marcha no Lugar",""]},
  cardio_inc_int:{gym:["Passadeira – Caminhada Inclinada (Intervalos)",""],home:["Marcha no Lugar",""]},
  cardio_ell:   {gym:["Elíptica – Intervalos (30s / 30s)",""],             home:["Marcha no Lugar",""]},
  cardio_ell_st:{gym:["Elíptica – Contínuo",""],                           home:["Marcha no Lugar",""]},
  cardio_row:   {gym:["Remo – Aquecimento",""],                            home:["Marcha no Lugar",""]},
  /* alongamentos que mudam de sítio */
  st_chest:     {gym:["Alongamento Peitoral",""],                          home:["Alongamento Peitoral (Porta)",""]},
  st_lats:      {gym:["Alongamento Dorsais (Lats)",""],                    home:["Alongamento Dorsais (Mesa)",""]},
  st_hams:      {gym:["Alongamento Posteriores (Sentada)",""],             home:["Alongamento Posteriores (Sentada)",""]}
};

/* ---------- blocos ----------
   item = [padrão ou exercício, "3×10" | "3×30s" | "3×10/lado" | "10 reps", esforço 1-10]
   bloco = {name, rest, items, short:false (sai no curto) | {items} (troca no curto), wod:{kind, min|cap|work/rest/rounds}}
   Os minutos de cada bloco são calculados. */
var AQ = "Aquecimento", A = "Força · Supersérie A", B = "Força · Supersérie B", AL = "Alongamentos", FIN = "Finisher · Cardio", CD = "Cardio · Final";
var CORE = "Core · Lombar segura";

function wodBlock(name, kind, opts, items, shortOpts){
  var b = {name:name, rest:"", wod:Object.assign({kind:kind}, opts), items:items};
  if (shortOpts) b.short = {wod:Object.assign({kind:kind}, opts, shortOpts)};
  return b;
}
function aq(items){ return {name:AQ, rest:"seguido", items:items}; }
function al(items){ return {name:AL, rest:"respira fundo", items:items}; }
function ss(name, rest, items, opt){ var b = {name:name, rest:rest, items:items}; if (opt === "long") b.short = false; return b; }
function core(items, opt){ var b = {name:CORE, rest:"30s", items:items}; if (opt === "long") b.short = false; return b; }
function cardio(pat, min, eff, shortMin){ var b = {name:CD, rest:"seguido", items:[[pat, min + " min", eff || 7]]}; if (shortMin) b.short = {items:[[pat, shortMin + " min", eff || 7]]}; return b; }
function stage(title, blocks, note){ var s = {title:title, blocks:blocks}; if (note) s.note = note; return s; }

/* aquecimentos: cardio + mobilidade de anca e meio das costas (nunca a lombar a aquecer com carga) */
var W_A = [["cardio_warm","5 min",3],["Cat-Camel (Chão)","1×8",1],["Rotação Torácica (Chão)","1×6/lado",1],["Ponte Glúteos","1×12",2]];
var W_B = [["cardio_warm2","5 min",3],["Cat-Camel (Chão)","1×8",1],["Alongamento Flexores da Anca","1×30s/lado",1],["Bird Dog (Chão)","1×6/lado",2]];
var W_C = [["cardio_ell_st","5 min",3],["Rotação Torácica (Chão)","1×6/lado",1],["Pull Apart (c/ Elástico)","1×12",2],["Ponte Glúteos (c/ Elástico nos joelhos)","1×12",2]];
var W_SOFT = [["cardio_warm2","5 min",2],["Cat-Camel (Chão)","1×10",1],["Joelho ao Peito (Deitada)","1×30s/lado",1]];
/* alongamentos: sem flexão forçada da lombar */
var S_LEG = [["Alongamento Glúteo (Figura 4)","1×30s/lado",1],["Alongamento Flexores da Anca","1×30s/lado",1],["Alongamento Quadricípite (De Pé)","1×30s/lado",1]];
var S_POST = [["st_hams","1×30s/lado",1],["Pigeon","1×30s/lado",1],["Postura da Criança","1×40s",1]];
var S_UP = [["st_chest","1×30s/lado",1],["Alongamento Trapézio (Pescoço)","1×30s/lado",1],["Chin Tuck (Recolher o Queixo)","1×8",1]];
var S_SOFT = [["Joelho ao Peito (Deitada)","1×40s",1],["Alongamento Glúteo (Figura 4)","1×30s/lado",1],["Postura da Criança","1×40s",1],["Chin Tuck (Recolher o Queixo)","1×8",1]];

/* descansos: 30s entre os dois da supersérie, 60–75s no fim da volta */
var REST_A = "A1 → 30s → A2 → 75s", REST_B = "B1 → 30s → B2 → 60s";

/* ================= PROGRAMAS =================
   Cada programa tem 3 treinos (A, B, C) feitos por ordem = 1 semana. Depois recomeça com mais carga (ciclo 2, 3…).
   program:true faz a app avançar sozinha para o treino seguinte quando terminas. */
var TYPES = {
  /* ---------- PROGRAMA PRINCIPAL ---------- */
  full: {name:"Corpo inteiro", focus:"O teu plano: 3 treinos por semana, 50 min, lombar protegida", goal:"Três treinos diferentes que se repetem todas as semanas. Perda de gordura com força e cardio sem impacto; os pesos sobem de semana para semana.", kind:"strength", program:true, versions:[
    stage("A · Pernas e peito", [aq(W_A),
      ss(A, REST_A, [["leg_press","3×12",7],["row_cable","3×12",7]]),
      ss(B, REST_B, [["hip_thrust","3×12",7],["incline","3×12",7]]),
      core([["dead_bug","3×8/lado",6],["side_plank","3×25s/lado",6]], "long"),
      cardio("cardio_bike", 8, 7, 5),
      al(S_LEG)],
      "Leg press com a lombar colada ao encosto. Hip thrust com o queixo recolhido e as costelas em baixo."),
    stage("B · Glúteos, posteriores e costas", [aq(W_B),
      ss(A, REST_A, [["box_squat","3×10",7],["pulldown","3×12",7]]),
      ss(B, REST_B, [["pull_through","3×12",7],["face_pull","3×15",6]]),
      core([["bird_dog","3×6/lado",6],["pallof","3×10/lado",6]], "long"),
      cardio("cardio_inc", 8, 7, 5),
      al(S_POST)],
      "No pull-through dobras na anca com as costas direitas: o esforço é do glúteo, nunca da lombar."),
    stage("C · Uma perna de cada vez e ombros", [aq(W_C),
      ss(A, REST_A, [["rev_lunge","3×10/lado",7],["row_chest","3×12",7]]),
      ss(B, REST_B, [["hamstring","3×12",7],["ohp","3×10",6]]),
      {name:"Força · Extra glúteo médio", rest:"45s", short:false, items:[["abductor","3×15",7]]},
      core([["curl_up","3×8",6],["plank","3×30s",6]], "long"),
      cardio("cardio_ell", 8, 7, 5),
      al(S_UP)],
      "Press de ombros sempre sentada com encosto. Se o pescoço se queixar, troca pela máquina ou salta.")
  ]},

  /* ---------- LOMBAR SENSÍVEL ---------- */
  soft: {name:"Lombar sensível", focus:"Para os dias em que a lombar está a 4–5/10 ou a dor desce à perna", goal:"Tudo com apoio: máquinas, nada de dobrar a coluna com carga, cardio suave e mais mobilidade. Mantém o hábito sem agravar.", kind:"strength", program:true, versions:[
    stage("A · Máquinas com apoio", [aq(W_SOFT),
      ss(A, REST_B, [["chest_press","3×12",6],["row_chest","3×12",6]]),
      ss(B, REST_B, [["hamstring","3×12",6],["abductor","3×15",6]]),
      core([["dead_bug","2×8/lado",5],["bird_dog","2×6/lado",5]]),
      cardio("cardio_ell_st", 10, 5, 6),
      al(S_SOFT)],
      "Se algum exercício aumentar a dor ou o formigueiro, para e passa ao seguinte."),
    stage("B · Pull e glúteo sem carga na coluna", [aq(W_SOFT),
      ss(A, REST_B, [["pulldown","3×12",6],["glute_bridge","3×15",6]]),
      ss(B, REST_B, [["face_pull","3×15",5],["adductor","3×15",6]]),
      core([["curl_up","2×8",5],["side_plank","2×20s/lado",5]]),
      cardio("cardio_warm2", 10, 5, 6),
      al(S_SOFT)],
      "Ponte de glúteos pequena e controlada: aperta o glúteo em cima, a lombar não arqueia."),
    stage("C · Caminhar e soltar", [aq(W_SOFT),
      cardio("cardio_inc", 15, 6, 10),
      ss(A, REST_B, [["row_cable","2×15",5],["leg_ext","2×15",5]]),
      core([["bird_dog","2×8/lado",5],["dead_bug","2×8/lado",5]]),
      al([["Joelho ao Peito (Deitada)","1×40s",1],["Rotação Torácica (Chão)","1×8/lado",1],["Alongamento Flexores da Anca","1×30s/lado",1],["Postura da Criança","1×40s",1]])],
      "Dia leve: se a dor passar de 6/10 ou houver formigueiro novo, fica só pela caminhada e fala com o médico.")
  ]},

  /* ---------- CARDIO E FÔLEGO ---------- */
  cardio: {name:"Cardio e fôlego", focus:"Para o 4.º dia ou quando apetece só suar", goal:"Intervalos sem impacto (passadeira inclinada, bicicleta, elíptica) com um bloco curto de core. Queima calorias e sobe o fôlego sem carregar a coluna.", kind:"cardio", program:true, versions:[
    stage("A · Subida intervalada", [aq([["cardio_warm","5 min",3],["Cat-Camel (Chão)","1×8",1],["Ponte Glúteos","1×12",2]]),
      cardio("cardio_inc_int", 18, 7, 12),
      core([["dead_bug","2×8/lado",6],["side_plank","2×25s/lado",6]]),
      cardio("cardio_warm", 5, 4),
      al(S_LEG)],
      "2 minutos a subir, 1 a recuperar. Sem te agarrares."),
    stage("B · Bicicleta 1′ / 1′", [aq([["cardio_warm2","5 min",3],["Rotação Torácica (Chão)","1×6/lado",1],["Ponte Glúteos (c/ Elástico nos joelhos)","1×12",2]]),
      cardio("cardio_bike", 16, 7, 10),
      core([["bird_dog","2×6/lado",6],["pallof","2×10/lado",6]]),
      cardio("cardio_warm2", 5, 4),
      al(S_POST)],
      "Sobe a resistência nos minutos fortes, não a cadência: a lombar agradece."),
    stage("C · Elíptica 30 / 30", [aq([["cardio_ell_st","5 min",3],["Cat-Camel (Chão)","1×8",1],["Pull Apart (c/ Elástico)","1×12",2]]),
      cardio("cardio_ell", 14, 7, 10),
      core([["curl_up","2×8",6],["plank","2×30s",6]]),
      cardio("cardio_ell_st", 5, 4),
      al(S_UP)],
      "30s rápido, 30s leve. Tronco direito e braços a puxar.")
  ]},

  /* ---------- POSTURA E CORE ---------- */
  posture: {name:"Postura e core", focus:"Costas direitas, pescoço solto, abdómen que protege a lombar", goal:"Omoplatas, meio das costas e core em todos os ângulos. Bom para o dia a seguir a um dia inteiro sentada.", kind:"core", program:true, versions:[
    stage("A · Omoplatas e anti-extensão", [aq(W_C),
      ss(A, REST_B, [["row_chest","3×12",7],["face_pull","3×15",6]]),
      ss(B, REST_B, [["ext_rot","3×12/lado",5],["dead_bug","3×8/lado",6]]),
      core([["plank","3×30s",6],["glute_bridge","3×15",6]], "long"),
      cardio("cardio_ell_st", 8, 6, 5),
      al(S_UP)],
      "Face pull: cotovelos altos e abre as mãos no fim. É saúde de ombro, não força."),
    stage("B · Anti-rotação e lado do corpo", [aq(W_B),
      ss(A, REST_B, [["pallof","3×10/lado",6],["side_plank","3×25s/lado",6]]),
      ss(B, REST_B, [["pulldown","3×12",7],["farmer","3×30s",7]]),
      core([["bird_dog","3×6/lado",6],["curl_up","3×8",6]], "long"),
      cardio("cardio_inc", 8, 6, 5),
      al(S_POST)],
      "Farmer's carry: ombros para trás e para baixo, passos curtos, como se levasses dois sacos de compras pesados."),
    stage("C · Pescoço, ombros e glúteo médio", [aq(W_A),
      ss(A, REST_B, [["row_cable","3×12",7],["rear_delt","3×15",6]]),
      ss(B, REST_B, [["abductor","3×15",7],["ohp_machine","3×12",6]]),
      core([["Chin Tuck (Recolher o Queixo)","3×8",4],["dead_bug","3×8/lado",6]], "long"),
      cardio("cardio_warm2", 8, 6, 5),
      al([["Alongamento Trapézio (Pescoço)","1×30s/lado",1],["st_chest","1×30s/lado",1],["Extensão Torácica (Cadeira ou Rolo)","1×8",1],["Alongamento Flexores da Anca","1×30s/lado",1]])],
      "Chin tuck: queixo para trás, olhos em frente. Pequeno e sem forçar.")
  ]},

  /* ---------- RÁPIDO 20′ ---------- */
  quick: {name:"Rápido · 20 min", focus:"Para dias sem tempo: curto, sem saltos, lombar segura", kind:"wod", noDuration:true, versions:[
    {title:"EMOM 14′ · ginásio ou casa", blocks:[
      aq([["cardio_warm2","3 min",3],["Cat-Camel (Chão)","1×6",1],["Ponte Glúteos","1×10",2]]),
      wodBlock("EMOM 14′", "emom", {min:14}, [["goblet","10 reps",7],["row_cable","12 reps",7],["dead_bug","8/lado",6],["glute_bridge","15 reps",7],["incline","10 reps",7],["bird_dog","6/lado",6],["side_plank","20s/lado",6]]),
      al([["st_hams","1×30s/lado",1],["st_chest","1×30s/lado",1]])
    ]},
    {title:"Circuito 14′ · sem equipamento", blocks:[
      aq([["Marcha no Lugar","1×45s",2],["Cat-Camel (Chão)","1×6",1],["Joelho ao Peito (Deitada)","1×20s/lado",1]]),
      wodBlock("Circuito 14′", "circuit", {work:40, rest:20, rounds:2}, [["Agachamento (Peso Corporal)","40s",7],["Afundo Inverso","40s",7],["Flexões em Incline","40s",7],["Remada c/ Elástico","40s",7],["Prancha Lateral (Cada lado)","40s",6],["Ponte Glúteos","40s",7],["Marcha no Lugar","40s",7]]),
      al([["Alongamento Flexores da Anca","1×30s/lado",1],["Postura da Criança","1×40s",1]])
    ]},
    {title:"Cardio express 14′", blocks:[
      aq([["cardio_warm","3 min",3],["Ponte Glúteos","1×10",2]]),
      cardio("cardio_bike", 10, 8),
      core([["dead_bug","2×8/lado",6],["curl_up","2×6",6]]),
      al([["Alongamento Glúteo (Figura 4)","1×30s/lado",1],["Chin Tuck (Recolher o Queixo)","1×8",1]])
    ]}
  ]},

  /* ---------- MOBILIDADE (rotinas, separador próprio) ---------- */
  mob_office: {name:"Pausa do escritório", focus:"8 min · sentada ou de pé, no trabalho", kind:"mobility", mobility:true, noDuration:true, versions:[{blocks:[
    {name:"Pescoço e meio das costas", rest:"seguido", items:[["Chin Tuck (Recolher o Queixo)","1×10",2],["Extensão Torácica (Cadeira ou Rolo)","1×8",1],["Alongamento Trapézio (Pescoço)","1×30s/lado",1],["Rotação Torácica (Chão)","1×6/lado",1]]},
    {name:"Anca e peito", rest:"seguido", items:[["Alongamento Flexores da Anca","1×30s/lado",1],["Alongamento Peitoral (Porta)","1×30s/lado",1],["Cat-Camel (Chão)","1×8",1]]}
  ]}]},
  mob_lumbar: {name:"Lombar ao acordar", focus:"10 min · no tapete, para destravar a lombar", kind:"mobility", mobility:true, noDuration:true, versions:[{blocks:[
    {name:"Soltar", rest:"seguido", items:[["Cat-Camel (Chão)","1×10",1],["Joelho ao Peito (Deitada)","1×30s/lado",1],["Rotação Torácica (Chão)","1×8/lado",1]]},
    {name:"Ativar", rest:"seguido", items:[["Dead Bug (Chão)","1×8/lado",3],["Bird Dog (Chão)","1×6/lado",3],["Ponte Glúteos","1×12",3]]},
    {name:"Alongar", rest:"seguido", items:[["Alongamento Glúteo (Figura 4)","1×30s/lado",1],["Postura da Criança","1×40s",1]]}
  ]}]},
  mob_neck: {name:"Pescoço e ombros", focus:"8 min · para o fim de um dia ao computador", kind:"mobility", mobility:true, noDuration:true, versions:[{blocks:[
    {name:"Pescoço", rest:"seguido", items:[["Chin Tuck (Recolher o Queixo)","1×10",2],["Alongamento Trapézio (Pescoço)","1×30s/lado",1]]},
    {name:"Ombros e omoplatas", rest:"seguido", items:[["Rotação Externa Ombro (c/ Elástico)","1×12/lado",3],["Pull Apart (c/ Elástico)","1×15",3],["Alongamento Peitoral (Porta)","1×30s/lado",1],["Alongamento Tríceps e Ombro","1×30s/lado",1]]}
  ]}]},
  mob_hips: {name:"Anca e posteriores", focus:"10 min · depois de treinar ou ao fim do dia", kind:"mobility", mobility:true, noDuration:true, versions:[{blocks:[
    {name:"Anca", rest:"seguido", items:[["Alongamento Flexores da Anca","1×40s/lado",1],["Alongamento Glúteo (Figura 4)","1×40s/lado",1],["Anca 90/90 (Chão/Transições)","1×6/lado",1]]},
    {name:"Posteriores", rest:"seguido", items:[["Alongamento Posteriores (Sentada)","1×40s/lado",1],["Pigeon","1×40s/lado",1],["Alongamento Gémeos (Parede)","1×30s/lado",1]]}
  ]}]}
};
var TYPE_ORDER = ["full","soft","cardio","posture"];
var QUICK_KEY = "quick";
var MOB_ORDER = ["mob_lumbar","mob_office","mob_neck","mob_hips"];

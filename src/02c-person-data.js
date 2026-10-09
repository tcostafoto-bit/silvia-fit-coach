
/* ========== DADOS DA SILVIA (locais, exercícios novos, figuras) ==========
   Este ficheiro sobrepõe-se ao que vem da app base. É aqui que se mexe para
   adaptar a app a outra pessoa sem tocar na biblioteca partilhada. */

/* ---------- a pessoa ---------- */
var PERSON = {
  name:"Silvia", app:"Silvia Fit Coach", short:"Silvia Fit", key:"sfc1",
  file:"silvia-fit-coach",
  /* quantos treinos por semana e quanto tempo (vem do questionário) */
  daysPerWeek:3, minutes:50,
  /* meta de passos por dia (começa baixo e sobe) */
  stepsGoal:7500,
  /* proteína por dia, em g (editável no Perfil) */
  protein:100,
  /* check-in da lombar antes de treinar */
  checkin:true
};

/* ---------- locais ---------- */
LOCS = {
  gym:  {name:"Ginásio", sub:"completo", note:"Máquinas, polias, halteres, banco e cardio. A lombar manda: tudo com apoio"},
  home: {name:"Em casa", sub:"sem ginásio", note:"Peso corporal, tapete e um elástico"}
};
LOC_ORDER = ["gym","home"];

/* que grupos da biblioteca aparecem em cada local (os do condomínio da app base desaparecem) */
GROUP_LOC = {
  "Home Gym 900":[], "Power Rack 900":[], "Halteres Fixos":[], "Bicicleta Estática":[],
  "Banco Ajustável":["gym"], "Halteres + Barra":["gym"], "Elásticos de Resistência":["gym","home"],
  "Peso Corporal":["gym","home"], "Alongamentos":["gym","home"],
  "Máquinas · Fitness Up":["gym"], "Halteres · Fitness Up":["gym"], "Cardio · Fitness Up":["gym"], "Funcional":["gym"], "Sem ginásio":["home"],
  "Lombar e pescoço":["gym","home"]
};
/* nomes dos grupos para a biblioteca da Silvia */
var GROUP_NAME = {"Máquinas · Fitness Up":"Máquinas", "Halteres · Fitness Up":"Halteres", "Cardio · Fitness Up":"Cardio", "Sem ginásio":"Em casa"};
LIB.forEach(function(g){ if (GROUP_NAME[g.g]){ var old = g.g; g.g = GROUP_NAME[old]; GROUP_LOC[g.g] = GROUP_LOC[old]; } });
/* tira da biblioteca os grupos que não existem em nenhum local */
LIB = LIB.filter(function(g){ var gl = GROUP_LOC[g.g]; return !gl || gl.length; });

/* ---------- exercícios novos (lombar e pescoço) ---------- */
LIB.push(
  {g:"Lombar e pescoço", items:[
    ["McGill Curl-Up","core","Deitada de costas, uma perna esticada e a outra dobrada, mãos debaixo da lombar para manter a curva natural. Levanta só a cabeça e os ombros 2 a 3 cm, como se tivesses um peso na testa, aguenta 8 a 10s a respirar e desce. O pescoço fica em linha com o tronco, o queixo não vai ao peito.","Deitada no tapete, mãos debaixo da lombar"],
    ["Chin Tuck (Recolher o Queixo)","mobilidade","Sentada ou de pé, olhos em frente. Recua o queixo para trás como se fizesses um duplo queixo, sem baixar a cabeça, até sentir a nuca a alongar. Aguenta 5s e solta. É o exercício do pescoço de quem passa o dia ao computador.","Sentada ou de pé, costas direitas"],
    ["Extensão Torácica (Cadeira ou Rolo)","mobilidade","Sentada no bordo da cadeira, mãos atrás da cabeça, cotovelos abertos. Deixa o meio das costas arquear por cima do encosto (ou de um rolo) olhando para o teto, 2s, e volta. A lombar não participa: é o meio das costas que abre.","Cadeira com encosto baixo ou rolo de espuma"],
    ["Joelho ao Peito (Deitada)","mobilidade","Deitada de costas, puxa um joelho ao peito com as mãos atrás da coxa, a outra perna esticada no chão. Respira fundo 20 a 30s e troca. Depois os dois joelhos ao peito. Suave, sem balançar.","Tapete"],
    ["Alongamento Trapézio (Pescoço)","mobilidade","Sentada, segura o bordo da cadeira com a mão do lado a alongar. Inclina a cabeça para o ombro oposto (orelha ao ombro) e ajuda muito ao de leve com a outra mão. 30s de cada lado, sem rodar a cabeça.","Sentada, mão a segurar a cadeira"],
    ["Goblet Squat ao Banco (Halter)","perna","Halter junto ao peito, um banco atrás de ti. Desce devagar até tocar no banco com o glúteo (sem te sentares de vez), tronco direito, e sobe empurrando os pés contra o chão. O banco garante que não desces demais e que a lombar não enrola.","Halter ao peito, banco ou caixa atrás"],
    ["Afundo Inverso (Halteres)","perna","Halteres ao lado do corpo. Dá um passo grande para trás e desce até o joelho de trás quase tocar o chão, tronco direito, e volta empurrando com a perna da frente. Passo para trás, não para a frente: é mais estável e poupa o joelho e a lombar.","Halteres ao lado do corpo, espaço atrás"],
    ["Bicicleta – Aquecimento","cardio","Pedala a um ritmo em que consegues falar, resistência leve. Ajusta o selim: joelho quase esticado no ponto mais baixo. Costas direitas, mãos leves no guiador.","Bicicleta estática do ginásio"],
    ["Bicicleta – Intervalos (1′ / 1′)","cardio","1 minuto forte (esforço 7 a 8, sem fôlego para falar seguido) e 1 minuto leve. Sobe a resistência nos minutos fortes, não a cadência. Costas direitas o tempo todo.","Bicicleta estática do ginásio"],
    ["Elíptica – Intervalos (30s / 30s)","cardio","30s rápido (esforço 7 a 8) e 30s leve. Sem impacto: boa para a lombar. Usa os braços e mantém o tronco direito.","Elíptica"],
    ["Passadeira – Caminhada Inclinada (Intervalos)","cardio","Alterna 2 minutos a 10–12% de inclinação (esforço 7) com 1 minuto plano a recuperar. Sem te agarrares às barras: baixa a velocidade se precisares.","Passadeira"]
  ]}
);
Object.assign(EX_EN, {
  "McGill Curl-Up":"McGill Curl-Up", "Chin Tuck (Recolher o Queixo)":"Chin Tuck", "Extensão Torácica (Cadeira ou Rolo)":"Thoracic Extension",
  "Joelho ao Peito (Deitada)":"Knee to Chest Stretch", "Alongamento Trapézio (Pescoço)":"Upper Trap Stretch",
  "Goblet Squat ao Banco (Halter)":"Box Goblet Squat", "Afundo Inverso (Halteres)":"DB Reverse Lunge",
  "Bicicleta – Aquecimento":"Bike Warm-Up", "Bicicleta – Intervalos (1′ / 1′)":"Bike Intervals 1/1", "Elíptica – Intervalos (30s / 30s)":"Elliptical Intervals 30/30",
  "Passadeira – Caminhada Inclinada (Intervalos)":"Incline Walk Intervals"
});
Object.assign(FEEL, {
  "McGill Curl-Up":["O abdómen a segurar o tronco sem a lombar se mexer. É pequeno e lento.","Enrolar a cabeça para o peito ou tirar as mãos de baixo da lombar."],
  "Chin Tuck (Recolher o Queixo)":["A nuca a alongar e a cabeça a ficar por cima dos ombros.","Baixar a cabeça ou olhar para o chão: o olhar fica em frente."],
  "Extensão Torácica (Cadeira ou Rolo)":["O meio das costas a abrir e o peito a subir.","Arquear a lombar: só o meio das costas se mexe."],
  "Joelho ao Peito (Deitada)":["A lombar e o glúteo a soltar, respiração lenta.","Puxar pelo joelho ou balançar."],
  "Alongamento Trapézio (Pescoço)":["O lado do pescoço, da orelha ao ombro, a alongar.","Rodar a cabeça ou puxar com força."],
  "Goblet Squat ao Banco (Halter)":["Coxas e glúteos a empurrar, tronco direito, cotovelos por dentro dos joelhos.","Deixar-te cair no banco ou arredondar as costas para descer mais."],
  "Afundo Inverso (Halteres)":["Glúteo e coxa da perna da frente ao subir.","Inclinar o tronco à frente ou o joelho da frente cair para dentro."],
  "Bicicleta – Aquecimento":["O corpo a aquecer aos poucos; consegues falar.","Começar forte: é só para destravar."],
  "Bicicleta – Intervalos (1′ / 1′)":["Sem fôlego no fim do minuto forte e a recuperar no leve.","Ir a meio gás no minuto forte ou curvar as costas."],
  "Elíptica – Intervalos (30s / 30s)":["Pernas e braços a puxar, sem impacto.","Deixar os braços parados."],
  "Passadeira – Caminhada Inclinada (Intervalos)":["Glúteos e gémeos nos 2 minutos a subir.","Agarrar as barras: anula a inclinação."]
});
Object.assign(ALIAS, {
  "Goblet Squat ao Banco (Halter)":"Goblet Squat (Halter)", "Afundo Inverso (Halteres)":"Afundo Caminhando (Halteres)",
  "Bicicleta – Aquecimento":"Bicicleta Estática – Aquecimento", "Bicicleta – Intervalos (1′ / 1′)":"Bicicleta Estática – Aquecimento",
  "Elíptica – Intervalos (30s / 30s)":"Bicicleta Estática – Aquecimento", "Passadeira – Caminhada Inclinada (Intervalos)":"Passadeira – Aquecimento"
});
Object.assign(FIG, {
  /* deitada, uma perna dobrada, mãos sob a lombar, cabeça ligeiramente levantada */
  "McGill Curl-Up": "B c 26,92,7|B l 34,98 74,104|B l 74,104 104,104 136,104|B l 74,104 96,80 118,104|B l 40,100 56,100|A f 56,102,3|M d M 24 84 Q 30 72 44 76",
  /* cabeça de perfil a recuar (seta para trás) */
  "Chin Tuck (Recolher o Queixo)": "B c 92,34,9|B l 92,44 90,80|B l 90,80 70,88 50,110|B l 90,80 108,88 118,110|B l 80,56 112,56|P c 112,34,9|M d M 120 30 Q 110 24 100 30",
  /* sentada na cadeira a arquear o meio das costas para trás */
  "Extensão Torácica (Cadeira ou Rolo)": "P l 60,70 100,70|P l 100,70 100,112|P l 60,70 60,112|P l 100,70 104,40|B c 118,30,7|B l 112,38 100,56 96,70|B l 108,46 124,50|B l 96,70 60,72 54,110|M d M 124 70 Q 136 54 128 40",
  /* deitada, um joelho ao peito */
  "Joelho ao Peito (Deitada)": "B c 26,100,7|B l 36,104 76,104|B l 76,104 110,104 144,104|B l 76,104 70,76 90,70|B l 60,98 80,78|A c 88,70,3|M d M 100 84 Q 94 70 84 66",
  /* sentada, cabeça inclinada para o lado */
  "Alongamento Trapézio (Pescoço)": "P l 56,72 100,72|P l 56,72 56,112|P l 100,72 100,112|B c 70,28,7|B l 78,34 82,72|B l 80,44 62,56 54,76|A c 54,78,3|B l 80,44 92,30 80,24|B l 82,72 70,90 66,110|B l 82,72 96,90 100,110|M d M 60 20 Q 48 26 48 40",
  /* goblet squat a tocar no banco */
  "Goblet Squat ao Banco (Halter)": "P l 96,80 128,80|P l 100,80 100,112|P l 124,80 124,112|B c 70,26,7|B l 69,34 60,78|B l 68,38 76,58 82,50|A r 78,40,8,16|B l 60,78 94,80 86,110 98,111|M l 40,62 40,92",
  /* passadeira inclinada: plataforma inclinada */
  "Passadeira – Caminhada Inclinada (Intervalos)": "P l 20,104 140,84|P l 20,104 20,112|P l 140,84 140,112|B c 84,26,7|B l 84,34 80,66|B l 82,40 70,52 76,66|B l 82,40 98,46 94,60|B l 80,66 68,84 62,98|B l 80,66 96,86 104,92|M d M 116 60 Q 126 48 120 38"
});
FIG["Afundo Inverso (Halteres)"] = FIG["Afundo Caminhando (Halteres)"];
FIG["Bicicleta – Aquecimento"] = FIG["Bicicleta Estática – Aquecimento"];
FIG["Bicicleta – Intervalos (1′ / 1′)"] = FIG["Bicicleta Estática – Aquecimento"];
FIG["Elíptica – Intervalos (30s / 30s)"] = FIG["Elíptica – Contínuo"] || FIG["Bicicleta Estática – Aquecimento"];

const recordset = [
  {
      palavra: "importante",
      sinonimos: ["relevante", "significativo", "fundamental", "indispensável"]
  },
  {
      palavra: "desenvolvimento",
      sinonimos: ["evolução", "progresso", "crescimento", "avanço"]
  },
  {
      palavra: "consequência",
      sinonimos: ["resultado", "efeito", "repercussão", "desdobramento"]
  },
  {
      palavra: "necessário",
      sinonimos: ["essencial", "indispensável", "imperativo", "fundamental"]
  }
];


function buscarSinonimos(palavra) {
  const resultado = recordset.find(item => item.palavra === palavra);
  return resultado ? resultado.sinonimos : `A palavra "${palavra}" não foi encontrada no recordset.`;
}

// Exemplo de uso:
const sinonimos = buscarSinonimos("importante");
console.log(sinonimos);

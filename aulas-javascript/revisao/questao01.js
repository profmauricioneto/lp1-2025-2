// Uma empresa de tecnologia deseja analisar apenas os funcionários que ainda estão ativos no sistema. O array colaboradores contém objetos com informações sobre cada funcionário, incluindo a propriedade ativo (true ou false). Implemente um código em JavaScript que retorne apenas os colaboradores ativos. 
// a. Critério: utilize o método filter

const colaboradores = [
    { nome: "Ana", ativo: true },
    { nome: "Bruno", ativo: false },
    { nome: "Carlos", ativo: true },
    { nome: "Daniela", ativo: false }
];

// const colaboradoresAtivos = colaboradores.filter((colaborador) => (colaborador.ativo) ? colaborador : null);
const colaboradoresAtivos = colaboradores.filter((colaborador) => (colaborador.ativo));

console.log(colaboradoresAtivos);

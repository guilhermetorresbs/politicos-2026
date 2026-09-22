const Mandato = require('./classes/Mandato');

const Presidente = require('./classes/Presidente');
const Governador = require('./classes/Governador');
const DeputadoEstadual = require('./classes/DeputadoEstadual');
const DeputadoFederal = require('./classes/DeputadoFederal');
const Senador = require('./classes/Senador');

// Esses são os mandatos
const mandatoPresidente = new Mandato(
    'Propõe, sanciona e veta leis e edita medidas provisórias.'
);

const mandatoGovernador = new Mandato(
    'Sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.'
);

const mandatoDeputadoEstadual = new Mandato(
    'Legisla sobre assuntos de interesse do Estado e fiscaliza o governador.'
);

const mandatoDeputadoFederal = new Mandato(
    'Legisla sobre assuntos federais e fiscaliza o Presidente da República.'
);

const mandatoSenador = new Mandato(
    'Sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.'
);

// o Presidente
const presidente = new Presidente(
    'Luiz Inácio Lula da Silva',
    'PT',
    'Palácio do Planalto',
    'Praça dos Três Poderes, Brasília - DF',
    'R$46.366,19',
    [
        'Novo PAC'
    ],
    mandatoPresidente,
    []
);

// Governador PE
const governadorPE = new Governador(
    'Raquel Lyra',
    'PSD',
    'Palácio do Campo das Princesas',
    'Praça da República, Santo Antônio, Recife - PE',
    'R$ 22.000,00',
    [
        'Juntos pela Segurança'
    ],
    mandatoGovernador,
    'Pernambuco',
    []
);

// Governador SP(outro)
const governadorSP = new Governador(
    'Tarcísio de Freitas',
    'Republicanos',
    'Palácio dos Bandeirantes',
    'Morumbi, São Paulo - SP',
    'R$ 36.301,5',
    [
        'Programa de investimentos estaduais'
    ],
    mandatoGovernador,
    'São Paulo',
    []
);

// Desputados Estaduais PE
const depEstadualPE1 = new DeputadoEstadual(
    'Álvaro Porto',
    'PSDB',
    'R$ 29.469,99',
    [
        'Projeto Estadual 1'
    ],
    mandatoDeputadoEstadual,
    'Pernambuco',
    [
        'Comissão de Constituição, Legislação e Justiça'
    ],
    'Rua da União, 439, Recife - PE'
);

const depEstadualPE2 = new DeputadoEstadual(
    'Dani Portela',
    'PSOL',
    'R$ 34.774,64',
    [
        'Projeto Estadual 2'
    ],
    mandatoDeputadoEstadual,
    'Pernambuco',
    [
        'Comissão de Educação e Cultura'
    ],
    'Rua da União, 439, Recife - PE'
);

const depEstadualPE3 = new DeputadoEstadual(
    'João Paulo',
    'PT',
    'R$ 34.774,64',
    [
        'Projeto Estadual 3'
    ],
    mandatoDeputadoEstadual,
    'Pernambuco',
    [
        'Comissão de Administração Pública'
    ],
    'Rua da União, 439, Recife - PE'
);

// Deputados Estaduais AC(outro)
const depEstadualAC1 = new DeputadoEstadual(
    'José Adailton Cruz Pereira',
    'UNIÃO',
    'R$ 34.774,64',
    [
        'Projetos legislativos estaduais'  
    ],
    mandatoDeputadoEstadual,
    'Acre',
    [
        'Direitos Humanos / Educação, entre outras participações registradas pela ALEAC.'
    ],
    'Assembleia Legislativa do Estado do Acre — ALEAC'
);

const depEstadualAC2 = new DeputadoEstadual(
    'José Afonso Vasconcelos Fernandes',
    'UNIÃO',
    'R$ 34.774,64',
    [
        'Projetos legislativos estaduais'
    ],
    mandatoDeputadoEstadual,
    'Acre',
    [
        'possui participação na Mesa Diretora; a página oficial registra-o como 5º Secretário da Mesa Diretora.'
    ],
    'Assembleia Legislativa do Estado do Acre — ALEAC'
);

// Deputados Federais PE
const depFederalPE1 = new DeputadoFederal(
    'André Ferreira',
    'PL',
    'R$ 46.366,19',
    [
        'Projeto Federal 1'
    ],
    mandatoDeputadoFederal,
    'Bancada a consultar'
);

const depFederalPE2 = new DeputadoFederal(
    'Pedro Campos',
    'PSB',
    'R$ 46.366,19',
    [
        'Projeto Federal 2'
    ],
    mandatoDeputadoFederal,
    'Bancada a consultar'
);

const depFederalPE3 = new DeputadoFederal(
    'Carlos Veras',
    'PT',
    'R$ 46.366,19',
    [
        'Projeto Federal 3'
    ],
    mandatoDeputadoFederal,
    'Bancada a consultar'
);

// Deputados Federais MG(outro)
const depFederalMG1 = new DeputadoFederal(
    'Eros Ferreira Biondini',
    'PL',
    'R$ 46.366,19',
    [
        'Propostas legislativas federais'
    ],
    mandatoDeputadoFederal,
    'MG',
    [
        'PL / bancada parlamentar'
    ],
    'legislar sobre assuntos de competência da União e fiscalizar os atos do Poder Executivo Federal.'
);

const depFederalMG2 = new DeputadoFederal(
    'Marcelo Henrique Teixeira Dias',
    'PL',
    'R$ 46.366,19',
    [
        'Propostas legislativas federais'
    ],
    mandatoDeputadoFederal,
    'Bancada a consultar',
    [
        'PL / bancada parlamentar'
    ],
    'legislar sobre assuntos de competência da União e fiscalizar os atos do Poder Executivo Federal.'
);

// Senadores PE
const senadorPE1 = new Senador(
    'Fernando Dueire',
    'MDB',
    'R$ 46.366,19',
    [],
    mandatoSenador,
    'Pernambuco',
    2022
);

const senadorPE2 = new Senador(
    'Humberto Costa',
    'PT',
    'R$ 46.366,19',
    [],
    mandatoSenador,
    'Pernambuco',
    2022
);

// Senador AL(outro)
const senadorAL = new Senador(
    'Renan Calheiros',
    'MDB',
    'R$ 46.366,19',
    [
        'Projetos legislativos federais'
    ],
    mandatoSenador,
    'Alagoas',
    2018
);

//Aqui nós testamos o polimorfismo
const politicos = [
    presidente,
    governadorPE,
    governadorSP,

    depEstadualPE1,
    depEstadualPE2,
    depEstadualPE3,
    depEstadualAC1,
    depEstadualAC2,

    depFederalPE1,
    depFederalPE2,
    depFederalPE3,
    depFederalMG1,
    depFederalMG2,

    senadorPE1,
    senadorPE2,
    senadorAL
];

console.log('====================================');
console.log('       SISTEMA DE POLÍTICOS 2026');
console.log('====================================');

for (let politico of politicos) {
    console.log('\n------------------------------------');
    console.log(politico.apresentar());
    console.log('\nMANDATO:');
    console.log(politico.executarMandato());
}

//Cada politico possui o metodo "executarMandato()" mas cada um implement de maneira diferente. Esse é o polimorfismo.


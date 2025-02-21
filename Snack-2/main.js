const squad = [
    {
        'nome': 'Milan',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
    {
        'nome': 'Inter',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
    {
        'nome': 'Juventus',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
    {
        'nome': 'Fiorentina',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
    {
        'nome': 'Napoli',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
    {
        'nome': 'Atlanta',
        'Puntifatti': '0',
        'Fallisubiti': '0'
    },
]

function generateNumbRandom (){
    return Math.round(Math.random() * 10);
}

console.log(generateNumbRandom());

for (let i = 0; i < squad.length; i++) {
    let thisSquadra = squad[i];
    thisSquadra.Puntifatti = generateNumbRandom();
    thisSquadra.Fallisubiti = generateNumbRandom();
}

console.log(squad);

//  Push falli subiti nell'array
const squadFalliSubiti = []

for (let i = 0; i < squad.length; i++) {
    const thisSquadra = squad[i];
    squadFalliSubiti.push({
        nome: thisSquadra.nome,
        Fallisubiti: thisSquadra.Fallisubiti,
    });
}

console.log(squadFalliSubiti);
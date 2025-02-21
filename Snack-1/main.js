/* 

Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

//  Create array object

const bicicle = [
{
    'name' : 'Saetta',
    'weight': '30'
},
{
    'name' : 'mcQueen',
    'weight' : '35'
},
{
    'name' : 'crichetto',
    'weight' : '20'
},
{
    'name' : 'fenice',
    'weight' : '23'
}
]

let lightBycicle = bicicle[0];

// create a cicle

for (i = 1; i < bicicle.length; i++){
    if (bicicle[i].weight < lightBycicle.weight){
        lightBycicle = bicicle[i]
    }
}

console.log(lightBycicle);
//  le let est une variable de block qui nexistera que dans le block du code actuel (un block
//est defini par des accolades) et dans les block enfant(si non relié)

let variableScope:string ='bloup';
const variableConstante:string ='blip';
// une variable const est une var read only qui ne pourra etre redefinie 
if(true){
    let variableScope = 'blip';
    console.log(variableScope); //blip
}
console.log(variableScope);//bloup

()=> {console.log('bloup')
};

let monTableau:string[] = [];
monTableau.filter(function(valeur){
    return valeur === 'bloup';
});
monTableau.filter((valeur) => valeur === 'bloup');
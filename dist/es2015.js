//  le let est une variable de block qui nexistera que dans le block du code actuel (un block
//est defini par des accolades) et dans les block enfant(si non relié)
var variableScope = 'bloup';
var variableConstante = 'blip';
// une variable const est une var read only qui ne pourra etre redefinie 
if (true) {
    var variableScope_1 = 'blip';
    console.log(variableScope_1); //blip
}
console.log(variableScope); //bloup
(function () {
    console.log('bloup');
});
var monTableau = [];
monTableau.filter(function (valeur) {
    return valeur === 'bloup';
});
monTableau.filter(function (valeur) { return valeur === 'bloup'; });
//# sourceMappingURL=es2015.js.map
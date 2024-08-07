var arr11 = [4, 5, 6, 9];
var arr12 = [5, 3, 6, 3];
var result1 = [];
function intersection1() {
    for (var i = 0; i < arr11.length; i++) {
        for (var j = 0; j < arr12.length; j++) {
            if (arr11[i] === arr12[j]) {
                console.log("Duplicates found:".concat(arr11[i], ",").concat(arr12[j]));
            }
            else {
                console.log("no duplicates:".concat(arr11[i], ",").concat(arr12[j]));
            }
        }
    }
}
intersection1();

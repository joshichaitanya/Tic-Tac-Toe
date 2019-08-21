
var isWinner = function (arr, x) {
    var winType = {
        horizontal1: (arr[0][0] === x && arr[0][1] === x && arr[0][2] === x),
        horizontal2: (arr[1][0] === x && arr[1][1] === x && arr[1][2] === x),
        horizontal3: (arr[2][0] === x && arr[2][1] === x && arr[2][2] === x),
        vertical1: (arr[0][0] === x && arr[1][0] === x && arr[2][0] === x),
        vertical2: (arr[0][1] === x && arr[1][1] === x && arr[2][1] === x),
        vertical3: (arr[0][2] === x && arr[1][2] === x && arr[2][2] === x),
        cross1: (arr[0][0] === x && arr[1][1] === x && arr[2][2] === x),
        cross2: (arr[0][2] === x && arr[1][1] === x && arr[2][0] === x),
    }
    for (var i in winType) {
        if (winType[i]) {
            console.log(i)
            return i
        }
    }
}
var determineWinner = function (arr) {
    var x = isWinner(arr, 'x')
    var o = isWinner(arr, 'o')
    if (x) return document.getElementById('winner').innerHTML = 'X is Winner'
    if (o) return document.getElementById('winner').innerHTML = 'O is Winner'
    for (var i=0;i<3;i++) {
		for (var j=0;j<3;j++) {
			if (arr[i][j] === '') return 'incomplete'
		}
	}
    return document.getElementById('winner').innerHTML = 'Draw'
}
var firstUser = true
var arr = [['', '', ''], ['', '', ''], ['', '', '']]

document.addEventListener("DOMContentLoaded", function(){
    console.log( "ready!" );
    document.getElementById('playerName').innerHTML = getUserName()
    var buttons = document.getElementsByTagName('button')
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", buttonClicked);
    }
    function buttonClicked(event) {
        var id = event.target.id
        document.getElementById(id).setAttribute("disabled", true);
        var splittedId = id.split('-')
        var i = splittedId[1]
        var j = splittedId[2]
        arr[i][j] = firstUser ? 'x' : 'o'
        document.getElementById(id).innerHTML = arr[i][j];
        firstUser = !firstUser
        determineWinner(arr)
        document.getElementById('playerName').innerHTML = getUserName()
    }
});
function getUserName() {
    return firstUser ? 'First User' : 'Second User'
}
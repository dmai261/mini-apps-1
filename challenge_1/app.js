// var express = require('express');
// var app = express();
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(3000, ()=> console.log('Listening on port 3000'))

let turn = 0;
let players = {
    1: 'Player X',
    2: 'Player O'
};

//Refresh button listener
document.getElementById('refresh').addEventListener("click", function() {
    for(var i = 0; i < document.getElementsByClassName('cell').length; i++){
        if (document.getElementsByClassName('cell')[i].firstChild) {
            document.getElementsByClassName('cell')[i].removeChild(document.getElementsByClassName('cell')[i].firstChild);
        }
    }
})

//Click event for each cell in table
let cells = document.getElementsByClassName('cell');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        let x = document.createElement("img");
        x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
        x.setAttribute('class', 'image');
        let o = document.createElement("img");
        o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
        o.setAttribute('class', 'image');
        if (turn % 2 === 0) {
            event.target.appendChild(x);
            event.target.setAttribute('val', 1);
        } else {
            event.target.appendChild(o);
            event.target.setAttribute('val', 2);
        }
        turn += 1;
        setTimeout(winChecker, 0);

    })
}

//Functions to check for 3 way streaks
let winChecker = function() {
    let currentTable = document.getElementsByClassName('cell');
    currentTable = [].slice.call(currentTable, 0);
    let newTable = [];
    for (var i = 0; i < currentTable.length; i += 3) {
        newTable.push(currentTable.slice(i, i+3));
    }

    for (var j = 0; j < newTable.length; j++) {
        let row = newTable[j];

        if (horizontalChecker(row)) {
            alert(horizontalChecker(row) + ' WON');
            return true;
        } else if (verticalChecker(newTable, j)) {
            alert(verticalChecker(newTable, j) + ' WON') 
            return true;
        } else if (mainDiagonalChecker(newTable)) {
            alert(mainDiagonalChecker(newTable) + ' WON')
            return true;  
        } else if (antiDiagonalChecker(newTable)) {
            alert(antiDiagonalChecker(newTable) + ' WON')
            return true;
        } else if (turn === 9) {
            alert('TIED LMFAO')
            return true;
        }
    }
}

let horizontalChecker = function(row) {
    let currentStreak = 0;
    let currPlayer = row[0].getAttribute('val');
    for (var i = 0; i < 3; i++) {
        if (row[i] !== undefined) {
            if (row[i].getAttribute('val') === currPlayer && currPlayer !== '0') {
                currentStreak += 1;
            }
        }
    }

    if (currentStreak === 3) {
        return players[currPlayer];
    } else {
        return false;
    }
}

let verticalChecker = function(table, colIndex) {
    let currentStreak = 0;
    let currPlayer = table[0][colIndex].getAttribute('val');
    for (var i = 0; i < table.length; i++) {
        if (table[i][colIndex].getAttribute('val') === currPlayer && currPlayer !== '0') {
            currentStreak += 1;
        }
    }

    if (currentStreak === 3) {
        return players[currPlayer];
    } else {
        return false;
    }
}

let mainDiagonalChecker = function(table) {
    let currentStreak = 0;
    let currPlayer = table[0][0].getAttribute('val');
    for (var i = 0; i < table.length; i++) {
        if (table[i][i].getAttribute('val') === currPlayer && currPlayer !== '0') {
            currentStreak += 1;
        }
    }

    if (currentStreak === 3) {
        return players[currPlayer];
    } else {
        return false;
    }
}

let antiDiagonalChecker = function(table) {
    let currentStreak = 0;
    let index = 0;
    let currPlayer = table[0][2].getAttribute('val');
    for (var i = 2; i >= 0; i--) {
        if (table[index][i].getAttribute('val') === currPlayer && currPlayer !== '0') {
            currentStreak += 1;
        }
        index++;
    }

    if (currentStreak === 3) {
        return players[currPlayer];
    } else {
        return false;
    }
}
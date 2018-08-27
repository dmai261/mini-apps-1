let turn = 1;
// let board = [[0,0,0], [0,0,0], [0,0,0]];
document.getElementById("cell1").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
    winChecker();
})
document.getElementById("cell2").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell3").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell4").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell5").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell6").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell7").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell8").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})
document.getElementById("cell9").addEventListener("click", function() {
    let x = document.createElement("img");
    x.setAttribute('src', "https://image.flaticon.com/icons/png/128/151/151882.png");
    let o = document.createElement("img");
    o.setAttribute('src', "https://image.flaticon.com/icons/png/128/16/16894.png");
    if (turn % 2 === 0) {
        event.target.appendChild(o);
        event.target.setAttribute('val', 0);
    } else {
        event.target.appendChild(x);
        event.target.setAttribute('val', 1);
    }
    turn += 1;
})

let winChecker = function() {
    let currentTable = document.getElementsByClassName('cell');
    currentTable = [].slice.call(currentTable, 0);
    let newTable = [];
    for (var i = 0; i < currentTable.length; i += 3) {
        newTable.push(currentTable.slice(i, i+3));
    }
    
}

let horizontalChecker = function(row, rowIndex) {
    let currentStreak = 1;
    let currPlayerDecision = row[rowIndex];
    for (var i = rowIndex; i < 3; i++) {
        if (row[rowIndex+1] !== undefined) {
            if (row[rowIndex+1].val === currPlayerDecision.val) {
                currentStreak += 1;
            }
        }
    }

    return currentStreak;
}

let verticalChecker = function(table, rowIndex, colIndex) {
    let streak = 0;
    let currPlayer = table[rowIndex][colIndex].val;
    for (var i = 0; i < table.length; i++) {
        if (table[rowIndex+i][colIndex].val === currPlayer) {
            streak += 1;
        }
    }

    return streak;
}

let allHorizontalChecker = function(table) {
    for (var i = 0; i < table.length; i++) {
        //run horizontalChecker
    }
}
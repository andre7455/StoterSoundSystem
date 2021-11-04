
//one function that determens the disired effect and than applies it to the apropriate player
function effects(playerId, command) {
    switch (command) {
        case 0:
            document.getElementById("player" + playerId).play();
            break;
        case 1:
            document.getElementById("player" + playerId).pause();
            break;
        case 2:
            document.getElementById("player" + playerId).loop = true;
            break;
    }
}

//this function reverts all the buttons to gray and removes the active songid from the array if there is any
function reverter(playerId) {
    for (let i = 0; i < 8; i++) {
        if (document.getElementById('button' + playerId + i).classList.contains('btn-success')) {
            actieveMuziek.pop(actieveMuziek.indexOf(i)); // dit moet het nummer uit array halen
            document.getElementById('button' + playerId + i).classList.remove('btn-success');
            document.getElementById('button' + playerId + i).classList.add('btn-secondary');
        }
    }
}
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
        case 3:
            document.getElementById("player" + playerId).mozPreservesPitch = false;
            document.getElementById("player" + playerId).playbackRate = playbackRate - 0.5;
            document.getElementById("player" + playerId).play();
            break;
    }
}

function reverter(playerId) {
    for (let i = 0; i < 8; i++) {
        if (document.getElementById('button' + playerId + i).classList.contains('btn-success')) {
            actieveMuziek.pop(actieveMuziek.indexOf(i)); // dit moet het nummer uit array halen
            document.getElementById('button' + playerId + i).classList.remove('btn-success');
            document.getElementById('button' + playerId + i).classList.add('btn-secondary');
        }
    }
}
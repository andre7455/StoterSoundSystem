function effects(playerId, command){
    switch (command){
        case 0:
            document.getElementById("player" + playerId).play();
            break;

        case 1:
            console.log(playerId + " got the command pauze");
            document.getElementById("player" + playerId).pause();
            break;
        case 2:
            document.getElementById("player" + playerId).loop = true;
            break;
        case 3:
            console.log("je zit in pitch");
            document.getElementById("player" + playerId).mozPreservesPitch = false;
            document.getElementById("player" + playerId).playbackRate = playbackRate - 0.5;
            document.getElementById("player" + playerId).play();
            break;
    }
}

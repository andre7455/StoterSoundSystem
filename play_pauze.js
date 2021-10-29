function playpauze(playerId, command){
    console.log("je zit in de playpauze file");
    switch (command){
        case 0:
            document.getElementById("player" + playerId).play();
            console.log("je hebt op play gedrukt");
            break;

        case 1:
            document.getElementById("player" + playerId).pause();
            console.log("je hebt op pauze gedrukt");
            break;
    }
}
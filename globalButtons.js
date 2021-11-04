
//determens what global button is pressed and sents a action to the funcions inside the indivitual players
function globalPlay(playercount, command) {
    for (let i = 0; i < playercount; i++) {
        if (command === 3) {
            randomsong(i);
        } else {
            effects(i, command);
        }
    }
}

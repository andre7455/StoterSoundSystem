//song selector and title changer
let muziekTitle = ['paino1', 'paino2', 'rhodes1', 'rhodes2', 'synth1', 'synth2', 'synth3', 'white_noise.mp3'];
function Selector(playerId, songId) {
    console.log('button' + playerId + songId);

    //change song title
    document.getElementById('Titlebox' + playerId).innerHTML = muziekTitle[songId];

    //change button to green
    if (document.getElementById('button' + playerId + songId).classList.contains('btn-secondary')) {
        document.getElementById('button' + playerId + songId).classList.remove('btn-secondary');
        document.getElementById('button' + playerId + songId).classList.add('btn-success');

        //turn on the music
        switch (songId) {
            case 0:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/piano1.mp3';
                document.getElementById("player" + playerId).play();
                break;

            case 1:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/piano2.mp3';
                document.getElementById("player" + playerId).play();
                break;
            case 2:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/rhodes1.mp3';
                document.getElementById("player" + playerId).play();
                break;
            case 3:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/rhodes2.mp3';
                document.getElementById("player" + playerId).play();
                break;
            case 4:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/synth1.mp3';
                document.getElementById("player" + playerId).play();
                break;
            case 5:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/synth2.mp3';
                document.getElementById("player" + playerId).play();
                break;
            case 6:
                console.log("je zit nu in de switch case" + playerId);
                document.getElementById("player" + playerId).src = 'audio/synth3.mp3';
                document.getElementById("player" + playerId).play();
                break;
        }

    } else {
        document.getElementById('button' + playerId + songId).classList.remove('btn-success');
        document.getElementById('button' + playerId + songId).classList.add('btn-secondary');
    }
}



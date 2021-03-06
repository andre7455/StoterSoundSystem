//song will be loaded and title will be changed
let muziekTitle = ['paino1', 'paino2', 'rhodes1', 'rhodes2', 'synth1', 'synth2', 'synth3', 'white_noise.mp3'];
//een array met de active nummers er in en active players
let actieveMuziek = [];

function Selector(playerId, songId) {
    //add song to array
    if (!actieveMuziek.includes(songId)) {
        reverter(playerId);
        actieveMuziek.push(songId);

        //change song title
        document.getElementById('Titlebox' + playerId).innerHTML = muziekTitle[songId];
        //change button to green
        if (document.getElementById('button' + playerId + songId).classList.contains('btn-secondary')) {
            document.getElementById('button' + playerId + songId).classList.remove('btn-secondary');
            document.getElementById('button' + playerId + songId).classList.add('btn-success');

            //turn on the music
            switch (songId) {
                case 0:
                    document.getElementById("player" + playerId).src = 'audio/piano1.mp3';
                    document.getElementById("player" + playerId).play();
                    break;
                case 1:
                    document.getElementById("player" + playerId).src = 'audio/piano2.mp3';
                    document.getElementById("player" + playerId).play();
                    break;
                case 2:
                    document.getElementById("player" + playerId).src = 'audio/rhodes1.mp3';
                    document.getElementById("player" + playerId).play();
                    break;

                case 3:
                    document.getElementById("player" + playerId).src = 'audio/rhodes2.mp3';
                    document.getElementById("player" + playerId).play();
                    break;

                case 4:
                    document.getElementById("player" + playerId).src = 'audio/synth1.mp3';
                    document.getElementById("player" + playerId).play();
                    break;

                case 5:
                    document.getElementById("player" + playerId).src = 'audio/synth2.mp3';
                    document.getElementById("player" + playerId).play();
                    break;

                case 6:
                    document.getElementById("player" + playerId).src = 'audio/synth3.mp3';
                    document.getElementById("player" + playerId).play();
                    break;

                case 7:
                    document.getElementById("player" + playerId).src = 'audio/white_noise.mp3';
                    document.getElementById("player" + playerId).play();
                    break;
            }
        } else {
            document.getElementById('button' + playerId + songId).classList.remove('btn-success');
            document.getElementById('button' + playerId + songId).classList.add('btn-secondary');
        }
    }
}

function randomsong(playerId) {
    //generate a random int that does not exist in the actievemuziek array and feed it in to the default selector
    do {
        var randomnumber = Math.floor(Math.random() * 8);
    } while (actieveMuziek.includes(randomnumber))
    console.log(randomnumber);
    //pushes song for playing
    Selector(playerId, randomnumber);
}



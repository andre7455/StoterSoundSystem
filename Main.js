

    //song selector and title changer
    function Selector(playerId, songId){
    let muziek = ['piano1', 'piano2', 'rhodes1', 'rodes2', 'synth1', 'synth2', 'white_noise' ];

    console.log('button' + playerId + songId);
    //change song title
    document.getElementById('Titlebox' + playerId).innerHTML = muziek[songId];

    //change button to green
        if(document.getElementById('button' + playerId + songId).classList.contains('btn-secondary')){
            document.getElementById('button' + playerId + songId).classList.remove('btn-secondary');
            document.getElementById('button' + playerId + songId).classList.add('btn-success');
        }
        else {
            document.getElementById('button' + playerId + songId).classList.remove('btn-success');
            document.getElementById('button' + playerId + songId).classList.add('btn-secondary');
        }

        /*
        var x = document.createElement("AUDIO");
        if (x.canPlayType("audio/mp3")) {
            x.setAttribute("src","audio/piano1.mp3");
        }
        x.setAttribute("controls", "controls");
        document.body.appendChild(x);
        */
    }
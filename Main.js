

    //song selector and title changer
    function Selector(playerId, songId){
    let muziek = ['piano1', 'piano2', 'rhodes1', 'rodes2', 'synth1', 'synth2', 'white_noise' ];

    console.log('button' + playerId + songId);
    //change song title
    document.getElementById('Titlebox' + playerId).innerHTML = muziek[songId];

    //cahnge button to green
    document.getElementById('button' + playerId + songId).classList.remove('btn-secondary');
    document.getElementById('button' + playerId + songId).classList.add('btn-success');




    console.log('button' + playerId + songId);
    }
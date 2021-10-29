function globalPlay(playercount, command){
    for($i = 0; $i <=  playercount; $i++){
        if(command == 3){
            random($i);
        }
        else {
            effects($i, command);
            console.log("het command is " + command);
        }

    }
}

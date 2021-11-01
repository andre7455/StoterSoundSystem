<?php
include 'head.php';


//bug fix
$playercount = (int) $_GET['player'];


//print $playercount + "is de playercount";

//$i is de player de
// nummers zijn player nummers

echo '<div class="container"><div class="row">';
for ($i = 0; $i <= $playercount; $i++) {
    echo '
<div class="border col-3 m-1"> <!-- player -->
    <div class="border row">
            <a id="Titlebox'. $i .'">Music player</a>
        </div>
        <div class="border row" > <!-- volume slider -->
            <a>volume slider</a>
            <input type="range" class="form-range m-2">
        </div>
        <div class="border row"> <!-- play/pauze/loop/random -->
            <button onclick="effects(' . $i . ', 0)" type="button" class="w-25 btn-secondary">play</button>
            <button onclick="effects(' . $i . ', 1)" type="button" class="w-25 btn-secondary">pauze</button>
            <button onclick="effects(' . $i . ', 2)" type="button" class="w-25 btn-secondary">loop</button>
            <button onclick="random('.$i .')" type="button" class="w-25 btn-secondary">random</button>
        </div>
        <div> <!-- music selection box -->
            <ul>
                <button id="button' . $i . '0" class="btn btn-secondary" onclick="Selector(' . $i . ', 0)">piano1.mp3</button>
                <button id="button' . $i . '1" class="btn btn-secondary" onclick="Selector(' . $i . ', 1)">piano2.mp3</button>
                <button id="button' . $i . '2" class="btn btn-secondary" onclick="Selector(' . $i . ', 2)">rhodes1.mp3</button>
                <button id="button' . $i . '3" class="btn btn-secondary" onclick="Selector(' . $i . ', 3)">rhodes2.mp3</button>
                <button id="button' . $i . '4" class="btn btn-secondary" onclick="Selector(' . $i . ', 4)">synth1.mp3</button>
                <button id="button' . $i . '5" class="btn btn-secondary" onclick="Selector(' . $i . ', 5)">synth2.mp3</button>
                <button id="button' . $i . '6" class="btn btn-secondary" onclick="Selector(' . $i . ', 6)">synth3.mp3</button>
                <button id="button' . $i . '7" class="btn btn-secondary" onclick="Selector(' . $i . ', 7)">white_noice.mp3</button>
            </ul>
            
            <audio id="player' . $i . '" autoplay></audio>
        </div>
    </div>
    ';
}
//$playercount = intval($playercount);


echo '</div></div>

<div class="fixed-top container">
    <a class="btn btn-warning" href="panel.php?player='. ($playercount + 1) .'">add player</a>
    <button class="btn btn-warning" onclick="globalPlay('. $i .' , 0)">play all</button>
    <button class="btn btn-warning" onclick="globalPlay('. $i .' , 1)">pauze all</button>
    <button class="btn btn-warning" onclick="globalPlay('. $i .' , 2)">loop all</button>
    <button class="btn btn-warning" onclick="globalPlay('. $i .' , 3)">random all</button>
</div>
';
?>


</body>
</html>
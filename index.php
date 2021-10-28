<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
    <script src="Main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
            crossorigin="anonymous"></script>
    <script src="Main.js"></script>
    <title>Stoter Sound System</title>
</head>
<body>

<div class="border w-100 mt-5"> <!-- pannel -->


    <?php
    $playercount = htmlspecialchars($_GET['player']);
    if ($_GET['player'] == null){
        $playercount = htmlspecialchars($_GET['player']);
    }


    //print $playercount + "is de playercount";

  //
    //$i is de player de
    // nummers zijn player nummers

    echo '<div class="container">
          <div class="row";">';
    for ($i = 0; $i <= $playercount; $i++) {
        echo '
<div class="border col-3 m-1" style="margin-left: 0%"> <!-- player -->
    <div class="border row">
            <a id="Titlebox' . $i . '">Music player</a>
        </div>
        <div class="border row" > <!-- volume slider -->
            <a>volume slider</a>
            <input type="range" class="form-range m-2">
        </div>
        <div class="border row"> <!-- play/pauze/loop/random -->
            <button type="button" class="w-25 btn-secondary">play</button>
            <button type="button" class="w-25 btn-secondary">pauze</button>
            <button type="button" class="w-25 btn-secondary">loop</button>
            <button type="button" class="w-25 btn-secondary">random</button>
        </div>
        <div class="border row"> <!-- pitch progress -->
            <button type="button" class="w-25 btn-secondary"> pitch</button>
            <div class="border w-75">progression bar</div>
        </div>
        <div> <!-- music selection box -->
            <ul>
                <button id="button'. $i .'0" class="btn btn-secondary" onclick="Selector('. $i .', 0)">piano1.mp3</button>
                <button id="button'. $i .'1" class="btn btn-secondary" onclick="Selector('. $i .', 1)">piano2.mp3</button>
                <button id="button'. $i .'2" class="btn btn-secondary" onclick="Selector('. $i .', 2)">rhodes1.mp3</button>
                <button id="button'. $i .'3" class="btn btn-secondary" onclick="Selector('. $i .', 3)">rhodes2.mp3</button>
                <button id="button'. $i .'4" class="btn btn-secondary" onclick="Selector('. $i .', 4)">synth1.mp3</button>
                <button id="button'. $i .'5" class="btn btn-secondary" onclick="Selector('. $i .', 5)">synth2.mp3</button>
                <button id="button'. $i .'6" class="btn btn-secondary" onclick="Selector('. $i .', 6)">white_noise.mp3</button>
            </ul>
        </div>
    </div>
    ';
    }
    echo '</div></div>';
    ?>
 <a href="index.php?player=<?php echo $playercount + 1 ?>" class="btn btn-warning fixed-top">add player</a>
</div>
</body>

</html>
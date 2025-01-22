function toggleMusic() {

    var music = document.getElementById('background-music');

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}
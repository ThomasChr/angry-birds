let canvas = document.getElementById('canvas');

let angryBirds = new Game(canvas);

angryBirds.init();
// angryBirds.playSound();
angryBirds.mainLoop();

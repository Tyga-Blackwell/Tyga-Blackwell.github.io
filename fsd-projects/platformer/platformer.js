$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(50, 650, 100, 15, "red");
   createPlatform(450, 640, 200, 30, "green");
   createPlatform(1350, 550, 200, 50, "red");
   createPlatform(800, 650, 400, 20, "yellow");
   createPlatform(1200, 100, 12, 200, "green");
   createPlatform(1350, 300, 50, 50, "red");
   createPlatform(90, 420, 1200, 10, "purple");
   createPlatform(90, 0, 10, 420, "yellow");

    // TODO 3 - Create Collectables
   createCollectable("diamond", 1210, 90);
   createCollectable("diamond", 100, 390);
   createCollectable("diamond", 300, 500); 
    // TODO 4 - Create Cannons
    createCannon("left", 650, 50);
    createCannon("top", 800, 750);
    createCannon("top", 390, 750);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

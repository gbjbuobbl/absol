status= "";

function preload() {
    loadImage("toy.jpg");
}

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects"
  }
  
  function modelLoaded(){
        console.log("model loaded");
        status = true;
        objectDetector.detect(img , gotResult);
  }

  function gotResult(error,results) {
    if(error) {
      console.log(error);
    }
    console.log(results);
    object = results;
  }
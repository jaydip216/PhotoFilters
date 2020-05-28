var img=null;
var imgcnv;
function uploadimage() {
    imgcnv=document.getElementById("can");
    var finput=document.getElementById("fimg");
    img=new SimpleImage(finput);
    img.drawTo(imgcnv);
}
function makeGray() {
    if(img==null){
        alert('Upload image!');
    }
    var grayimg=new SimpleImage(img);
    for(var pixel of grayimg.values())
    {
        var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setGreen(avg);
        pixel.setRed(avg);
        pixel.setBlue(avg);
    }
    grayimg.drawTo(imgcnv);
}
function makeRed() {
    if(img==null){
        alert('Upload image!');
    }
    var redimg=new SimpleImage(img);
    for(var pixel of redimg.values())
    {
        pixel.setRed(255);
    }
    redimg.drawTo(imgcnv);
}
function makeGreen() {
    if(img==null){
        alert('Upload image!');
    }
    var greenimg=new SimpleImage(img);
    for(var pixel of greenimg.values())
    {
        pixel.setGreen(255);
    }
    greenimg.drawTo(imgcnv);
}
function makeBlue() {
    if(img==null){
        alert('Upload image!');
    }
    var blueimg=new SimpleImage(img);
    for(var pixel of blueimg.values())
    {
        pixel.setBlue(255);
    }
    blueimg.drawTo(imgcnv);
}
function filterRainbow() {
  var rimg=new SimpleImage(img);
    var height = rimg.getHeight();
  for (var pixel of rimg.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 2 / 7) {
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
    rimg.drawTo(imgcnv);
}
function original() {
    img.drawTo(imgcnv);
}
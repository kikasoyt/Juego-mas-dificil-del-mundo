var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bf693fd2-c9d6-400d-92cc-25229a92ab5b","2f8cd77f-4c97-4a57-9612-e0084131d923","c84ccca6-19ef-4b2e-bfcb-4c3b9a3909ad"],"propsByKey":{"bf693fd2-c9d6-400d-92cc-25229a92ab5b":{"name":"fondo","sourceUrl":"assets/api/v1/animation-library/gamelab/v6mZ9WuidWXvzNRGR3s7bJUKPzsOaL6u/category_backgrounds/gradient_12.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"v6mZ9WuidWXvzNRGR3s7bJUKPzsOaL6u","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v6mZ9WuidWXvzNRGR3s7bJUKPzsOaL6u/category_backgrounds/gradient_12.png"},"2f8cd77f-4c97-4a57-9612-e0084131d923":{"name":"malo","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"c84ccca6-19ef-4b2e-bfcb-4c3b9a3909ad":{"name":"bueno1","sourceUrl":"assets/api/v1/animation-library/gamelab/IEPDSFcPYgnHC3feVKlMCwTveHusiLsw/category_robots/robot_18.png","frameSize":{"x":396,"y":364},"frameCount":1,"looping":true,"frameDelay":2,"version":"IEPDSFcPYgnHC3feVKlMCwTveHusiLsw","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":364},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IEPDSFcPYgnHC3feVKlMCwTveHusiLsw/category_robots/robot_18.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fondo = createSprite(200, 200);
fondo.setAnimation("fondo");

var wall1 = createSprite(190, 120, 250, 3);
var wall2 = createSprite(190, 260, 250, 3);
var wall3 = createSprite(67, 145, 3, 50);
var wall4 = createSprite(67, 235, 3, 50);
var wall5 = createSprite(314, 235, 3, 50);
var wall6 = createSprite(314, 145, 3, 50);
var wall7 = createSprite(41, 170,50, 3);
var wall8 = createSprite(41, 212,50, 3);
var wall9 = createSprite(337, 170,50, 3);
var wall10 = createSprite(337, 212,50, 3);
var wall11 = createSprite(18, 190, 3, 40);
var wall12 = createSprite(360, 190, 3, 40);

var ding = createSprite(40,190,10,10);
ding.setAnimation("bueno1");
ding.scale=0.05;

var ding2 = createSprite(330,190,10,10);
ding.setAnimation("bueno1");
ding.scale=0.05;

var dong1 = createSprite(100,130,10,10);
dong1.setAnimation("malo");
dong1.scale=0.15;

var dong2 = createSprite(215,130, 10, 10);
dong2.setAnimation("malo");
dong2.scale=0.15;

var dong3 = createSprite(165,250,10, 10);
dong3.setAnimation("malo");
dong3.scale=0.15;

var dong4 = createSprite(270,250,10, 10);
dong4.setAnimation("malo");
dong4.scale=0.15;

dong1.velocityY=6;
dong2.velocityY=6;
dong3.velocityY=-6;
dong4.velocityY=-6;



var death = 0;

function draw() 
{
  background("white");
  
  
  
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
  if(keyDown("right")){
    ding.x=ding.x+4;
  }

if(keyDown("left")){
    ding.x=ding.x-4;
  }

if(ding.isTouching(wall11)||
ding.isTouching(dong1)||
ding.isTouching(dong2)||
ding.isTouching(dong3)||
ding.isTouching(dong4)
){
  ding.x=40;
  ding.y=190;
  death = death+1;
}

 
  
  
  drawSprites();
  
  fill("black");
  text("Muertes = "+ death, 200, 100);
  
  if(ding.isTouching(ding2)) {
   fill("black");
  text("Felicidades", 200, 200);
 }
 
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

import { ctx } from "./ctx.js";
let c = ctx;
export const player = {
  x: window.innerWidth / 2 - 20,
  y: window.innerHeight - 100 - 80,
  width: 70,
  height: 60,
  jump: false,
  onair: false,
  jumps: 10,
  jumpUnit: 3,
  leftPress: false,
  rightPress: false,
  gravity: 0.5,
  spd: 6,
  velX: 0,
  velY: 0,
};
let I = 0;
let D = 0;
let rightPress = false;
let leftPress = false;
let leftImage = false;
let rightImage = false;
let jump = function () {
  if (leftPress === true) {
    if (player.velX > -player.spd) {
      player.velX -= 1;
    }
  } else if (rightPress === true) {
    if (player.velX < player.spd) {
      player.velX += 1;
    }
  }
  if (player.jumps > 0 && player.onair) {
    player.y -= player.jumpUnit;
    player.jumps -= player.jumpUnit;
  }
  if (player.jumps <= 0 && player.jumps > -120 && player.onair) {
    player.y += player.jumpUnit;
    player.jumps -= player.jumpUnit;
  }
  if (player.jumps <= -120 && player.onair) {
    player.onair = false;
    player.jump = false;
    rightPress = false;
    leftPress = false;
  }
};
export function movePlayer(players, noEyePlayer, jumpPlayer, audioPlay) {
  if (player.leftPress === true) {
    if (D >= 3 && player.jump == true) {
      D = 0;
      console.log("this left");
      leftPress = true;
      rightPress = false;
    }
    D++;
    if (player.velX > -player.spd) {
      player.velX -= 4;
    }
    leftImage = true;
    rightImage = false;
    player.leftPress = false;
  } else if (player.rightPress === true) {
    if (I >= 3 && player.jump === true) {
      I = 0;
      console.log("this right");
      rightPress = true;
      leftPress = false;
    }
    I++;
    if (player.velX < player.spd) {
      player.velX += 4;
    }
    rightImage = true;
    leftImage = false;
    player.rightPress = false;
  } else if (player.jump === true) {
    jump();
  }
  player.velX *= 0.88;
  player.x += player.velX;
}
let i = 0;
export function drawPlayer(
  eyePlayer,
  leftImages,
  rightImages,
  jumpLeftImage,
  jumpRigthImage
) {
  c.save();
  c.fillStyle = "black";
  if (rightImage) {
    c.drawImage(rightImages, player.x, player.y, player.width, player.height);
  } else if (leftImage) {
    c.drawImage(leftImages, player.x, player.y, player.width, player.height);
  } else if (leftImage && player.onair) {
    c.drawImage(jumpLeftImage, player.x, player.y, player.width, player.height);
  } else if (rightImage && player.onair) {
    c.drawImage(
      jumpRigthImage,
      player.x,
      player.y,
      player.width,
      player.height
    );
  } else {
    c.drawImage(eyePlayer, player.x, player.y, player.width, player.height);
  }
  c.restore();
  i++;
}

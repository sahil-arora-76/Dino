import { tileList, updateList } from "./tile.js";
import { player } from "./player.js";
import { ctx, game } from "./ctx.js";
import { brickList, foodList } from "./food.js";
let notilelist = [];
let c = ctx;
updateList();
export function drawBack(background, fire) {
    c.save();
    c.drawImage(background, 0, 0, window.innerWidth, window.innerHeight);
    c.drawImage(fire, 0, window.innerHeight - 120 + 20, window.innerWidth, 100);
    c.fillStyle = "white";
    c.font = "30px calibri";
    c.fillText("SCORE \n " + game.score, 50, 40, 100);
    c.fillText("LIFES " + game.lives, 200, 40, 100);
    c.fillText("LEVEL " + game.level, 350, 40, 100);
    c.restore();
}
const eatSound = new Audio("sound/eat.mp3");
export function food_player_collsion(audios) {
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i].x < player.x + player.width - 10 &&
            player.x < foodList[i].x + player.width - 10 &&
            foodList[i].y < player.y + player.height - 10 &&
            player.y < foodList[i].y + player.height - 10) {
            game.score++;
            if (audios === true) {
                eatSound.play();
                eatSound.muted = false;
            }
            foodList.splice(i, 1);
        }
    }
}
export function food_tile_collision() {
    for (let i = 0; i < foodList.length; i++) {
        for (let j = 0; j < tileList.length; j++) {
            if (tileList[j].x <= foodList[i].x + foodList[i].width &&
                foodList[i].x <= tileList[j].x + tileList[j].width &&
                foodList[i].y <= tileList[j].y + tileList[j].height &&
                tileList[j].y <= foodList[i].y + foodList[i].height) {
                tileList.splice(j, 1);
                break;
            }
        }
    }
}
export function catcher_tile_collision() {
    for (const el of tileList) {
        if (player.onair == false) {
            if (player.x <= (el.x - 35) + el.width &&
                (el.x + 35) <= player.x + player.width && player.y + player.height >= el.y) {
                return true;
            }
        }
        else {
            return true;
        }
    }
}
export function fruit_player_collision() {
    for (let i = 0; i < brickList.length; i++) {
        if (brickList[i].x < player.x + player.width - 10 &&
            player.x < brickList[i].x + player.width - 10 &&
            brickList[i].y < player.y + player.height - 10 &&
            player.y < brickList[i].y + player.height - 10) {
            brickList.splice(i, 1);
            return true;
        }
    }
}

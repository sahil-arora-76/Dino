import { ctx } from "./ctx.js";
export let gameOver = false;
let c = ctx;
let foodGone = false;
export let score = 0;
export const food = {
    x: Math.floor(Math.random() * window.innerWidth - 35),
    y: 0,
    width: 40,
    height: 50,
    speed: 3,
};
let n = [1, 2];
export const foodList = [food];
export let brickList = [];
export function drawFood(foods, bricks) {
    for (let i = 0; i < foodList.length; i++) {
        foodList[i].y += food.speed;
        c.save();
        c.drawImage(foods, foodList[i].x, foodList[i].y, foodList[i].width, foodList[i].height);
        c.restore();
    }
    if (brickList.length > 0) {
        for (const el of brickList) {
            el.y += 1;
            c.save();
            c.drawImage(bricks, el.x, el.y, el.width, el.height);
            c.restore();
        }
    }
}

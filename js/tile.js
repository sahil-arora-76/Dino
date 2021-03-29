import { ctx } from "./ctx.js";
let c = ctx;
export const tile = {
    x: 0,
    y: window.innerHeight - 160,
    width: window.innerWidth / 10 + 40,
    height: 70,
};
export let tileList = [];
export function updateList() {
    for (let i = 0; i <= 19; i++) {
        tileList.push({ x: i * innerWidth / 20, y: window.innerHeight - 160, width: window.innerWidth / 20 + 10, height: tile.height });
    }
}
let i = 0;
export function drawList(tile, lava, lava1) {
    for (const el of tileList) {
        if (el === "marked") {
            continue;
        }
        c.save();
        c.fillStyle = "#6F00FF";
        c.drawImage(tile, el.x, el.y, el.width, el.height);
        c.restore();
    }
    if (i < 100) {
        c.drawImage(lava, 0, window.innerHeight - 120, window.innerWidth, 100);
    }
    else if (i > 100 && i < 200) {
        c.drawImage(lava1, 0, window.innerHeight - 120, window.innerWidth, 100);
    }
    else if (i >= 200) {
        i = 0;
    }
    c.save();
    c.restore();
    i++;
}

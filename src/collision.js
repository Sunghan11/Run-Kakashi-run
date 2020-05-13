// export function collision(obj1, kakashi, distance) {
//     let rightOfObj1 = obj1.position.x + obj1.spriteWidth;
//     let leftOfObj1 = obj1.position.x;

//     let rightOfKakashi = kakashi.position.x + kakashi.spriteWidth;
//     let leftOfKakashi = kakashi.position.x;

//     if (leftOfKakashi < rightOfObj1 + distance &&
//         rightOfKakashi > leftOfObj1 - distance ) {
//         return true;
//     } else {
//         return false;
//     }
// }

export function collision(object, kakashi, distance) {
    let rightOfObject = object.position.x + object.spriteWidth;
    let leftOfObject = object.position.x;
    let topOfObject = object.position.y;
    let bottomOfObject = object.position.y + object.spriteHeight;

    let rightOfKakashi = kakashi.position.x + kakashi.spriteWidth;
    let leftOfKakashi = kakashi.position.x;
    let topOfKakashi = kakashi.position.y;
    let bottomOfKakashi = kakashi.position.y + kakashi.spriteHeight;

    if (leftOfKakashi > rightOfObject || rightOfKakashi < leftOfObject) {
        return false;
    }
    if (topOfKakashi < bottomOfObject || bottomOfKakashi > topOfObject) {
        return false;
    }
    return true;
}

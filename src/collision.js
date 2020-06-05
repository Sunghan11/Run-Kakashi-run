// export function collision(object, kakashi, distance) {
//     let rightOfObject = object.position.x + object.OBJECT_WIDTH;
//     let leftOfObject = object.position.x;
//     let topOfObject = object.position.y;
//     let bottomOfObject = object.position.y + object.OBJECT_HEIGHT;

//     let rightOfKakashi = kakashi.position.x + kakashi.KAKASHI_WIDTH;
//     let leftOfKakashi = kakashi.position.x;
//     let topOfKakashi = kakashi.position.y;
//     let bottomOfKakashi = kakashi.position.y + kakashi.KAKASHI_HEIGHT;

//     if (leftOfKakashi > rightOfObject || rightOfKakashi < leftOfObject) {
//         return false;
//     }
//     if (topOfKakashi < bottomOfObject || bottomOfKakashi > topOfObject) {
//         return false;
//     }
//     return true;
// }

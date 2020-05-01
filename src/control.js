export default class Control {
    constructor(kakashi) {
        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 32:
                    kakashi.jump();
                    break;
                case 38:
                    kakashi.jump();
                    break;
                case 87:
                    kakashi.jump();
                    break;
                case 17:
                    kakashi.slide();
                    break;
                case 83:
                    kakashi.slide();
                    break;
                case 40:
                    kakashi.slide();
                    break;
            }
        })
    }
}
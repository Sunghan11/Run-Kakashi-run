const closeMenu = () => {
    const menu = document.getElementById('menu');
    menu.className = 'menu close';
}
export default class Menu = {
    
    menuButtons(game) {
        const startButton = document.getElementById('start-button');



        startButton.addEventListener('click', e => {
            closeMenu();
            setTimeout(() => game.start('start'), 150);
        });
    }
}
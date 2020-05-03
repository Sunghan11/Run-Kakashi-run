const closeMenu = () => {
    const menu = document.getElementsByClassName('menu')[0];
    menu.className = 'menu close';
};

export const Menu = {
    menuButtons(RunKakashiRun) {
        const play = document.getElementById('play-button');

        play.addEventListener('click', e => {
            closeMenu();

            setTimeout(() => RunKakashiRun.start('play'), 200);
        }
        );
    },
};

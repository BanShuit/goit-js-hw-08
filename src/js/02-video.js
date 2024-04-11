import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    const player = new Vimeo('vimeo-player');

    const saveTimeToLocalStorage = throttle(function (currentTime) {
        localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000);

    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }

    player.on('timeupdate', function (data) {
        const currentTime = data.seconds;
        saveTimeToLocalStorage(currentTime);
    });
});

import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
    // console.dir(data.seconds)
    const timeVideo = data.seconds;

    localStorage.setItem('videoplayer-current-time', timeVideo)
};

player.on('timeupdate', throttle(onPlay, 1000));

const getSecond = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getSecond);

    const video = document.getElementById('video');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none';
    });

    video.addEventListener('pause', function() {
        video.poster = "./images/videos-img/video-img.png";
        playButton.style.display = 'block';
    });

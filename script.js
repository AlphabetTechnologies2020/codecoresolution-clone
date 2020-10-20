//================================================== enable and disable about bar ==================================================

function aboutOneActive() {
    document.getElementById('aboutOne').style.background = 'var(--second)';
    document.getElementById('aboutOneImage').src = 'img/our-mission-white.svg';
    document.getElementById('aboutOneTitle').style.color = '#FFF';
    document.getElementById('aboutOneText').style.color = '#FFF';
}

function aboutOneDisable() {
    document.getElementById('aboutOne').style.background = '';
    document.getElementById('aboutOneImage').src = 'img/our-mission.svg';
    document.getElementById('aboutOneTitle').style.color = '';
    document.getElementById('aboutOneText').style.color = '';
}

const navToggle = document.querySelector(".nav-toggle")
const closeBtn = document.querySelector(".close-btn")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    return toggle()
   
})
// closeBtn.addEventListener("click", function(){
// return close()
//  })


// links.addEventListener("click", function(){
//    return toggle()
 
// })


function toggle(){
    links.classList.toggle("show-links")
    // navToggle.style.display = "none"
    // closeBtn.style.display = "block"
}


const playerButtonOne = document.querySelector('.player-button1'),
      activeMusicOne = document.querySelector('.song-image'),
      playerButtonTwo = document.querySelector('.player-button2'),
      activeMusicTwo = document.querySelector('.song-image2'),
      playerButtonThree = document.querySelector('.player-button3'),
      activeMusicThree = document.querySelector('.song-image3'),
      audioOne = document.querySelector('.audio1'),
      audioTwo = document.querySelector('.audio2'),
      audioThree = document.querySelector('.audio3'),
      timelineOne = document.querySelector('.timeline1'),
      timelineTwo = document.querySelector('.timeline2'),
      timelineThree = document.querySelector('.timeline3'),
      soundButtonOne = document.querySelector('.sound-button1'),
      soundButtonTwo= document.querySelector('.sound-button2'),
      soundButtonThree = document.querySelector('.sound-button3'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `,
      soundIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
      muteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;

function toggleAudioOne () {
  if (audioOne.paused) {
    audioOne.play();
    playerButtonOne.innerHTML = pauseIcon;
  } else {
    audioOne.pause();
    playerButtonOne.innerHTML = playIcon;
  }
}

function toggleAudioTwo () {
  if (audioTwo.paused) {
    audioTwo.play();
    playerButtonTwo.innerHTML = pauseIcon;
  } else {
    audioTwo.pause();
    playerButtonTwo.innerHTML = playIcon;
  }
}
function toggleAudioThree () {
  if (audioThree.paused) {
    audioThree.play();
    playerButtonThree.innerHTML = pauseIcon;
  } else {
    audioThree.pause();
    playerButtonThree.innerHTML = playIcon;
  }
}

playerButtonOne.addEventListener('click', toggleAudioOne);
playerButtonOne.addEventListener('click', function(){
activeMusicOne.classList.toggle("highlight");
});
playerButtonTwo.addEventListener('click', toggleAudioTwo);
playerButtonTwo.addEventListener('click', function(){
  activeMusicTwo.classList.toggle("highlight");
  });
playerButtonThree.addEventListener('click', toggleAudioThree);
playerButtonThree.addEventListener('click', function(){
  activeMusicThree.classList.toggle("highlight");
  });
function changeTimelinePositionOne () {
  const percentagePosition = (100*audioOne.currentTime) / audioOne.duration;
  timelineOne.style.backgroundSize = `${percentagePosition}% 100%`;
  timelineOne.value = percentagePosition;
}
function changeTimelinePositionTwo () {
  const percentagePosition = (100*audioTwo.currentTime) / audioTwo.duration;
  timelineTwo.style.backgroundSize = `${percentagePosition}% 100%`;
  timelineTwo.value = percentagePosition;
}
function changeTimelinePositionThree () {
  const percentagePosition = (100*audioThree.currentTime) / audioThree.duration;
  timelineThree.style.backgroundSize = `${percentagePosition}% 100%`;
  timelineThree.value = percentagePosition;
}

audioOne.ontimeupdate = changeTimelinePositionOne;
audioTwo.ontimeupdate = changeTimelinePositionTwo;
audioThree.ontimeupdate = changeTimelinePositionThree;

function audioEndedOne () {
  playerButtonOne.innerHTML = playIcon;
}
function audioEndedTwo () {
  playerButtonTwo.innerHTML = playIcon;
}
function audioEndedThree () {
  playerButtonThree.innerHTML = playIcon;
}

audioOne.onended = audioEndedOne;

audioTwo.onended = audioEndedTwo;

audioThree.onended = audioEndedThree;

function changeSeekOne () {
  const time = (timelineOne.value * audioOne.duration) / 100;
  audioOne.currentTime = time;
}
function changeSeekTwo () {
  const time = (timelineTwo.value * audioTwo.duration) / 100;
  audioTwo.currentTime = time;
}
function changeSeekThree () {
  const time = (timelineThree.value * audioThree.duration) / 100;
  audioThree.currentTime = time;
}

timelineOne.addEventListener('change', changeSeekOne);
timelineTwo.addEventListener('change', changeSeekTwo);
timelineThree.addEventListener('change', changeSeekThree);













function toggleSoundOne () {
  audioOne.muted = !audioOne.muted;
  soundButtonOne.innerHTML = audioOne.muted ? muteIcon : soundIcon;
}
function toggleSoundTwo () {
  audioTwo.muted = !audioTwo.muted;
  soundButtonTwo.innerHTML = audioTwo.muted ? muteIcon : soundIcon;
}
function toggleSoundThree () {
  audioThree.muted = !audioThree.muted;
  soundButtonThree.innerHTML = audioThree.muted ? muteIcon : soundIcon;
}

soundButtonOne.addEventListener('click', toggleSoundOne);
soundButtonTwo.addEventListener('click', toggleSoundTwo);
soundButtonThree.addEventListener('click', toggleSoundThree);
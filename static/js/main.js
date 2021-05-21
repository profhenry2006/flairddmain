var audio, clicksound, hoversound, bubble1, bubble2, bubble3, mutebtn;
function initAudioPlayer(){
  audio = new Audio();
  audio.src = ("plane.ogg", "plane.mp3");
  audio.loop = false;
  audio.volume = 0.7;
  audio.play();

  clicksound = new Audio();
  clicksound.src = ("click.ogg", "click.mp3");
  clicksound.loop = false;
  clicksound.volume = 0.7;
  clicksound.play();

  hoversound = new Audio();
  hoversound.src = ("hover.ogg", "hover.mp3");
  hoversound.loop = false;
  hoversound.volume = 0.7;
  hoversound.play();

  bubble1 = new Audio();
  bubble1.src = ("bubble1.ogg", "bubble1.mp3");
  bubble1.loop = false;
  bubble1.volume = 0.7;
  bubble1.play();

  bubble2 = new Audio();
  bubble2.src = ("bubble2.ogg", "bubble2.mp3");
  bubble2.loop = false;
  bubble2.volume = 0.7;
  bubble2.play();

  bubble3 = new Audio();
  bubble3.src = ("bubble3.ogg", "bubble3.mp3");
  bubble3.loop = false;
  bubble3.volume = 0.7;
  bubble3.play();

      document.addEventListener("click", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('clk') ){
              clicksound.play()
          }
      });

      document.addEventListener("mouseover", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('hvr') ){
              hoversound.play()
          }
      });

      document.addEventListener("mouseover", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('planesound') ){
              audio.play()
          }
      });

      document.addEventListener("mouseover", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('bub1') ){
              bubble1.play()
          }
      }); 

      document.addEventListener("mouseover", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('bub2') ){
              bubble2.play()
          }
      }); 

      document.addEventListener("mouseover", ( event ) => {
          const hoverElement = event.target;
          if( hoverElement.classList.contains('bub3') ){
              bubble3.play()
          }
      });  

  mutebtn = document.getElementById("mutebtn");

  mutebtn.addEventListener("click", mute);

  mutebtn.addEventListener("click", muteclick);

  mutebtn.addEventListener("click", mutehover);

  mutebtn.addEventListener("click", mutebub1);

  mutebtn.addEventListener("click", mutebub2);

  mutebtn.addEventListener("click", mutebub3);

  function mute(){
    if(audio.muted){
        audio.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        audio.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

  function muteclick(){
    if(clicksound.muted){
        clicksound.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        clicksound.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

  function mutehover(){
    if(hoversound.muted){
        hoversound.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        hoversound.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

  function mutebub1(){
    if(bubble1.muted){
        bubble1.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        bubble1.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

  function mutebub2(){
    if(bubble2.muted){
        bubble2.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        bubble2.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

  function mutebub3(){
    if(bubble3.muted){
        bubble3.muted = false;
        mutebtn.style.background = "url(images/speaker.png) no-repeat";
      } else {
        bubble3.muted = true;
        mutebtn.style.background = "url(images/muted.png) no-repeat";
      }
  }

}
window.addEventListener("load", initAudioPlayer);


function toggleOverlay () {
    var menumainoverlay = document.querySelector("body");
    menumainoverlay.classList.toggle('hide-overlay');

      document.addEventListener("click", ( event ) => {
          const clickElement = event.target;
          if( clickElement.classList.contains('hide-menu') ){
              toggleOverlay ()
          }
      }); 

}
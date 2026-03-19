
function hideEnvelope(){
    const envelope = document.getElementById("front-envelope");
    const invite = document.getElementById("open-invite");
    const oEnvelope = document.getElementById("open-envelope");
    const cEnvelope = document.getElementById("close-envelope");
    const iLetter = document.getElementById("invite-letter");
    const attire = document.getElementById("attire");
    
   document.body.style.backgroundImage = "url('images/linen.jpg')"
    envelope.style.opacity = "0";
    envelope.style.display = "none";
    invite.style.display = "flex";
    const transitionDuration = 300; // Duration in milliseconds (1 second)

setTimeout(() => {
   oEnvelope.style.visibility ="visible";
    oEnvelope.style.opacity = "1.0"
    setTimeout(() => {
       cEnvelope.style.visibility ="visible";
    cEnvelope.style.opacity = "1.0"
        setTimeout(() => {
       iLetter.style.visibility ="visible";
    iLetter.style.opacity = "1.0"
            setTimeout(() => {
       attire.style.visibility ="visible";
    attire.style.opacity = "1.0"
}, 300);
}, 300);
}, 300);
}, transitionDuration);

}

function zoomInvite(){
     const iLetter = document.getElementById("invite-letter");
    if (iLetter.classList.contains('scale')){
       iLetter.classList.remove('scale')
        iLetter.style.zIndex = "0"; 
    } else{
         iLetter.classList.add('scale')
         iLetter.style.zIndex = "10"; 
    }
}
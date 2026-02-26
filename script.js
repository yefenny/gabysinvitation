
function hideEnvelope(){
    const envelope = document.getElementById("front-envelope");
    const invite = document.getElementById("open-invite");
    const oEnvelope = document.getElementById("open-envelope");
    const cEnvelope = document.getElementById("close-envelope");
    const iLetter = document.getElementById("invite-letter");

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
}, 300);
}, 300);
}, transitionDuration);

}
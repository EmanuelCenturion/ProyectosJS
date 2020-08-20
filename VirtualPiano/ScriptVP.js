document.addEventListener("keydown",function (event){
    switch (event.code){
        case "KeyA":
            let audioA = new Audio("whiteKeys/A.mp3");
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("whiteKeys/S.mp3");
            audioS.play();
            break;
        case "KeyD":
            let audioD = new Audio("whiteKeys/D.mp3");
            audioD.play();
            break;
        case "KeyF":
            let audioF = new Audio("whiteKeys/F.mp3");
            audioF.play();
            break;
        case "KeyG":
            let audioG = new Audio("whiteKeys/G.mp3");
            audioG.play();
            break;
        case "KeyH":
            let audioH = new Audio("whiteKeys/H.mp3");
            audioH.play();
            break;
        case "KeyJ":
            let audioJ = new Audio("whiteKeys/J.mp3");
            audioJ.play();
            break;
        default:
            console.log("warning: wrong key");
            break;
    }
});


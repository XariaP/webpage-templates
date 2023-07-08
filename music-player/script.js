var lastSelected = 0;

function selectItem(albumi){
    document.getElementsByClassName("block-item")[2 + lastSelected].setAttribute("id", "");
    document.getElementsByClassName("block-item")[2 + albumi].setAttribute("id", "selected");
    lastSelected = albumi;
    
    let num = parseInt(albumi) + 1
    document.getElementById("title").innerHTML = "Album " + num;
    let picIndex = parseInt(albumi) + 1;
    document.getElementById("photo").setAttribute("src", "./images/pic" + picIndex + ".jpg");
}

function selectTrack(albumi, tracki){
    let num = parseInt(tracki) + 1
    document.getElementById("track-name").innerText = "Track #" + num;
}
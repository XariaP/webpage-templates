var circle1 = "<div class='circle red'></div>";
var circle2 = "<div class='circle purple'></div>";
var circle3 = "<div class='circle blue'></div>";
var rows = 3;
var lines = 2;

for (let l = 0; l < lines; l++){
    for (let i = 0; i < rows; i++){
        document.getElementsByClassName("circleLine L")[l].innerHTML += circle1 + circle2 + circle3;
    }
    for (let i = 0; i < rows; i++){
        document.getElementsByClassName("circleLine R")[l].innerHTML += circle3 + circle2 + circle1;
    }
}

const newTable = document.createElement("table");
const newRow = document.createElement("tr");
newTable.appendChild(newRow);

var width = 30;
newTable.setAttribute("style", "margin: auto; width: " + width + "%");

var imgIndex = 0;
var path = "images/my-projects/"
var images = [
    [
        path + "Lovely Livres 2.png"
    ],
    [
        path + "Budgie - Shopping List (2).png",
        path + "Budgie - Budget (1).png",
        path + "Lifezy - To Do (1).png",
    ],
    [
        path + "Family Manager 2.png",
    ],
]

for (let i = 0; i < images[imgIndex].length; i++){
    let newCell = document.createElement("td");
    let image = document.createElement("img");
    newRow.appendChild(newCell);
    newCell.appendChild(image);
    image.setAttribute("src", images[imgIndex][i]);
    image.setAttribute("width", "100%");

    let id = "img" + imgIndex + i;
    image.setAttribute("id", id);
    image.setAttribute("onclick", "openImg('" + id + "')");
    image.setAttribute("class", "myImg");
}

document.getElementById("Projects").appendChild(newTable);

function changeImages(){
    for (let i = 0; i < images[imgIndex].length; i++)
        newRow.removeChild(newRow.lastChild);

    imgIndex++;
    if (imgIndex == images.length)
        imgIndex = 0;

    for (let i = 0; i < images[imgIndex].length; i++){
        let newCell = document.createElement("td");
        let image = document.createElement("img");
        newRow.appendChild(newCell);
        newCell.appendChild(image);
        image.setAttribute("src", images[imgIndex][i]);
        image.setAttribute("width", "100%");

        let id = "img" + imgIndex + i;
        image.setAttribute("id", id);
        image.setAttribute("onclick", "openImg('" + id + "')");
        image.setAttribute("class", "myImg");
    }
}

function zoomImage(where){
    if (where == 'in' && width != 100){
        width += 10;
    }

    if (where == 'out' && width != 0){
        width -= 10;
    }
    newTable.setAttribute("style", "width:" + width + "%; margin: auto;");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openImg(id){
    var img = document.getElementById(id);
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = "Project Screenshot"; // img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

var sectionNames = [
    {name: "About Me", icon: "icon1.jpg"},
    {name: "Projects", icon: "icon2.jpg"},
    {name: "Resume", icon: "icon3.jpg"}
];

for (let i = 0; i < sectionNames.length; i++){
    document.getElementsByClassName("menu")[0].innerHTML += "<button class='menuButton' onclick='changeSection(\""+  i + "\")'> " + sectionNames[i].name + " </button>";
}

document.getElementsByClassName("contentBox")[0].getElementsByTagName("div")[0].style.display = "block";
document.getElementById(sectionNames[0].name).style.display = "block";

function changeSection(sectionID){
    var path = "images/icons/";
    document.getElementById("boxTitle").innerHTML = sectionNames[sectionID].name;
    document.getElementById("boxIcon").src = path + sectionNames[sectionID].icon;
    
    for (let i = 0; i < sectionNames.length; i++){
        document.getElementById(sectionNames[i].name).style.display = "none";
    }
    document.getElementById(sectionNames[sectionID].name).style.display = "block";
}


var bgID = 1;
const maxbg = 3;
function changeBG(){
    if (bgID == maxbg)
        bgID = 1;
    else
        bgID++;

    document.getElementsByTagName("body")[0].setAttribute("class", "bg" + bgID);
}
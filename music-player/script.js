var lastSelected = 0;

function selectItem(num){
    // console.log(num);
    // alert(num);
    document.getElementsByClassName("block-item")[2 + lastSelected].setAttribute("id", "h");
    document.getElementsByClassName("block-item")[2 + num - 1].setAttribute("id", "selected");
    lastSelected = num - 1;
    document.getElementById("title").innerHTML = "Item " + num;
}
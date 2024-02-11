var prevClickedId = "empty";

for(var i=0; i< document.querySelectorAll(".text").length; i++){
    document.querySelectorAll(".text")[i].addEventListener("click", function () {
        onTitleClick(prevClickedId, this.id);
        prevClickedId = this.id
    })
}

function onTitleClick(prevId, idName) {
    document.querySelector("#"+idName).setAttribute("background-color","#FFFFFF");
}
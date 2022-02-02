var likes = 3;
var likesElement = document.querySelector("#likes");

function liked(){
    likes++;
    likesElement.innerText = likes + " like(s)";
}
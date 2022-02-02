var likes = [9,12,9];
var likesElement = [
    document.querySelector("#likes1"),
    document.querySelector("#likes2"),
    document.querySelector("#likes3")]

function liked(id){
    likes[id]++;
    likesElement[id].innerHTML = likes[id] + " like(s)";
}
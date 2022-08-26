// const imageClass = document.querySelectorAll(".moPic")
// let imgSrc;
// imageClass.forEach((img)=>{
//     img.addEventListener("click",(e)=>{
//         imgSrc=e.target.src;
// console.log(imgSrc)
//     })
// })

// let imgModal= (src)=>{
//     const modal = document.createElement("div");
//     modal.setAttribute("class", "modal");
//     document.querySelector(".main").append(modal);
//     const newImage = document.createElement("img");
//     newImage.setAttribute("src", src);
//     modal.append(newImage)
// }


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function func(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
var images = document.images;
for (var i = 1; i <= images.length; i++) {
    images[i].src = `https://raw.githubusercontent.com/SivaNageswar123/MyGallery/refs/heads/main/${i}.jpg`;
    images[i].style.width = '200px';
    images[i].style.height = '200px';
}
function bigWindow(imgpath){
    document.getElementById('bigWindow').style.display = 'flex';
    document.getElementById('clkImg').style.backgroundImage = `url(${imgpath})`;
    document.getElementById("clkImg").style.backgroundRepeat = "no-repeat";
    document.getElementById("clkImg").style.backgroundSize = "cover"; 
}
function windowClose(){
    document.getElementById("bigWindow").style.display = "none";
}

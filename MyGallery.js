var image=document.images;
for(var i=1;i<image.length;i++){
    image[i].src=`./SivaGallery/${i}.jpg`;
    document.getElementsByTagName('img')[i].style.width='200px';
    document.getElementsByTagName('img')[i].style.height='200px';
}
function bigWindow(imgpath){
    document.getElementById('bigWindow').style.display='flex';
    document.getElementById('clkImg').style.backgroundImage=`url(${imgpath})`;
    document.getElementById("clkImg").style.backgroundRepeat="no-repeat";
    document.getElementById("clkImg").style.backgroundSize="cover"; 
}
function windowClose(){
    document.getElementById("bigWindow").style.display="none";
}
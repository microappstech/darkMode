let start = document.querySelector('img[src="img/stars1.png"]');
let moon2 = document.querySelector('img[src="img/moon2.png"]');
let mountains3 = document.querySelector('img[src="img/mountains3.png"]');
let mountains4 = document.querySelector('img[src="img/mountains4.png"]');
let river5 = document.querySelector('img[src="img/river5.png"]');
let boat6 = document.querySelector('img[src="img/boat6.png"]');
let mountains7 = document.querySelector('img[src="img/mountains7.png"]');
let hamza = document.querySelector('.hamza')
window.onscroll = ()=>{
    let value = scrollY;
    if(value >= 300){
        moon2.style.visibility = 'hidden';
        hamza.style.visibility = 'hidden';

    }
    else{
        moon2.style.visibility = 'visible'
        hamza.style.visibility = 'visible';
    }
    start.style.left = value + "px";

    boat6.style.left = value + 'px';
    
    moon2.style.top = value*3 + 'px';
    mountains3.style.top = value*1.5 + 'px';
    mountains4.style.top = value*0.8 + 'px';
    river5.style.top = value+'px';
    boat6.style.top = value+'px';
    hamza.style.fontSize = value + 'px'
    if(value >= 67){
        hamza.style.fontSize = 66 +'px';
        hamza.style.position = 'fixed';
    }
}





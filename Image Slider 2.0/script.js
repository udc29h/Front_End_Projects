const slideContainer=document.querySelector(".container");
const slide=document.querySelector(".slides")
const nxtBtn=document.getElementById("nxtBtn")
const prBtn=document.getElementById("prevBtn")
const interval=1000;

let slides=document.querySelectorAll(".slide")
let slideId;

let index=1

const firstClone=slides[0].cloneNode(true);
const lastClone=slides[slides.length-1].cloneNode(true);

firstClone.id='first-clone'
lastClone.id='last-clone'

slide.append(firstClone)
slide.prepend(lastClone)

const slideWidth=slides[index].clientWidth;

slide.style.transform=`translateX(${-slideWidth*index}px)`;

const startSlide=()=>{
    slideId = setInterval(()=>{
       moveToNextSlide();
    } , interval)
};

slide.addEventListener('transitionend',()=>{
    slides=getSlides();
    if(slides[index].id===firstClone.id)
    {
        slide.style.transition='none';
        index=1;
        slide.style.transform=`translateX(${-slideWidth*index}px)`
    }
    if(slides[index].id===lastClone.id)
    {
        slide.style.transition='none';
        index=slides.length-2;
        slide.style.transform=`translateX(${-slideWidth*index}px)`
    }
  
});

const moveToNextSlide=()=>{
    slides=getSlides();
    if(index>=slides.length-1) return;
    index++;
    slide.style.transform=`translateX(${-slideWidth*index}px)`;
    slide.style.transition='.5s'
}

const moveToPrevSlide=()=>{
    slides=getSlides();
    if(index<=0) return ;
    index--;
    slide.style.transform=`translateX(${-slideWidth*index}px)`;
    slide.style.transition='.5s'
}

getSlides=()=>document.querySelectorAll('.slide')

slideContainer.addEventListener('mouseenter',()=>{
    console.log("Hellow");
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave',startSlide); 

nxtBtn.addEventListener('click',moveToNextSlide);
prBtn.addEventListener('click',moveToPrevSlide);
startSlide();
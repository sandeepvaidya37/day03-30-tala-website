












let menu=document.querySelector(".nav2 i");
let fullScrnav=document.querySelector(".full-screen-nav");
var Flag=0;

menu.addEventListener("click", function(){
    if(Flag==0){
        fullScrnav.style.top = `0% `;
        Flag++;
        document.querySelector(".nav").style.color = `#222`;
    }
    else{
        fullScrnav.style.top = `-100% `;
        document.querySelector(".nav").style.color = `#dadada`;
        Flag=0;
    }
       
});

var tl=gsap.timeline();
tl
.from(".page1 h1", {
    y:60,
    duration:0.6,
    opacity:0
})
.from(".page1 h2", {
    y:50,
    duration:0.6,
    opacity:0,
    delay:"-0.2"
})
.from(".page1 h3", {
    y:50,
    duration:0.6,
    opacity:0,
    delay:"-0.2"
})
.to(".page1 img", {
    width:`100%`,
    scrollTrigger:{
        trigger:".page1 img",
        scroller:"body",
        start:"top 74%",
        end:"top 5%",
        scrub:2
    }
})
.from(".page2 h1", {
    rotateX:90,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:3,
    }
})
.to(".page5content img", {
    rotate:400,
    repeat:-1,
    duration:0.3,
    ease: "power1.out",

})

  var slide1=document.querySelectorAll(".page6 .slide1 h1");

  slide1.forEach(function(val){
    gsap.to(val,{
        transform:`translateX(-100%)`,
        duration:4,

        scrollTrigger:{

            trigger:`.page6 .slide1 h1`,
            scroller:`body`,
            scrub:3,
        }
    })
  })

  var slide1=document.querySelectorAll(".page6 .slide2 h1");

  slide1.forEach(function(val){
    gsap.to(val,{
        transform:`translateX(-20%)`,
        duration:4,
        
        scrollTrigger:{

            trigger:`.page6 .slide2 h1`,
            scroller:`body`,
            scrub:3
        }
    })
  });

  document.querySelector(".page7-content .page7-content1").addEventListener("mousemove", function(dets){
           
           document.querySelector(".page7-content .page7-content1 img").style.opacity=1;
           document.querySelector(".page7-content .page7-content1 img").style.left=`${dets.x-200}px`;
           
           
           

    
  });

  document.querySelector(".page7-content .page7-content1").addEventListener("mouseleave", function(dets){
           
    document.querySelector(".page7-content .page7-content1 img").style.opacity=0;
    


});

  document.querySelector(".page7-content .page7-content2").addEventListener("mousemove", function(dets){
           
    document.querySelector(".page7-content .page7-content2 img").style.opacity=1;
    document.querySelector(".page7-content .page7-content2 img").style.left=`${dets.x-0}px`;

    


});
document.querySelector(".page7-content .page7-content2").addEventListener("mouseleave", function(dets){
           
    document.querySelector(".page7-content .page7-content2 img").style.opacity=0;
    


});

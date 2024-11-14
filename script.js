Shery.mouseFollower();
Shery.makeMagnet(".magnet");
var menuopen = document.querySelector(".ri-function-line")
var menuclose = document.querySelector(".ri-close-large-line")

var tl = gsap.timeline();
var tl2 = gsap.timeline();
tl.from(".gsap2",{
        y:-50,
        opacity:0,
        delay:0.2,
        duration:0.3
})
tl.from(".gsap1",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.1,
    stagger:0.1
})
tl.from(".tlmain",{
    opacity:0,
    delay:0.1,
    duration:0.8
})
tl.from(".tlicon",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.3,
    stagger:0.1
})
tl.from(".page_2_right",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.3,
})
tl.from(".page1",{
    opacity:0,
    delay:0.1,
    duration:0.8
})


tl2.to(".menu",{
    top : 0,  
    duration: 0.7
})
tl2.from(".menu1 h1",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.1,
})
tl2.from(".tl2",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.1,
    stagger:0.1
})
tl2.from(".leftmain_menu h1",{
    y:-30,
    opacity:0,
    duration:0.1,
    stagger:0.1
})
tl2.from(".rightmain_menu",{
    y:-30,
    opacity:0,
    duration:0.1,
    stagger:0.1
})

tl2.pause()

menuopen.addEventListener("click",function(){
    tl2.play()
})
menuclose.addEventListener("click",function(){
    tl2.reverse()
})

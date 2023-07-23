

//     gsap.to(".imagecontainer",
//         {
//             ease:Expo.easeInOut,
//             width:"100%",
//             duration: 3,
//             stagger: 8
//         }
//         )

//  gsap.to(".text h1",
//  {
//     ease:Expo.easeInOut,
//     top:0,
//     duration: 2.4,
//     stagger:8
//  })


var tl=gsap.timeline({
    repeat:-1
})

tl.to(
    ".imagecontainer",
    {
        ease:Expo.easeInOut,
        width:"100%",
        duration: 3,
        stagger: 6
    }
,"a")

tl.to(".text h1" , {
    ease:Expo.easeInOut,
    top:0,
    duration:2.4,
    stagger:6
},"a")

tl.to(".text h1",{
    ease:Expo.easeInOut,
    top:-100,
    duration:2.4,
    delay: 6,
    stagger:6
},"a")
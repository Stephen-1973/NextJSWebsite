// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "100%",
//     scrub: true
//   }
// })

// tlIntro.fromTo('nav', { opacity: 1 }, { opacity: 0, duration: 1, stagger: 1 })



// const tlH = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.second-page',
//     markers: { startColor: "blue", endColor: "black" },
//     start: "-40%",
//     end: "40%",
//     scrub: true
//   }
// })

// tlH.fromTo('.highlight', { color: "rgba(255,255,255,0.4)" }, { color: "rgba(255,255,255,1)", stagger: 1, duration: 2 })

// const tlRemove = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.second-page',
//     markers: { startColor: "pink", endColor: "pink" },
//     start: "-20%",
//     end: "60%",
//     scrub: true
//   }
// })

// tlRemove.to('.highlight', { color: "rgba(255,255,255,0.4)", stagger: 1 })


const tlStory = gsap.timeline({
  scrollTrigger: {
    trigger: ".story",
    markers: { startColor: "red", endColor: "pink" },
    start: "-30%",
    end: "0%",
    scrub: false,
  }
})


tlStory.fromTo('.story-img', { opacity: 0, x: -40, y: 20 }, { y:0, x: 0,opacity: 1, duration: 2, stagger: 1 });
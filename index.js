let cursor = document.querySelector("#cursor")
let cursorBlur = document.getElementById("cursor-blur")

document.addEventListener("mousemove",(move) =>{
  cursor.style.left =move.x+30 +"px" 
  cursor.style.top =move.y+"px" 
  cursorBlur.style.left =move.x -150 +"px" 
  cursorBlur.style.top =move.y -150 +"px" 
})

let allh4 = document.querySelectorAll("#nav h4")

allh4.forEach((elem) =>{
  // console.log(elem)
  elem.addEventListener("mouseenter",() => {
    cursor.style.scale = 3
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  // addEventListener("")
  elem.addEventListener("mouseleave",() => {
    cursor.style.scale = 1
    cursor.style.border = "0px solid #95c11e"
    cursor.style.backgroundColor = "#95c11e"
  })
})




gsap.to("#nav",{
  backgroundColor:"#000",
  height:"110px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2,
  }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    // markers:true,
    start:"top -30%",
    end:"top -70%",
    scrub:2    
}
})
gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  // stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    //  markers:true,
     start:"top 60%",
     end:"top 58%",
     scrub:2
  }
})

gsap.from("#card",{
  scale:0.9,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#card",
    scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 48%",
     scrub:2
  }
})

gsap.from(".col1",{
  y:-70,
  x:-70,
  // duration:1,
  scrollTrigger:{
    trigger:".col1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
     end:"top 40%",
     scrub:2
  }
})
gsap.from(".col2",{
  y:60,
  x:60,
  // duration:1,
  scrollTrigger:{
    trigger:".col2",
    // markers:true,
    scroller:"body",
    start:"top 80%",
    end:"top 90%",
    scrub:2
    }
})
gsap.from("#page4 h1",{
  y:60,
  // duration:1,
  scrollTrigger:{
    trigger:"#page4 h1",
    // markers:true,
    scroller:"body",
    start:"top 80%",
    end:"top 70%",
    scrub:2
  }
} )
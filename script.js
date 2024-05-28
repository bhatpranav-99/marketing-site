let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");


window.addEventListener("mousemove",(dets)=>{

    const element = document.elementFromPoint(dets.x, dets.y);
    let rect =cursor.getBoundingClientRect();
    if(element && element.tagName =="IMG"){
       let imgSrc = "./"+String(element.src).substring(41);
       cursor.innerHTML = ` <img src="${imgSrc}" alt="" srcset="">`;

       cursor.style.padding="0px";
       cursor.style.borderRadius ="15px";
       cursor.style.boxShadow="2px 2px 10px black"


       gsap.to(".cursor",{
        x:dets.pageX,
        y:dets.pageY,
        scale:6,
        // duration:1,
        ease: "power1.out",
     })

    }else{
        cursor.innerHTML = `<h1 >PB</h1>`
        cursor.style.padding="1rem";
       cursor.style.borderRadius ="50%";


        gsap.to(".cursor",{
            // x: (dets.pageX+rect.left + rect.width / 2)/2,
            // y:(dets.pageY+rect.top + rect.height / 2)/2,
            x:dets.pageX,
            y:dets.pageY,
            scale:1,
            duration:1,
            ease: "power1.out",
        })
    }

    
})


let page1Animation =()=>{
    let tl = gsap.timeline({
        // scrollTrigger:{
        //     trigger:".section2",
        //     scroller:"body",
        //     scrub:1,
        //     // start:"top -50%",
        //     // end:"top -5%",
        //     // markers:true
        // }
    });

tl.from("nav h1",{
    opacity:0,
    x:-50,
    duration:0.5,
    ease: "back.out(1.7)",
})

tl.from("nav i",{
    opacity:0,
    y:-50,
    duration:0.8,
    ease: "elastic.out(5,0.2)",
})

tl.from("nav h4, nav button",{
    opacity:0,
    y:-20,
    duration:0.5,
    stagger:0.3,
    // ease: "bounce.out",
});

tl.from(".left-side h1",{
    opacity:0,
    x:-200,
    duration:0.5
});

tl.from(".left-side p",{
    opacity:0,
    y:50,
    duration:0.5,
})
tl.from(".left-side button",{
    opacity:0,
    y:-50,
    duration:0.8,
    ease: "elastic.out(2,0.3)",
});

tl.from(".right-side img",{
    opacity:0,
    scale:0,
    duration:1,
    ease: "elastic.out(2,0.3)",
},"-=2");

tl.from(".bottom-div img",{
    opacity:0,
    y:20,
    duration:0.5,
    stagger:0.3,
    // ease: "elastic.out(2,0.3)",
    ease: "elastic.out(5,0.5)",
});

}

let page2Animation = ()=>{
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            scrub:1,
            start:"top 110%",
            end:"top -5%",
            // markers:true
        }
    })
    
    tl2.from(".services",{
        x:-700,
        duration:0.5,
        opacity:0
    });
    
    tl2.from(".line1.left",{
        x:-100,
        duration:0.5,
        opacity:0
    },"line1")
    tl2.from(".line1.right",{
        x:100,
        duration:0.5,
        opacity:0
    },"line1");
    
    tl2.from(".line2.left",{
        x:-100,
        duration:0.5,
        opacity:0
    },"line2")
    tl2.from(".line2.right",{
        x:100,
        duration:0.5,
        opacity:0
    },"line2")
    
}

let page3Animation =()=>{

    window.addEventListener("wheel",(dets)=>{
        if(dets.deltaY>0){
            gsap.to(".msgDiv",{
    
                transform:"translateX(-200%)",
                duration:4,
                repeat:-1,
                ease:"none"
            });
    
            gsap.to(".msgDiv img",{
                rotate:180
            })
    
           
        }else{
            gsap.to(".msgDiv",{
    
                transform:"translateX(0%)",
                duration:4,
                repeat:-1,
                ease:"none"
            });
            gsap.to(".msgDiv img",{
                rotate:0
            })
           
        }
    })

}

let textHorizontalScrolling = ()=>{
    gsap.to("#page2 h2",{
        transform: "translateX(-170%)",
        duration:2,
        scrollTrigger:{
            trigger:".section3",
            start:"top 0%",
            end:"top -150%",
            scrub:2,
            pin:true,
        }
    })
}


page1Animation();
page2Animation();
page3Animation();
textHorizontalScrolling();


let initialPath = "M 10 150 Q 700 150 1390 150";
let modifiedPath = "M 10 150 Q 700 150 1390 150";

let container = document.querySelector(".string-container");


container.addEventListener("mousemove",(dets)=>{

    modifiedPath =`M 10 150 Q ${dets.x} ${dets.y} 1390 150`;
    
    gsap.to(".string-container svg path",{

        attr:{d:modifiedPath},
        ease: "power4.out",
    })
});

container.addEventListener("mouseleave",()=>{
    gsap.to(".string-container svg path",{
        attr:{d:initialPath},
        duration:0.5,
        ease: "elastic.out(1,0.1)",
    })
})
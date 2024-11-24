document.addEventListener("DOMContentLoaded", function(event) {
  gsap.registerPlugin( ScrollTrigger);
  
  // Progress bar at top
  const tlProgress = gsap.timeline({
    scrollTrigger: {
      trigger: '#journey-line',
      start: 'top top',
      endTrigger: '#footer',
      end: '+=2000 bottom',
      scrub: true,
      ease: 'none'
      // markers: true,
    }
  });
  tlProgress.to("#progress", { width: "100%" })
  
  // Journey line
  const tlDoc = gsap.timeline({
    scrollTrigger: {
      trigger: '#journey-line',
      start: 'top top',
      endTrigger: '#footer',
      end: '+=2000 bottom',
      scrub: true,
      ease: 'none',
      // markers: true,
    }
  });
  tlDoc.to("#journey-line", { 
    // x: -100,
    y: "10%", 
    duration: 10,
  });

  // Header
  const tlHero = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: '+=50 top',
      end: 'bottom top',
      scrub: true,
      ease: 'power5.inOut',
      // markers: true,
    }
  })
  tlHero.to("#hero-image", { 
    y: 100,
  });

  // Introduction
  const tlIntro = gsap.timeline({
    scrollTrigger: {
      trigger: '#introduction',
      start: 'top 75%',
      end: 'bottom bottom',
      scrub: true,
      markers: true,
    }
  })

  tlIntro.addLabel('start')
    .add(gsap.to('#mission',{ x: 0, duration: 1}))
    .add(gsap.to('#vision',{ x: 0, duration: 1}),"<+=1")
    
  // Goals Wheel
  const tlGoals = gsap.timeline({
    scrollTrigger: {
      trigger: '#goals',
      pin: true, 
      start: 'top top+=50', // when the top of the trigger hits the top of the viewport
      end: '+=1500px', // end after scrolling 500px beyond the start
      scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { max: 0.3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          // delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power2.inOut' // the ease of the snap animation ("power3" by default)
      },
      // markers: true,
    }
  });

  const labelOutState = {x: "-100%", scale: "0"}
  const labelOutTiming = "" //'-=0.2'
  const labelInState = {x: 0, scale: "1"}
  const labelInTiming = "+=0.2"
  tlGoals.addLabel("start")
    .add(gsap.to('#sports',{ y:50, duration: 1}),"start")
    // .add(gsap.to('#goals',{ paddingTop: "0px"}),"start")
    .addLabel("community")
    .to("#community",{x: 0, scale: "1"})
    .addLabel('support')
    .to('#goal-wheel', { rotation: 90 })
    .add(gsap.to("#community",labelOutState),`support${labelOutTiming}`)
    .add(gsap.to("#support",labelInState),`support${labelInTiming}`)
    .addLabel('advocacy')
    .to('#goal-wheel', { rotation: 180 })
    .add(gsap.to("#support",labelOutState),`advocacy${labelOutTiming}`)
    .add(gsap.to("#advocacy",labelInState),`advocacy${labelInTiming}`)
    .addLabel('familiarity')
    .to('#goal-wheel', { rotation: 270 })
    .add(gsap.to("#advocacy",labelOutState),`familiarity${labelOutTiming}`)
    .add(gsap.to("#familiarity",labelInState),`familiarity${labelInTiming}`)
    .addLabel('end')
    .to('#goal-wheel', { rotation: 360 })
    .add(gsap.to("#familiarity",labelOutState),`end${labelOutTiming}`)
    

});

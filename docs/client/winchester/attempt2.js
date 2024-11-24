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
      start: 'top 66%',
      end: 'bottom bottom',
      scrub: 0.5,
      // markers: true,
    }
  })

  tlIntro.addLabel('start')
    .add(gsap.to('#mission',{ x: 0, duration: 2}))
    .add(gsap.to('#vision',{ x: 0, duration: 2}),"<+=1")
    
  // Goals Wheel
  const tlGoals = gsap.timeline({
    scrollTrigger: {
      trigger: '#goals',
      pin: true, 
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: '+=1500px', // end after scrolling 500px beyond the start
      scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          // duration: { max: 0.3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          // delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power2.inOut' // the ease of the snap animation ("power3" by default)
      },
      // markers: true,
    }
  });

  const duration = 10
  const labelOutState = {x: "-100%", scale: "0", duration: duration}
  const labelOutTiming = "" //'-=0.2'
  const labelInState = {x: 0, scale: "1", duration: duration}
  const labelInTiming = "" //+=0.2"
  
  tlGoals.addLabel("start")
    .add(gsap.to('#sports',{ y:50, duration: 1}),"start")
    // .add(gsap.to('#goals',{ paddingTop: "0px"}),"start")
    .addLabel("community")
    .to("#community",{x: 0, scale: "1", duration: duration})
    .addLabel('support')
    .to('#goal-wheel', { rotation: 90, duration: duration },`support${labelOutTiming}`)
    .add(gsap.to("#community",labelOutState),`support${labelOutTiming}`)
    .add(gsap.to("#support",labelInState),`support${labelInTiming}`)
    .addLabel('advocacy')
    .to('#goal-wheel', { rotation: 180, duration: duration },`advocacy${labelOutTiming}`)
    .add(gsap.to("#support",labelOutState),`advocacy${labelOutTiming}`)
    .add(gsap.to("#advocacy",labelInState),`advocacy${labelInTiming}`)
    .addLabel('familiarity')
    .to('#goal-wheel', { rotation: 270, duration: duration },`familiarity${labelOutTiming}`)
    .add(gsap.to("#advocacy",labelOutState),`familiarity${labelOutTiming}`)
    .add(gsap.to("#familiarity",labelInState),`familiarity${labelInTiming}`)
    .addLabel('end')
    .to('#goal-wheel', { rotation: 360, duration: duration })
    .add(gsap.to("#familiarity",labelOutState),`end${labelOutTiming}`)

  // Measures Wheel
  const tlMeasures = gsap.timeline({
    scrollTrigger: {
      trigger: '#measures',
      pin: true, 
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: '+=1500px', // end after scrolling 500px beyond the start
      scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          // duration: { max: 0.3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          // delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power4.inOut' // the ease of the snap animation ("power3" by default)
      },
      markers: true,
    }
  });
  
  tlMeasures.addLabel("start2")
    .add(gsap.to('#students',{ y:50, duration: 1}),"start2")
    // .add(gsap.to('#goals',{ paddingTop: "0px"}),"start")
    .addLabel("belonging")
    .to("#belonging",{x: 0, scale: "1", duration: duration})
    .addLabel('engagement')
    .to('#goal-wheel-2', { rotation: 90, duration: duration },`engagement${labelOutTiming}`)
    .add(gsap.to("#belonging",labelOutState),`engagement${labelOutTiming}`)
    .add(gsap.to("#engagement",labelInState),`engagement${labelInTiming}`)
    .addLabel('impact')
    .to('#goal-wheel-2', { rotation: 180, duration: duration },`impact${labelOutTiming}`)
    .add(gsap.to("#engagement",labelOutState),`impact${labelOutTiming}`)
    .add(gsap.to("#impact",labelInState),`impact${labelInTiming}`)
    .addLabel('interaction')
    .to('#goal-wheel-2', { rotation: 270, duration: duration },`interaction${labelOutTiming}`)
    .add(gsap.to("#impact",labelOutState),`interaction${labelOutTiming}`)
    .add(gsap.to("#interaction",labelInState),`interaction${labelInTiming}`)
    .addLabel('end2')
    .to('#goal-wheel-2', { rotation: 360, duration: duration })
    .add(gsap.to("#interaction",labelOutState),`end2${labelOutTiming}`)
    

  // Priroities slider
  const tlPriority = gsap.timeline({
    scrollTrigger: {
      trigger: '#priorities',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      pin: true,
      // markers: true,
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { max: 0.3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        // delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
      },
    }
  })

  setTimeout(() => {
    const sliderContainer = document.getElementById('priorities') //.getBoundingClientRect()
    const sliderElement = document.getElementById('priority-slider') //.getBoundingClientRect()
    const debug = document.getElementById('debug') 
    const panels = Array.from(sliderElement.getElementsByTagName('li'))
    const panelNames = panels.map((panel) => { return panel.id })
    window.sliderElement = sliderElement
    window.sliderContainer = sliderContainer
    window.panels = panels
    window.timeline = tlPriority
  
  
    const gapSize = 100
    const panelSize = panels[0].offsetWidth
    const startingPosition = (sliderContainer.offsetWidth/2) - (panelSize/2)
    const movementAmount = panelSize + gapSize
    console.log("Sizes",gapSize,panelSize, movementAmount)
  
    let lastLabel = tlPriority
  
    panelNames.forEach((panelName,index) => {
      lastLabel = lastLabel.addLabel(panelName)
      const offset = index*movementAmount
      console.log("panelName",panelName,startingPosition,offset)
      lastLabel.to('#priority-slider',{x: startingPosition - offset , ease: "none"},panelName)
    }) 
  
    // debug.innerText = `${window.innerWidth} ${sliderContainer.offsetWidth} ${sliderElement.offsetWidth} ${panelSize} ${panels[0].getBoundingClientRect().width}`
  },500)
 

  console.log(tlPriority)
});

function moveForward() {
  timeline.tweenTo(timeline.nextLabel(),{ease: "power5.inOut"})
}
function moveBack() {
  timeline.tweenTo(timeline.previousLabel(),{ease: "power5.inOut"})
}
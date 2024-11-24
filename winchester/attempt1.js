    // use a script tag or an external JS file
    document.addEventListener("DOMContentLoaded", function(event) {
      gsap.registerPlugin( ScrollTrigger);
      gsap.to("#journey-line", { 
        // x: -20,
        y: -3500, 
        // rotate: 3,
        duration: 1,
        scrollTrigger: {
          trigger: '#journey-line',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          // markers: true,
        }
      });
      gsap.to("#hero-image", { 
        y: 100, 
        // opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#hero-image',
          start: 'top top',
          end: 'bottom 300',
          scrub: true,
          // markers: true
        }
      });

      ["#mission","#vision"].forEach((layerId,index) => {
        gsap.to(layerId, { 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '#hero-image',
          start: `${index*200} top`,
          end: 'bottom top',
          scrub: true,
          // markers: true
        }
      });
      })

      ScrollTrigger.create({
        
        trigger: '#goals',
        start: 'top top',
        endTrigger: '#measures',
        // end: 'bottom top',
        pin: '#goals',
        // markers: true
        
      })

      gsap.to("#sports", { 
        y: 50, 
        // opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#goals',
          start: 'top-400px center',
          end: 'bottom bottom',
          scrub: true,
          // markers: true
        }
      });

      gsap.to("#goal-wheel", { 
        rotate: 270,
        duration: 1,
        scrollTrigger: {
          trigger: '#goals',
          start: 'top top',
          endTrigger: '#measures',
          scrub: true,
          // pinnedContainer: '#goals'
          markers: true
        }
      });

      gsap.to("#community", { 
        opacity: 1,
        duration: 1,
        repeat: 1,
        yoyo: true,
        scrollTrigger: {
          trigger: '#goals',
          start: '-500px top',
          endTrigger: '#measures',
          end: '-800px top',
          scrub: true,
          // markers: true
        }
      });

      gsap.to("#support", { 
        opacity: 1,
        duration: 1,
        repeat: 1,
        yoyo: true,
        scrollTrigger: {
          trigger: '#goals',
          start: 'top top',
          endTrigger: '#measures',
          end: '-300px top',
          scrub: true,
          // markers: true
        }
      });

      gsap.to("#advocacy", { 
        opacity: 1,
        duration: 1,
        repeat: 1,
        yoyo: true,
        scrollTrigger: {
          trigger: '#measures',
          start: '-2800px top',
          endTrigger: '#measures',
          end: '-2400px top',
          scrub: true,
          // markers: true
        }
      });

      // gsap.to("#support", { 
      //   opacity: 1,
      //   duration: 1,
      //   repeat: 1,
      //   yoyo: true,
      //   scrollTrigger: {
      //     trigger: '#goals',
      //     start: 'top 200px',
      //     end: '500px top',
      //     scrub: true,
      //     markers: true
      //   }
      // });

      // const segments = ["#community","#support","#advocacy","#familiarity"]
      // // const segments = ["#community","#support"]
      // segments.forEach((layerId,index) => {
      //   gsap.to(layerId, { 
      //   opacity: 1,
      //   duration: 1,
      //   repeat: 1,
      //   yoyo: true,
      //   scrollTrigger: {
      //     trigger: '#goals',
      //     start: `-${(segments.length - index)*350-1000}px top`,
      //     end: `${(index*50)+2650}px top`,
      //     scrub: true,
      //     markers: { content: `tezt${index}`}
      //   }
      // });
      // })

      ScrollTrigger.create({
        
        trigger: '#measures',
        start: 'top top',
        endTrigger: '#priorities',
        end: 'bottom top',
        pin: '#measures',
        // markers: true
        
      })      
      ScrollTrigger.create({
        
        trigger: '#priorities',
        start: 'top top',
        endTrigger: '#footer',
        end: 'bottom top',
        pin: '#priorities',
        // markers: true
        
      })   
    
    });

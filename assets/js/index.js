history.scrollRestoration = "manual"
gsap.to($('.sc-visual .astronaut .astronaut-img'), {
  scrollTrigger: {
    trigger: '.sc-visual',
    start: '10% 0%',
    end: '100% 100%',
    scrub: 0,
  },
  yPercent: 100,
  rotate: -45,
})


const meet = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-meet',
    start: '0% 50%',
    end: "16% 0%",
    scrub: 0,
  }
})
meet.to($('.sc-meet .headline .center'), {
  rotate: 0,
}, 'meet')
meet.to($('.sc-meet .headline .left'), {
  transform: 'translateX(0) rotate(0)',
}, 'meet')
meet.to($('.sc-meet .headline .right'), {
  transform: 'translateX(0) rotate(0)',
}, 'meet')


const reFirst = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-recreate',
    start: '0% 0%',
    end: '50% 100%',
    scrub: 0,
  }
})
reFirst.to('.sc-recreate .earth-wrap .left-earth', {
  transform: 'translate(-2%, 30%) rotate(0deg) scale(1.4)',
}, 'reF')
reFirst.to('.sc-recreate .earth-wrap .right-earth', {
  transform: 'translate(90%, 60%) rotate(-15deg) scale(1.4)',
}, '<')
reFirst.to('.sc-recreate .earth-wrap .earth-img', {
  opacity: 1,
  delay: 0.3
}, "<")
reFirst.to('.sc-recreate', {
  background: '#000',
}, '<')

const reSecond = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-recreate',
    start: '50% 100%',
    end: '100% 80%',
    scrub: 0,
  }
})
reSecond.to('.sc-recreate .earth-wrap', {
  rotate: -180,
  yPercent: -20,
  duration: 1.5
})
reSecond.to('.sc-recreate .earth-area', {
  'backdrop-filter': 'blur(2px)'
})




const briefTxt = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-brief',
    start: "30% 50%",
    end: "75% 70%",
    scrub: 0,
  }
})
briefTxt.to($('.sc-brief .text-wrap .desc .split-text1'), {
  width: "100%",
})
briefTxt.to($('.sc-brief .text-wrap .desc .split-text2'), {
  width: "100%",
})
briefTxt.to($('.sc-brief .text-wrap .desc .split-text3'), {
  width: "100%",
})
briefTxt.to($('.sc-brief .text-wrap .desc .split-text4'), {
  width: "100%",
})
briefTxt.to($('.sc-brief .text-wrap .desc .split-text5'), {
  width: "100%",
})
gsap.to($('.sc-brief .moon-wrap .ic-moon .moon-img'), {
  scrollTrigger: {
    trigger: '.sc-brief',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  },
  x: 0,
  stagger: -0.4,
  ease: 'linear'
})


// rocket 회전, 마진
const rocket = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-rocket .content',
    start: '0% 100%',
    end: '100% 0%',
    scrub: 0,
  }
})
rocket.to($('.sc-rocket .rocket-wrapper .rocket-wrap'), {
  transform: 'rotate(37deg)',
  ease: 'linear'
}, 'a')
rocket.to($('.sc-rocket .rocket-wrap .big-rocket-box'), {
  margin: '0 -8.33vw',
  ease: 'linear',
}, 'a')

// rocket bg 위로 올리기
// gsap.to($('.sc-rocket .content .bg-area'), {
//   scrollTrigger: {
//     trigger: '.sc-rocket .rocket-wrapper',
//     start: '50% 100%',
//     end: '100% 0%',
//     scrub: 0,
//   },
//   marginTop: '-100vh',
//   ease: 'linear',
// })

// rocket 사이 마진
const rocketM = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-rocket .rocket-wrapper',
    start: '0% 100%',
    end: '100% 100%',
    scrub: 0,
  }
})
rocketM.from($('.sc-rocket .rocket-wrap .sm-rocket-box .sm-rocket'), {
  marginBottom: '70px',
  ease: 'linear',
}, 'b')
rocketM.from($('.sc-rocket .rocket-wrap .big-rocket-box .big-rocket'), {
  marginTop: '30px',
  ease: 'linear',
}, 'b')

// 원 테두리, 가운데 이미지, 비디오
const rocketCir = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-rocket .bg-area .circle-flex',
    start: '0% 100%',
    end: '100% 100%',
    scrub: 0,
  }
})
rocketCir.to($('.sc-rocket .bg-area .circle .circle-bd'), {
  'clip-path': 'inset(0% 0% 0% 0%)',
  duration: 1
})
rocketCir.to($('.sc-rocket .bg-area .circle .img-wrap'), {
  'clip-path': 'circle(50% at 50% 50%)'
}, 'cir')
rocketCir.to($('.sc-rocket .bg-area .circle .video-wrap'), {
  'clip-path': 'circle(50% at 50% 50%)'
}, 'cir')



const about = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-about',
    start: "40% 50%",
    end: "100% 0%",
    scrub: 0,
    invalidateOnRefresh: true,
  }
})
about.to($('.sc-about .group-planet .grid-area .planet-area'), {
  transform: "translateX(-190%)",
  delay: 0.1
}, 'about')
about.to($('.sc-about .group-planet .graph-area .circular-line2 svg'), {
  rotate: -600,
  delay: 0.1
}, 'about')
about.to($('.sc-about .group-planet .graph-area .circular-line3 svg'), {
  rotate: -360,
  delay: 0.1
}, 'about')
about.to($('.sc-about .group-planet .graph-area .circular-line4 svg'), {
  rotate: -180,
  delay: 0.1
}, 'about')
about.to('.sc-about .graph-area .num-wrap .num-text', {
  y: -170,
  ease: 'linear',
  delay: 0.1
}, 'about')
about.to($('.sc-about .group-planet .graph-area .line-graph-wrap svg'), {
  transform: 'translateX(-62%)',
  delay: 0.1
}, 'about')
// 행성 움직이기
gsap.to($('.sc-about .group-planet .planet-area .planet2 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '30% 0%',
    end: '50% 0%',
    scrub: 0,
  },
  transform: 'rotate(114deg)'
})
gsap.to($('.sc-about .group-planet .planet-area .planet3 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '30% 0%',
    end: '51% 0%',
    scrub: 0,
  },
  transform: 'rotate(67deg)'
})
gsap.to($('.sc-about .group-planet .planet-area .planet4 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '30% 0%',
    end: '55% 0%',
    scrub: 0,
  },
  transform: 'rotate(15deg)'
})
gsap.from($('.sc-about .group-planet .planet-area .planet6 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '45% 0%',
    end: '75% 0%',
    scrub: 0,
  },
  transform: 'rotate(65deg)'
})
gsap.to($('.sc-about .group-planet .planet-area .planet7 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '55% 0%',
    end: '90% 0%',
    scrub: 0,
  },
  transform: 'rotate(10deg)'
})
gsap.from($('.sc-about .group-planet .planet-area .planet8 .planet-img'), {
  scrollTrigger: {
    trigger: '.sc-about',
    start: '70% 0%',
    end: '90% 0%',
    scrub: 0,
  },
  transform: 'rotate(-45deg)'
})



const impact = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-impact',
    start: "0% 0%",
    end: "80% 0%",
    scrub: 0,
  }
})
impact.from($('.sc-impact .meteor-area .meteor1'), {
  yPercent: 100,
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor2'), {
  yPercent: 400,
  rotate: "320deg",
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor3'), {
  yPercent: 420,
  rotate: "-270deg",
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor4'), {
  yPercent: 450,
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor5'), {
  yPercent: 450,
  rotate: "-270deg",
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor6'), {
  yPercent: 460,
  rotate: "180deg",
}, 'meteor')
impact.from($('.sc-impact .meteor-area .meteor7'), {
  yPercent: 500,
  rotate: "-500deg",
}, 'meteor')

gsap.from($('.sc-impact .headline .text'), {
  scrollTrigger: {
    trigger: '.sc-impact',
    start: "0% 0%",
    end: "40% 0%",
    scrub: 0,
  },
  yPercent: -100,
}, 'meteor')


const earthRotation = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-rotation',
    start: "20% 80%",
    end: "100% 0%",
    scrub: 0,
  }
})
earthRotation.to($('.sc-rotation .earth-area .line-wrap .link-wrap1'), {
  bottom: '33.85vw',
  left: '52.08vw',
  duration: 3,
}, 'earth')
earthRotation.to($('.sc-rotation .earth-area .line-wrap .link-wrap2'), {
  bottom: '33.85vw',
  left: '25.68vw',
  duration: 3,
}, 'earth')
earthRotation.to($('.sc-rotation .earth-area .line-wrap .link-wrap3'), {
  top: '23.96vw',
  left: '39.43vw',
  duration: 3,
}, 'earth')
earthRotation.to($('.sc-rotation .earth-area .earth-wrap .earth-img'), {
  rotate: 75,
  duration: 3,
}, 'earth')


$('.sc-overview .icon-wrap').each(function (i, el) {
  const iconScale = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 50%",
      scrub: 0,
    },
  })
  iconScale.from($(el).find('svg'), {
    scale: 0,
  })
})
$('.sc-overview .text-area').each(function (i, el) {
  const textMove = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "50% 100%",
      end: "100% 50%",
      scrub: 0,
    },
  })
  textMove.to($(el).find('.text-wrap'), {
    transform: "translateX(0px)",
    delay: .1,
  })
})
gsap.to($('.sc-overview .dot-line .dot-line-img'), {
  scrollTrigger: {
    trigger: '.sc-overview .dot-line',
    start: '0% 100%',
    end: '100% 0%',
    scrub: 0,
  },
  'clip-path': 'inset(0 0 0% 0)',
  ease: 'linear',
})


const flow = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-flow',
    start: "20% 80%",
    end: "100% 40%",
    scrub: 0
  }
})
flow.to($('.sc-flow .content .group-line .line-area'), {
  rotateZ: -360,
  ease: "linear",
}, 'a')
flow.to($('.sc-flow .content .text-flow .text'), {
  xPercent: -87,
  delay: 0.1,
}, 'a')


gsap.to($('.sc-constellation .constellation-wrapper'), {
  scrollTrigger: {
    trigger: '.sc-constellation .line-area .line-wrap',
    start: '0% 100%',
    end: '100% 0%',
    scrub: 0,
  },
  rotate: 30,
  ease: 'linear'
})
$('.sc-constellation .circle-area .point-circle').each(function(i, el) {
  gsap.to($(el), {
      scrollTrigger: { 
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      scrub: 0,
    },
    opacity: 1,
  })
})
$('.sc-constellation .line-area .line-wrap').each(function(i, el) {
  gsap.to($(el).find('.line-box svg path'), {
      scrollTrigger: { 
      trigger: el,
      start: "0% 100%",
      end: "100% 100%",
      scrub: 0,
    },
    'clip-path': 'inset(0% 0% 0% 0%)',
    stagger: 0.2,
    ease: 'linear'
  })
})




$('.sc-typo .content .text-area .text-wrap').each(function (i, el) {
  const textBlur = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 80%",
      end: "50% 50%",
      scrub: 0,
      onEnter: () => gsap.to($(el), { filter: "blur(0px)" }, 'blur'),
      onLeave: () => gsap.to($(el), { filter: "blur(10px)" }, 'blur'),
      onEnterBack: () => gsap.to($(el), { filter: "blur(0px)" }, 'blur'),
      onLeaveBack: () => gsap.to($(el), { filter: "blur(10px)" }, 'blur')
    }
  })
})
gsap.to($('.sc-typo .content .icon-wrap'), {
  scrollTrigger: {
    trigger: '.sc-typo .content .icon-wrap',
    start: "100% 20%",
    end: "100% 0%",
    scrub: 0,
  },
  filter: "blur(10px)",
})


const ufo = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-ufo',
    start: "10% 80%",
    end: "50% 50%",
    scrub: 0,
  }
})
ufo.to($('.sc-ufo .ufo-wrap .main-ufo-img'), {
  opacity: 1,
  duration: 2,
})
ufo.to($('.sc-ufo .ufo-wrap .ufo-light-wrap'), {
  scaleX: 1,
  duration: 3,
}, 'ufo')
ufo.to($('.sc-ufo .ufo-wrap .sub-ufo.tr'), {
  opacity: 0.6,
}, 'ufo')
ufo.to($('.sc-ufo .ufo-wrap .sub-ufo.tl'), {
  opacity: 0.6,
}, '>')
ufo.to($('.sc-ufo .ufo-wrap .sub-ufo.bl'), {
  opacity: 0.8,
}, '>')
ufo.to($('.sc-ufo .ufo-wrap .sub-ufo.br'), {
  opacity: 0.8,
}, '>')


gsap.to($('#footer .link-wrap .dark-moon'), {
  scrollTrigger: {
    trigger: '#footer',
    satrt: "0% 100%",
    end: "100% 100%",
    scrub: 0,
  },
  xPercent: -120,
})
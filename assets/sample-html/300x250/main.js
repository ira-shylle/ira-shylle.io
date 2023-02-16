var banner = {
  imagesLoaded: 0,
  images: ['keyart-lrg.jpg', 'logo.png', 'text01.png', 'text02.png', 'button.png'],
  imagesSubloaded: 0,
  subload: ['keyart-lrg.jpg', 'logo.png', 'text01.png', 'text02.png', 'button.png'],
  preloadSize: 0,
  subloadSize: 0,
  width: 0,
  height: 0
};


// IMAGE PRELOADER ----------------------------------
function preLoadImage(imgURL, targetElement) {
  var newImage = new Image();
  newImage.onload = imageLoaded;
  newImage.src = imgURL;
}

function imageLoaded(e) {
  banner.imagesLoaded++;

  if (banner.imagesLoaded == banner.images.length && !banner.init) {
    banner.init = true;
    console.log('>> ALL IMAGES LOADED')
    initBanner();
    subloadImages();
  }
}

function preloadImages() {
  for (var i = 0; i < banner.images.length; i++) {
    //console.log('loading '+ banner.images[i] )
    preLoadImage(banner.images[i]);
  }

}

// IMAGE SUBLOADER ----------------------------------
function subloadImage(imgURL, targetElement) {
  var newImage = new Image();
  newImage.onload = imageSubloaded;
  newImage.src = imgURL;
}

function subloadImages() {
  for (var s = 0; s < banner.subload.length; s++) {
    //console.log('loading '+ banner.subload[s] )
    subloadImage(banner.subload[s]);
  }
}

function imageSubloaded(e) {
  banner.imagesSubloaded++;

  if (banner.imagesSubloaded == banner.subload.length) {
    console.log('>> ALL IMAGES SUBLOADED : total Subload ')
    if (!qamodeToggle) {
      startBanner();
    }
  }
}


var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var queries = {
  ends: ""
};
var deadline;

var debugMode = true;
var startTime;
var endTime;
var distance = 320;
var velocity = 300;
var time = 2;
var kenburnsfactor = 1.01;
var glintX = 168;
var frames;
var mainTimeline;
var qamodeToggle = false;
var delay = 1.4;
var rondelscale = .4;
var rondelCentreX = 233;
var rondelCentreY = 422;
var spd = 0.7;
var ease = Power3.easeOut;

var rectPercent = [76, 67, 59];
var rectPercentEndFrame = [71, 25, 18];

// INIT BANNER ----------------------------------
initBanner = function () {
  startTime = new Date();


  getQuerystring();

  console.log('queries.ends=' + queries.ends);

  if (queries.ends == "tomorrow") {
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(23);
    deadline.setMinutes(59);
  } else if (queries.ends == "today") {
    deadline = startTime;
    deadline.setHours(23);
    deadline.setMinutes(59);
  } else {
    deadline = new Date("30 June 2019 23:59:59");
  }

  // initializeClock('clock', deadline);


  if (debugMode) {
    $.dragScroll();
    $.proofKey();
  }

  var dimensions = $('meta[name="ad.size"]').attr("content").split(',');
  for (var i = 0; i < dimensions.length; i++) {
    var t = dimensions[i].split('=');
    banner[t[0]] = parseInt(t[1]);
  }

  console.log('banner ' + banner.width + 'x' + banner.height + ' init: start time ' + startTime)

  var repeatCounter = 0;
  mainTimeline = new TimelineMax({
    repeat: 1,
    paused: true,
    onRepeat: function () {
      if (repeatCounter > 0) {
        mainTimeline.add([section6()], "13", "sequence", "+=0")
      }
      repeatCounter++;
    }
  })


  $('#banner').show();
  $('.common').show();
  $('.frame1').show();

  mainTimeline = new TimelineMax({
    paused: true
  })
    .set('#snow', {
      "display": "block"
    })
    .set('#banner', {
      alpha: 0
    })
    .set('.frame', {
      display: "block"
    })
    .set('.btn', {
      scale: 1,
      opacity: 0,
      transformOrigin: "50% 50%",
    })
    .set('.logo', {
      opacity: 0,
    })
    .set(['.txt01', '.txt02', '.txt03', '.txt04', '.txt05', '.disc03', '.logo4'], {
      opacity: 0,
      y: 25
    })
    .set(['.disc01', '.disc02', '.disc03', '.disc04', '.disc05', '.now-streaming'], {
      opacity: 0,
      y: 10
    })
    .set(['.date01'], {
      opacity: 0,
      y: 10
    })
    .set('.rect-top', {
      yPercent: -100
    })
    .set('.border', {
      scaleX: 0.01,
      transformOrigin: 'center'
    })
    .to('#banner', 0.3, {
      alpha: 1
    }, 0.3)
  mainTimeline.play();

}

proofBanner = function () {
  var t1 = new TimelineMax()
  t1.play();
}

startBanner = function () {
  mainTimeline.add(frame1());
  mainTimeline.add(frame2());
  mainTimeline.add(frame3());
  mainTimeline.add(frame4());
  mainTimeline.add(frame5());

}


stopBanner = function () {
  endTime = new Date();
  var timeInInteraction = (endTime - startTime) / 1000;
  console.log('banner ' + banner.width + 'x' + banner.height + ' stopped: time in interaction :' + timeInInteraction + 's');
}

var frameDelay = 1;


function frame1() {
  var t1 = new TimelineMax()
  t1.to(['.frame1 .frame-text', '.frame-keyart'], 1, { opacity: 1, ease: Power1.easeOut });
  t1.to(['.logo'], 1, { opacity: 1, ease: Power1.easeOut }, '-=0.8');
  return t1;
}

function frame2() {
  var t1 = new TimelineMax()
  t1.to(['.frame1 .frame-text', '.frame-keyart'], 1, { delay: frameDelay, x: -261, ease: Expo.easeInOut });
  return t1;
}

function frame3() {
  var t1 = new TimelineMax()
  t1.to(['.frame1 .frame-text', '.frame-keyart'], 1, { delay: frameDelay, scale: 1.7, x: -534, y: 82, transformOrigin: '0 0', ease: Expo.easeInOut });
  return t1;
}

function frame4() {
  var t1 = new TimelineMax()
  t1.to(['.frame1 .frame-text', '.frame-keyart'], 1, { delay: frameDelay, scale: 1.7, x: -446, y: -101, transformOrigin: '0 0', ease: Expo.easeInOut });
  return t1;
}

function frame5() {
  var t1 = new TimelineMax()
  t1.to(['.frame1 .frame-text', '.frame-keyart'], 1, { delay: frameDelay, scale: 1, opacity: 0, x: -190, y: -250, transformOrigin: '0 0', ease: Expo.easeInOut });
  t1.to('.black-bar', 0.1, { opacity: 0 });
  t1.to('.frame5 .frame-text', 0.5, { opacity: 1, ease: Power1.easeOut }, '-=0.5');
  t1.to('.frame5 .frame-button', 0.7, { opacity: 1, scale: 1, ease: Expo.easeOut }, '-=0.15');
  t1.to('.frame5 .frame-button', 0.3, { scale: 1.05, ease: Power3.easeOut, delay: 1 });
  t1.to('.frame5 .frame-button', 0.3, { scale: 1, ease: Power3.easeOut, onComplete:function(){ stopBanner();} });


  return t1;
}
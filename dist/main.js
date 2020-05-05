!function(t){var i={};function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)n.d(e,s,function(i){return t[i]}.bind(null,s));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/dist/",n(n.s=2)}([function(t,i){function n(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var e=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.score=0,this.highScore=0}var i,e,s;return i=t,(e=[{key:"drawScore",value:function(t){var i="Score: ".concat(this.score," / ").concat(this.highScore);t.font="16px Arial",t.strokeText(i,640,40),t.fillText(i,640,40),t.fillStyle="orange",t.lineWidth=3,this.countScore(),this.getHighScore()}},{key:"countScore",value:function(){this.score+=1}},{key:"getHighScore",value:function(){return this.score>this.highScore&&(this.highScore=this.score),this.highScore}}])&&n(i.prototype,e),s&&n(i,s),t}();t.exports=e},function(t,i,n){},function(t,i,n){"use strict";n.r(i);n(1);function e(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var s=.4,o=11,a=[0,0,55,55],r=[55,0,55,55],h=[110,0,55,55],u=[165,0,55,55],c=[220,0,55,55],m=[0,55,55,55],l=[55,55,55,55],d=[110,55,55,55],g=[165,55,55,55],p=[220,55,55,55],f=[0,110,55,55],v=[110,110,55,55],k=[165,110,55,55],y=[220,165,55,55],A=[55,110,55,55],j=[110,165,55,55],w=[220,165,55,55],b=[220,220,55,55],x=[0,220,55,55],S=[55,220,55,55],C=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.jumping=!1,this.sliding=!1,this.jumpCount=0,this.slideCount=0,this.spriteSheet=new Image,this.spriteSheet.src="src/images/kakashi2.png",this.runAnimation=0,this.jumpAnimation=0,this.poseAnimation=0,this.slideAnimation=0,this.gameOver=!1}var i,n,C;return i=t,(n=[{key:"jump",value:function(){this.jumping&&(0!==this.jumpCount&&this.onGround()?1!==this.jumpCount||this.onGround()?(this.position[1]=220,this.jumpCount=0,this.jumping=!1):(this.jumpCount=0,this.position[1]-=o-s*this.jumpCount):(this.position[1]-=o-s*this.jumpCount,this.jumpCount+=1))}},{key:"slide",value:function(){this.sliding&&(0===this.slideCount||this.onGround()?(this.position[1]=230,this.slideCount+=1):(this.position[1]=220,this.slideCount=0,this.sliding=!1))}},{key:"onGround",value:function(){return 100===this.position[0]&&this.position[1]>=220}},{key:"toggleJump",value:function(){!0!==this.sliding&&(this.jumping=!0)}},{key:"toggleSlide",value:function(){!0!==this.jumping&&(this.sliding=!0)}},{key:"getFrame",value:function(){return this.gameOver&&this.poseAnimation<10?(this.poseAnimate+=1,x):this.gameOver&&this.poseAnimation<20?(this.poseAnimation+=1,S):this.gameOver&&20===this.poseAnimaton?(this.poseAnimation=0,x):this.sliding&&this.onGround()&&this.slideAnimation<50?(this.slideAnimation+=1,b):this.slideAnimation>=50?(this.sliding=!1,this.position[1]=220,this.slideAnimation=0,a):this.onGround()&&this.runAnimation<5?(this.runAnimation+=1,a):this.onGround()&&this.runAnimation<10?(this.runAnimation+=1,r):this.onGround()&&this.runAnimation<15?(this.runAnimation+=1,h):this.onGround()&&this.runAnimation<20?(this.runAnimation+=1,u):this.onGround()&&this.runAnimation<25?(this.runAnimation+=1,c):this.onGround()&&this.runAnimation<30?(this.runAnimation+=1,m):this.onGround()&&this.runAnimation>=30?(this.runAnimation=0,a):!this.onGround()&&this.jumpAnimation<4?(this.jumpAnimation+=1,l):!this.onGround()&&this.jumpAnimation<8?(this.jumpAnimation+=1,d):!this.onGround()&&this.jumpAnimation<12?(this.jumpAnimation+=1,g):!this.onGround()&&this.jumpAnimation<16?(this.jumpAnimation+=1,p):!this.onGround()&&this.jumpAnimation<20?(this.jumpAnimation+=1,f):!this.onGround()&&this.jumpAnimation<24?(this.jumpAnimation+=1,v):!this.onGround()&&this.jumpAnimation<30?(this.jumpAnimation+=1,k):!this.onGround()&&this.jumpAnimation<36?(this.jumpAnimation+=1,y):!this.onGround()&&this.jumpAnimation<46?(this.jumpAnimation+=1,A):!this.onGround()&&this.jumpAnimation<50?(this.jumpAnimation+=1,j):!this.onGround()&&this.jumpAnimation<54?(this.jumpAnimation+=1,w):!this.onGround()&&this.jumpAnimation>=54?(this.jumpAnimation=0,a):(this.slideAnimation=0,a)}},{key:"draw",value:function(t){t.clearRect(0,0,800,300);var i=this.getFrame();t.drawImage(this.spriteSheet,i[0],i[1],i[2],i[3],this.position[0],this.position[1],i[2],i[3])}},{key:"update",value:function(t){this.jump(),this.slide(),this.draw(t)}}])&&e(i.prototype,n),C&&e(i,C),t}();function G(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var R=4,E=1,O=50,I=function(){function t(i,n,e,s,o){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.image=n,this.speed=o,this.x=0,this.y=e,this.imgWidth=s,this.ctx=i;var a=this.imgWidth+60*E*R;this.rocks=[this.randomRock(a),this.randomRock(a+this.generateRockSpacing()),this.randomRock(a+4*this.generateRockSpacing())]}var i,n,e;return i=t,(n=[{key:"generateRockSpacing",value:function(){return Math.floor(500*Math.random()+150)}},{key:"randomRock",value:function(t){return{left:t,right:O+t,top:200,bottom:100,passed:!1}}},{key:"eachRock",value:function(t){this.rocks.forEach(t.bind(this))}},{key:"passedRock",value:function(t,i){this.eachRock((function(n){n.right<t.left&&(n.passed||(n.passed=!0,i()))}))}},{key:"collidesWith",value:function(t){var i=!1;return this.eachRock((function(n){var e,s;s=t,(e=n).left>s.right||e.right<s.left||e.top>s.bottom||e.bottom<s.top||(i=!0)})),i}},{key:"moveRocks",value:function(){if(this.eachRock((function(t){t.left-=R,t.right-=R})),this.rocks[0].right<=0){this.rocks.shift();var t=this.rocks[1].left+this.generateRockSpacing();this.rocks.push(this.randomRock(t))}}},{key:"drawRocks",value:function(){this.eachRock((function(t){this.ctx.fillStyle="grey",this.ctx.strokeStyle="black",this.ctx.fillRect(t.left,t.top,O,t.bottom)}))}},{key:"draw",value:function(){this.ctx.clearRect(0,0,1e3,300),this.ctx.drawImage(this.image,this.x,this.y),this.ctx.drawImage(this.image,this.x+this.imgWidth,this.y),this.imgWidth<1e3&&this.ctx.drawImage(this.image,this.x+2*this.imgWidth,this.y),this.x<=-this.imgWidth&&(this.x=0),this.scrollingBg()}},{key:"scrollingBg",value:function(){this.x-=this.speed}}])&&G(i.prototype,n),e&&G(i,e),t}(),P=n(0),B=n.n(P),W=function(t){document.getElementById("play-button").addEventListener("click",(function(i){document.getElementsByClassName("menu")[0].className="menu close",setTimeout((function(){return t.start("play")}),200)}))};function L(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var T=function(){function t(i,n,e,s,o){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=i,this.gameCanvas=n,this.kakashi=new C,this.obstacles=[],this.score=new B.a(1),this.muteMusic=!1,this.jump=this.jump.bind(this),this.slide=this.slide.bind(this),this.draw=this.draw.bind(this),this.createBackground(e,s,o),this.setButtonListeners(),W(this)}var i,n,e;return i=t,(n=[{key:"jump",value:function(t){"Space"!==t.code&&"KeyW"!==t.code&&"ArrowUp"!==t.code||!this.gamePlaying||(t.preventDefault(),this.kakashi.toggleJump())}},{key:"slide",value:function(t){"ControlLeft"!==t.code&&"KeyS"!==t.code&&"ArrowDown"!==t.code||!this.gamePlaying||(t.preventDefault(),this.kakashi.toggleSlide())}},{key:"setButtonListeners",value:function(){var t=this;this.gameCanvas.addEventListener("keydown",this.jump),this.gameCanvas.addEventListener("keydown",this.slide),this.gameCanvas.addEventListener("keydown",this.restart),this.gameCanvas.addEventListener("keydown",(function(i){"Escape"===i.code&&t.gamePlaying&&i.preventDefault()}))}},{key:"createBackground",value:function(t,i,n){var e=new Image;e.src="src/images/backgroundWater.jpg",this.bg=new I(t,e,-35,1400,1);var s=new Image;s.src="src/images/darkTrees.png",this.tree=new I(i,s,115,400,3);var o=new Image;o.src="src/images/grass.png",this.grass=new I(n,o,263,400,5)}},{key:"restart",value:function(){this.gamePlaying=!1,this.score=0,this.kakashi=new C}},{key:"gameOver",value:function(){return this.gameCanvas.collidesWith(this.kakashi.bounds())}},{key:"start",value:function(){document.getElementById("canvas").focus(),this.gamePlaying=!0,this.gameOver=!1,this.score.score=0,this.kakashi.position=[100,220],this.draw()}},{key:"draw",value:function(){this.gameOver||(requestAnimationFrame(this.draw),this.kakashi.update(this.ctx),this.score.drawScore(this.ctx),this.bg.draw(),this.tree.draw(),this.grass.draw(),this.grass.drawRocks(),this.grass.moveRocks())}}])&&L(i.prototype,n),e&&L(i,e),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas"),i=t.getContext("2d"),n=document.getElementById("bg-canvas").getContext("2d"),e=document.getElementById("tree-canvas").getContext("2d"),s=document.getElementById("grass-canvas").getContext("2d");new T(i,t,n,e,s)}))}]);
//# sourceMappingURL=main.js.map
function _load() {
  const music = document.getElementById("music");
  const sound = document.getElementById("sound");
  const root = document.getElementById("root");
  let step = 0;

  root.innerHTML = `
    <div id="startDiv">
      <h1>Készen állsz, hogy csatlakozz az egyik házhoz?</h1>
      <button class="startBtn" id="yesBtn">Igen, nagyon jó lesz!</button>
      <button class="startBtn" id="noBtn">Nem, félek...</button>
    </div>
    <img id="voldpic" src="./img/voldemort.jpg" class="disappear">
  `;
  document.getElementById("yesBtn").addEventListener("click", _start);
  document.getElementById("noBtn").addEventListener("click", _stop);
  const vold = document.getElementById("voldpic");

  function _start() {
    music.play();
    root.style.backgroundImage = "url('./img/hp-background.jpg')";
    newqa();
  }

  function _stop() {
    sound.play();
    vold.style.animation = "flash 2s infinite";
    vold.style.animationPlayState = "running";
    setTimeout(() => {
      vold.style.animationPlayState = "paused";
    }, 2001);
  }

  const clickA = (e) => {
    let btnId = e.target.id.split("-");
    let house = quiz[step].a[btnId[2]][1];
    score[house] += quiz[step].s;
    console.log(score);
    step++;
    if (step === quiz.length) {
      ende();
    } else newqa();
  };

  function ende() {
    root.innerHTML = `
    <div class='qa-cont'>
      <h2>Lássuk csak... a te házad nem más, mint a...</h2>
      <img id="hat" src="./img/sorting.gif">
      <div id="houseName"></div>
      <img id="housePic" src="">
    </div> 
    `;
    sound.src = "./audio/hmm-1.mp3";
    sound.volume = 0.5;
    sound.play();
    let win = 0;
    let great = 0;
    score.map((h, i) => {
      if (h > great) {
        great = h;
        win = i;
      }
    });
    console.log(win);
    setTimeout(() => {
      sound.src = "./audio/hmm-2.mp3";
      sound.volume = 0.9;
      sound.play();
      document.getElementById("hat").src = "./img/sorted.jpg";
      document.getElementById("houseName").innerHTML = houses[win];
      document.getElementById("houseName").style.color = colors[win];
      document.getElementById("housePic").src = `./img/${houses[win]}.jpg`;
      root.style.backgroundImage = `radial-gradient(black 80%, ${colors[win]} 20%)`;
    }, 3500);
  }

  function newqa() {
    let answers = ``;
    quiz[step].a.map((ans, index) => {
      answers += `<button class="startBtn answerBtn" id="abtn-${step}-${index}">${ans[0]}</button>`;
    });

    root.innerHTML = `
      <div class="qa-cont">
        <div class="question">
          ${quiz[step].q}
        </div>
        <div class="answer">
          ${answers}
        </div>
      </div>
    `;

    quiz[step].a.map((ans, index) => {
      document
        .getElementById("abtn-" + step + "-" + index)
        .addEventListener("click", clickA);
    });
  }
}

window.addEventListener("load", _load);

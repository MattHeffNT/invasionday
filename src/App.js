import { useEffect, useState } from 'react';
import './App.scss';

// css and html design by https://codepen.io/brundolf/pen/beagbQ

function App() {
  const [show, setShow] = useState(false);

  let audio = new Audio('./assets/congrats.mp3');
  audio.load();

  // toggle the selection with up and down arrow keys
  const toggleSelection = (e) => {
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    const upDown = e.nativeEvent.srcElement.offsetParent.className;

    if (upDown == 'down') {
      yes.classList.remove('selected');
      no.classList.add('selected');
    } else if (upDown == 'up') {
      no.classList.remove('selected');
      yes.classList.add('selected');
    }
  };

  // when you press the A button
  const aButton = () => {

    //UseState so that i can return different things to the gameboy screen

    const selected = document.querySelector('.selected').id;
    const screen = document.querySelector('.display');
    const screenText = document.querySelector('.displayAnswers');

    if (selected == 'yes') {
      // display gameover -- play derisive sound
      console.log('game over');
      setShow(true);
      document.querySelector('.display>p').innerHTML = `<p> Game over ya dumb dog </p>`;
    } else {
      // you win display fireworks...play music
      screen.classList.add('displayGif');
      screen.innerHTML = `<p> Congratulations, you're not gammin!!! </p>`;
      audio.play();

      // setShow(false);
    }
  };

  const restart = () => {
    window.location.reload(false);
  };

  return (
    <div className="gameboy" id="GameBoy">
      <div className="screen-area">
        <div className="power">
          <div className="indicator">
            <div className="led"></div>
            <span className="arc" style={{ zIndex: '2' }}></span>
            <span className="arc" style={{ zIndex: '1' }}></span>
            <span className="arc" style={{ zIndex: '0' }}></span>
          </div>
          POWER
        </div>

        <div className="display" id="mainCanvas">
          <p> Do you support Invasion Day ?</p>

          <div className="displayAnswers">
            {show ? (
              (<h1>Game Over</h1>),
              <iframe
                width="200"
                height="115"
                src="https://www.youtube.com/embed/NqcFg4z6EYY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div>
                <p
                  id="yes"
                  name="option"
                  value="Yes"
                  className="selected"
                  onClick={(e) => toggleSelection(e)}
                >
                  Yes
                </p>
                <p id="no" name="option" value="No">
                  No I'm not a dumb dog
                </p>
              </div>
            )}
          </div>
          <p style={{ paddingTop: '3em' }}> press start to restart </p>
        </div>

        <div className="label">
          <div className="title">GAME BOY</div>
          <div className="subtitle"></div>
        </div>
      </div>

      <div className="nintendo">Nintendo</div>

      <div className="controls">
        <div className="dpad">
          <div className="up" onClick={(e) => toggleSelection(e)}>
            <i className="fa fa-caret-up"></i>
          </div>
          <div className="right">
            <i className="fa fa-caret-right"></i>
          </div>
          <div className="down">
            <i className="fa fa-caret-down" onClick={(e) => toggleSelection(e)}></i>
          </div>
          <div className="left">
            <i className="fa fa-caret-left"></i>
          </div>
          <div className="middle"></div>
        </div>
        <div className="a-b">
          <div className="b">B</div>
          <div className="a" onClick={aButton}>
            A
          </div>
        </div>
      </div>

      <div className="start-select">
        <div className="select">SELECT</div>
        <div className="start" onClick={restart}>
          START
        </div>
      </div>

      <div className="speaker">
        <div className="dot placeholder"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot placeholder"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>

        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>

        <div className="dot placeholder"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot closed"></div>
        <div className="dot open"></div>
        <div className="dot placeholder"></div>
      </div>
    </div>
  );
}

export default App;

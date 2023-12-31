import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blurBackground, tetrisLevel, tetrisRows, tetrisScore, typedWords, typingAccuracy, wordsPerMinute, wordsPerMinuteScores } from '../helper/gameSignals';
import LineChartWPM from './LineChartWPM';
import { useEffect } from 'react';

const GameOverScreen = ({startGame}) => {

    function getWpmData() {
        return {
            labels: wordsPerMinuteScores.value.map((stat, index) => index + 1),
            datasets: [
                {
                    label: "WPM",
                    data: wordsPerMinuteScores.value,
                    backgroundColor: "rgba(170, 50, 220, .3)",
                    yAxisID: "wpm",
                    borderColor: "rgba(170, 50, 220, .3)",
                    fill: {
                        target: 'origin',
                        above: 'rgba(250, 230, 230, 0.6)',   // Area will be red above the origin
                      },
                    borderWidth: 4,
                    lineTension: 0.4,  
                }
            ]
        }
    }

    useEffect(() => {
        blurBackground.value = true;
        return () => blurBackground.value = false;
    }, [])

    return (
    <StyledGameOverScreen>
        <div className='title'>
            <h2>Game Over</h2>
            <p>Press Alt+R to restart</p>
        </div>
        <hr />
        <div className='statsContainer'>
            <div className='stats'>
            <h3>Tetris Stats</h3>
                <span>Score</span>
                <span>{tetrisScore.value}</span>
                <span>Rows</span>
                <span>{tetrisRows.value}</span>
                <span>Level</span>
                <span>{Math.floor(tetrisLevel.value)}</span>
            </div>
            <div className='stats'>
                <h3>Typing Stats</h3>
                <span>Words</span>
                <span>{typedWords.value}</span>
                <span>WPM</span>
                <span>{wordsPerMinute.value}</span>
                <span>Accuracy</span>
                <span>{typingAccuracy.value}</span>
            </div>
        </div>
        <hr />

        <LineChartWPM chartData={getWpmData()} />
        <button className="restartButton" onClick={startGame}>Restart</button>
        <div className="link">
            <Link to={"stats"}>
                Stats
            </Link>
            <Link to={"setting"}>
                Setting
            </Link>
        </div>
   
    </StyledGameOverScreen>
)}


const StyledGameOverScreen = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    height: max-content;
    width: max-content;
    border-radius: 20px;
    border: none;
    background: white;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    width: 80%;
    height: 80%;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    z-index: 3;

    h2 {
        text-align: center;
        padding: 20px 0;
    }

    p {
        text-align: center;
        margin-bottom: 1em;
        font-family: monospace;
    }

    .statsContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .stats {
        display: grid;
        row-gap: 10px;
        column-gap: 10px;
        grid-template-columns: min-content;
        grid-template-rows: repeat(2, auto);
        margin: 0 0 1em 0;
    }

    h3 {
        text-align: left;
        padding: 15px 0;
        grid-column: 1 / 3;
    }

    .controls {
        display: flex;
        flex-direction: row;
    }

    .restartButton {
        width: 50%;
        height: 60px;
        min-height: 30px;
        background: #333;
        border-radius: 20px;
        font-family: Pixel,Arial,Helvetica,sans-serif;
        cursor: pointer;
        font-size: 1rem;
        color: white;
        justify-self: center;
        align-self: center;
        margin: 20px 0;
        margin:  auto;
    }

    .restartButton:hover {
        width: 51%;
    }

    hr {
        margin: 3px 0;
    }

    .link {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-end;
        margin: 0 0 20px 0;
        text-decoration: none;
    }

    @media (max-width: 700px) {
        position: fixed;
        width: 100vw;

    }
`;

export default GameOverScreen;
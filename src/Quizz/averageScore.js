import { useState } from "react";
import Input from "../components/comGrade/Input";

const Quiz = () => {
    const [typeNum, SetType] = useState('number')
    const [typeSub, SetTypeSub] = useState('submit')
    const [math, setMath] = useState()
    const [sain, setSain] = useState()
    const [fis, setFis] = useState()
    const [kim, setKim] = useState()
    const [bio, setBio] = useState()
    const [score, setScore] = useState()
    const [grade, setGrade] = useState('')

    const scoreMath = (e) => {
        setMath(e.target.value)
    }
    const scoreSain = (e) => {
        setSain(e.target.value)
    }
    const scoreFisika = (e) => {
        setFis(e.target.value)
    }
    const scoreKimia = (e) => {
        setKim(e.target.value)
    }
    const scoreBiologi = (e) => {
        setBio(e.target.value)
    }

    const reset = () => {
        window.location.reload();
    }

    const SubmitScore = (e) => {
        e.preventDefault()
        const total = Number(math) + Number(sain) + Number(fis) + Number(kim) + Number(bio)
        const avTotal = total / 5
        setScore(avTotal)

        if (avTotal > 80.1) {
            setGrade('A')
        } else if (avTotal >= 72.01 && avTotal <= 80) {
            setGrade('AB')
        } else if (avTotal >= 64.01 && avTotal <= 72) {
            setGrade('B')
        } else if (avTotal >= 56.01 && avTotal <= 64) {
            setGrade('BC')
        } else if (avTotal >= 48.01 && avTotal <= 56) {
            setGrade('C')
        } else if (avTotal >= 40.01 && avTotal <= 48) {
            setGrade('D')
        } else {
            setGrade('E')
        }
    }

    return (
        <div className="form-nilai">
            <form onSubmit={SubmitScore}>
                <div className="header">
                    <h1>Input SCORE</h1>
                </div>
                <div className="inp-grup">
                    <label htmlFor="">Input Mathematic Score</label>
                    <div className="inp">
                        <Input type={typeNum} fungsi={scoreMath} />
                    </div>
                </div>
                <div className="inp-grup">
                    <label htmlFor="">Input Saintek Score</label>
                    <div className="inp">
                        <Input type={typeNum} fungsi={scoreSain} />
                    </div>
                </div>
                <div className="inp-grup">
                    <label htmlFor="">Input Fisika Score</label>
                    <div className="inp">
                        <Input type={typeNum} fungsi={scoreFisika} />
                    </div>
                </div>
                <div className="inp-grup">
                    <label htmlFor="">Input Kimia Score</label>
                    <div className="inp">
                        <Input type={typeNum} fungsi={scoreKimia} />
                    </div>
                </div>
                <div className="inp-grup">
                    <label htmlFor="">Input Biologi Score</label>
                    <div className="inp">
                        <Input type={typeNum} fungsi={scoreBiologi} />
                    </div>
                </div>
                <div className="inp-submit">
                    <Input type={typeSub} />
                </div>
            </form>
            <div className="result-score">
                {score != null &&
                    <div className="result">
                        <h1>YOUR SCORE</h1>
                        <div className="score">
                            <h1>{score}</h1>
                        </div>
                        <div className="grade">
                            <h1>Your Gradding</h1>
                            <b>{grade}</b>
                        </div>
                        <a onClick={reset}>RESET</a>
                    </div>
                }
            </div>
        </div>
    );
}

export default Quiz
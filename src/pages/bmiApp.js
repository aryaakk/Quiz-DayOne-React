import { useState } from 'react';
import logo from './../logo.svg';
import Input from '../components/comBMI/button';
import './../components/comBMI/bmiStyle.css'

function App() {

    const [Nomweight, setNomWeight] = useState(0)
    const [typeCalc, setTypeCalc] = useState('number')
    const [Nomheight, setNomHeight] = useState(0)
    const [submit, setSubmit] = useState('submit')
    const [bmi, setBmi] = useState()
    const [ket, setKet] = useState('')

    const ChangeWeight = (e) => {
        setNomWeight(e.target.value)
    }
    const ChangeHeight = (e) => {
        setNomHeight(e.target.value)
    }

    const SubmitClick = (e) => {
        e.preventDefault()
        const total = Nomweight / (Nomheight / 100 * Nomheight / 100)
        setBmi(total)
        if (total < 18.5) {
            setKet('ANDA KURANG BERAT BADAN')
        } else if (total >= 18.5 && total <= 22.9) {
            setKet('BERAT BADAN ANDA NORMAL')
        } else if (total >= 23 && total <= 24.9) {
            setKet('BERAT BADAN ANDA KELEBIHAN')
        } else if (total >= 25 && total <= 29.5) {
            setKet('ANDA OBESITAS TINGKAT 1')
        } else if (total >= 30) {
            setKet('ANDA SUDAH OBESITAS MENDING DIET DARIPADA MATI')
        } else {
            setKet('MASUKKIN YANG BENER BRE')
        }
    }

    return (
        <div className='wrapper'>
            <div className='box'>
                <form onSubmit={SubmitClick}>
                    <div className="header">BMI CALCULATOR</div>
                    <label htmlFor="">BERAT</label>
                    <Input fungsi={ChangeWeight} type={typeCalc} />
                    <label htmlFor="">TINGGI</label>
                    <Input fungsi={ChangeHeight} type={typeCalc} />
                    <div className="sub">
                        <Input type={submit} />
                    </div>
                </form>
            </div>
            {bmi != null &&
                <div className="hasilBmi">
                    <p>BMI ANDA {bmi}</p>
                    <span>{ket}</span>
                </div>
            }
            {bmi == null &&
                <div className="hasilFalse">

                </div>
            }
        </div>
    );
};

export default App;
{/* <button onClick={kurangHandeler}>-</button> */ }
        // switch (parseFloat(total)) {
        //     case parseFloat(total) < 18.5:
        //         setKet('ANDA KURANG BERAT BADAN')
        //         break;
        //     case parseFloat(total) >= 18.5 && parseFloat(total) <= 22.9:
        //         setKet('BERAT BADAN ANDA NORMAL')
        //         break;
        //     case parseFloat(total) >= 23 && parseFloat(total) <= 24.9:
        //         setKet('BERAT BADAN ANDA KELEBIHAN')
        //         break;
        //     case parseFloat(total) >= 25 && parseFloat(total) <= 29.5:
        //         setKet('ANDA OBESITAS TINGKAT 1')
        //         break;
        //     case parseFloat(total) >= 30:
        //         setKet('ANDA SUDAH OBESITAS MENDING DIET DARIPADA MATI')
        //         break;
        //     default:
        //         setKet('MASUKKIN YANG BENER BRE')
        //         break;
        // }

import react from 'react';

const Button = (props) => {

    // return <button onClick={clickbutton}>Button {props.fullName}</button>;
    return (
        <button onClick={props.fungsi}>{props.nama}</button>
    );
};
export default Button;
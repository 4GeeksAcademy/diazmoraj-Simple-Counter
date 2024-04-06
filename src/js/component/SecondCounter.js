import React from "react";

const SecondCounter = (props) => {

    let digito1 = Math.floor(props.seconds/1%10);
    let digito2 = Math.floor(props.seconds/10%10);
    let digito3 = Math.floor(props.seconds/100%10);
    let digito4 = Math.floor(props.seconds/1000%10);
    let digito5 = Math.floor(props.seconds/10000%10);
    let digito6 = Math.floor(props.seconds/100000%10);

    return(
        <div className="container box-timer">
            <div>
                <h3><i class="fa-solid fa-clock"></i></h3>
            </div>
            <div>
                <h3>{digito6}</h3>
            </div>
            <div>
                <h3>{digito5}</h3>
            </div>
            <div>
                <h3>{digito4}</h3>
            </div>
            <div>
                <h3>{digito3}</h3>
            </div>
            <div>
                <h3>{digito2}</h3>
            </div>
            <div>
                <h3>{digito1}</h3>
            </div>
        </div>
    );
};

export default SecondCounter;
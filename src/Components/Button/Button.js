import React from "react"

const ButtonDesign =(buttonText)=>{
    <button className="button">{buttonText}</button>
}
 
const Button =()=>{
    <div>
        <ButtonDesign buttonText="Apple"/>
        <ButtonDesign buttonText="Mango"/>
        <ButtonDesign buttonText="guava"/>
    </div>
}


export default Button
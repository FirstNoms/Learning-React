import React, {useState} from "react";
import Input from "./component/Name";

const Form = (props)=> {

    const [inputValue, setInputValue] = useState("")
    return(
        <form>rr
            {/*<Input value={inputValue.toUpperCase()} onChange={(e) => setInputValue(e.target.value)} labelName="First name"/>*/}
            <Input value={inputValue.replace(/\d/g, "")} onChange={(e) => setInputValue(e.target.value)} labelName="First name"/>
            <Input labelName="Last name"/>
            <Input labelName="Email" type="email" placeholder="Enter email"/>
            <Input labelName="Password" type="password" placeholder=""/>

        </form>
    )
}
export default Form;
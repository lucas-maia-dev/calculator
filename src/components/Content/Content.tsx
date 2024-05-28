import { IButton } from "@/Interfaces/IButton";
import Button from "../Button/Button";
import styles from "./Content.module.css"
import { useEffect, useState } from "react";

export default function Content() {
    const buttons: IButton[] = [
        {name: "AC", class: "primary-button", type: "clear"}, {name: "+/-", class: "primary-button", type: ""}, {name: "%", class: "primary-button", type: ""}, {name: "/", class: "secondary-button", type:""},
        {name: "7", class: "primary-button", type: "number"}, {name: "8", class: "primary-button", type: "number"}, {name: "9", class: "primary-button", type: "number"}, {name: "X", class: "secondary-button", type:""},
        {name: "4", class: "primary-button", type: "number"}, {name: "5", class: "primary-button", type: "number"}, {name: "6", class: "primary-button", type: "number"}, {name: "-", class: "secondary-button", type:""},
        {name: "1", class: "primary-button", type: "number"}, {name: "2", class: "primary-button", type: "number"}, {name: "3", class: "primary-button", type: "number"}, {name: "+", class: "secondary-button", type:""},
        {name: "0", class: "primary-button", type: "number"}, {name: ".", class: "primary-button", type: ""}, {name: "=", class: "primary-button", type: ""}
    ];

    const  [currentString, setCurrentString] = useState<string>("")

    useEffect(() => {
        console.log(currentString); // Access the updated value here
      }, [currentString]); 

    const handleClick = (button: string, type?: string) =>{
        let newValue = currentString
        if(type == "number"){
            newValue += button
        }else if(type == "clear"){
            newValue = ""
        }
        setCurrentString(newValue)
    }

    function checkKeyPressed(e: any){
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            handleClick(e.key)
        }else if(e.keyCode == 8){
            setCurrentString(currentString.slice(0, -1))
        }
    }
    
    return (
        <div className={styles.contentCalculator}>
            <div className={styles.contentResult}>
                <p>{currentString == ""
                        ? "0"
                        : currentString
                    }
                </p>
            </div>
            <div className={styles.contentButtons}>
                {buttons.map((b, i) => (
                    <Button 
                        onClick={()=>{handleClick(b.name, b.type)}} 
                        key={i} 
                        value={b.name} 
                    />
                ))}
            </div>
        </div>
    );
  }



  // fix
  // error textarea 
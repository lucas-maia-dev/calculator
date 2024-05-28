import { IButton } from "@/Interfaces/IButton";
import Button from "../Button/Button";
import styles from "./Content.module.css"
import { useEffect, useState } from "react";

export default function Content() {
    const [themeMode, setThemeMode] = useState<string>("dark-mode");
    const [currentString, setCurrentString] = useState<string>("");
    const buttons: IButton[] = [
        {name: "AC", class: "primary-button", type: "clear"}, {name: "+/-", class: "primary-button", type: ""}, {name: "%", class: "primary-button", type: ""}, {name: "/", class: "secondary-button", type:""},
        {name: "7", class: "primary-button", type: "number"}, {name: "8", class: "primary-button", type: "number"}, {name: "9", class: "primary-button", type: "number"}, {name: "X", class: "secondary-button", type:""},
        {name: "4", class: "primary-button", type: "number"}, {name: "5", class: "primary-button", type: "number"}, {name: "6", class: "primary-button", type: "number"}, {name: "-", class: "secondary-button", type:""},
        {name: "1", class: "primary-button", type: "number"}, {name: "2", class: "primary-button", type: "number"}, {name: "3", class: "primary-button", type: "number"}, {name: "+", class: "secondary-button", type:""},
        {name: "0", class: "primary-button", type: "number"}, {name: ".", class: "primary-button", type: ""}, {name: "=", class: "primary-button", type: ""}
    ];

    useEffect(() => {
        console.log(currentString);
      }, [currentString]); 

    function handleClick(button: string, type?: string){
        let newValue = currentString
        if(type == "number"){
            newValue += button
        }else if(type == "clear"){
            newValue = ""
        }
        setCurrentString(newValue)
    }

    function changeMode(){
        const mode = themeMode == "light-mode" ? "dark-mode" : "light-mode";
        setThemeMode(mode)
    }

    function checkKeyPressed(e: any){
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            handleClick(e.key)
        }else if(e.keyCode == 8){
            setCurrentString(currentString.slice(0, -1))
        }
    }
    
    return (
        <div className={`${styles.container} ${themeMode}`}>
            <div className={`${styles.contentCalculator}`}>
                <div>
                    <Button value="" onClick={()=>{changeMode}} />
                </div>
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
        </div>
    );
  }



  // fix
  // error textarea 
  // padronizar funções 
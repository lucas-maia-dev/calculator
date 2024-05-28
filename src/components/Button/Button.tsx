import styles from "./Button.module.css"

export default function Button(props:{onClick:()=> void, value: string}) {
    return (
        <button onClick={props.onClick} className={styles.button}>{props.value}</button>
    );
  }
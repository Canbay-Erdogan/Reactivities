import { Duck } from "./demo";

interface Props {
    d: Duck;
}

export default function duckItem(props: Props) {
    return (
        <div key={props.d.name}>
            <span>{props.d.name}</span>
            <button onClick={() => props.d.makeSound(props.d.name + 'quack')}>Make a sound</button>
        </div>
    )
}
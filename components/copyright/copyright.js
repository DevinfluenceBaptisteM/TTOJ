export default function Copyright(props){
    return (
        <span onClick={props.onClick}>
            Copyright - {props.year} - {props.company}.
        </span>
    )
}
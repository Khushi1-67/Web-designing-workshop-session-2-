function Course(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Course Code: {props.code}</p>
            <p>Duration: {props.duration}</p>
        </div>
    )
}

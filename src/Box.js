
const Box = ({id, boxWidth, boxHeight, boxColor, handleRemove}) => {
    return (
        <div style={{backgroundColor: boxColor, width: boxWidth + 'px', height: boxHeight + 'px'}}>
            <button onClick={() => handleRemove(id)}>remove box</button>
        </div>
    )
}

export default Box;
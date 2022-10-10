import { useState } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const newBox = box => {
        setBoxes(boxes => [...boxes, box]);
    }

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    
    const boxComps = boxes.map(box => (
        <Box key={box.id} id={box.id} boxWidth={box.width} boxHeight={box.height} boxColor={box.color} handleRemove={removeBox}/>
    ));

    return(
        <>
        <NewBoxForm newBox={newBox}/>
        {boxComps}
        </>
        )
}

export default BoxList;
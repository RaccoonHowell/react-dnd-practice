import React, {useState} from "react" 
import DraggableDiv from "./DraggableDiv"
import { useDrop } from "react-dnd"
import DroppableDiv from "./DroppableDiv"

const divContentList = [
    {
        id: 1,
        string: "drag1"
    },
    {
        id: 2,
        string: "drag2"
    },
    {
        id: 3,
        string: "drag3"
    }
]

const DragDrop = () => {
    return (
        <>
            <div className="gridContainer draggableStuff">
                {divContentList.map(object => {
                    return <DraggableDiv key={object.id} string={object.string} id={object.id}/>
                })}
            </div>

            <DroppableDiv />
            <DroppableDiv />
            <DroppableDiv />
        </>
    )
}

export default DragDrop
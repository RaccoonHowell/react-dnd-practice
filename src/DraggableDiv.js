import React from "react"
import { useDrag } from "react-dnd"

const DraggableDiv = ({id, string}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "div",
        item: {id: id, string: string},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div ref={drag} className="gridSquare" style={{border: isDragging ? "5px pink solid" : "blue 1px solid"}}>{string}</div>
    )
}

export default DraggableDiv
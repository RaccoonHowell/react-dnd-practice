import React, {useState} from "react" 
import { useDrop } from "react-dnd"

const DroppableDiv = () => {
    const [dropSquare, setDropSquare] = useState("drop")

    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        // drop: () => setDropSquare("dropped"),
        drop: (item) => setDropSquare(item.string),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    return (
        <div className="gridSquare" style={{border: isOver ? "green solid 5px" : "black solid 1px"}} ref={drop}>{dropSquare}</div>
    )
}

export default DroppableDiv
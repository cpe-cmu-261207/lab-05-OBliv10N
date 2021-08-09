import { useState } from "react";

function Pages(prop: any) {
    const { Data, Dels, DoNe, index } = prop
    const [Boo, setBoo] = useState(false) 
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseOver = {(ev) => setBoo(ev.bubbles)} onMouseLeave  = {() => setBoo(false)}>
            <span className="text-2xl"> {Data.title} </span>
            <div className="flex space-x-1 items-center">
                <button style = {{visibility: Boo ? "visible" : "hidden"}} className="bg-green-400 w-24 text-2xl" onClick={() => DoNe(index)}>Done</button>
                <button style = {{visibility: Boo ? "visible" : "hidden"}} className="bg-red-400 w-24 text-2xl" onClick={() => Dels(index)}>Delete</button>
            </div>
        </div>
    );
}

export default Pages;
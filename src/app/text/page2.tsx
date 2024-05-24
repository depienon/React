import { constants } from "fs/promises"
import { useState } from "react"

const page = ()=>{
    const [color, setColor] useState: ("yellow")
    const [colorName, setCOlorName] useState: ("you clicked yellow")
    return <div>
        <div style={{width: 100, height: 100, borderRadius: 5, backgroundColor: colorName,}}></div>
        <div style={{width: 100, height: 100, borderRadius: 5, backgroundColor: colorName,}}></div>
        <div style={{width: 100, height: 100, borderRadius: 5, backgroundColor: colorName,}}></div>
        <div style={{width: 100, height: 100, borderRadius: 5, backgroundColor: colorName,}}></div>
        <div style={{width: 100, height: 100, borderRadius: 5, backgroundColor: colorName,}}></div>

        <div>
            <button onClick={()=>setColorName("you clicked green")}>Green</button>
            <button onClick={()=>setColorName("you clicked blue")}>Blue</button>
            <button onClick={()=>setColorName("you clicked yellow")}>Yellow</button>
            <button onClick={()=>setColorNmae("you clicked black")}>Black</button>
        </div>
    </div>
}

export default page
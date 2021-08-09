import { useState } from "react"
import Line from "./Line"
import Pages from "./Pages"
const DoneArr: any[] = []

function Todo() {

    const [Title1, setTitle1] = useState([{ title: "I am another task" }])
    const [Title2, setTitle2] = useState("")

    function del(x: any) {
        const newArray = [...Title1]
        newArray.splice(x, 1)
        setTitle1(newArray)
    }

    function aDD(text1: any) {
        const newArray1 = [...Title1, { title: text1 }]
        setTitle1(newArray1)
    }

    function DonE(y: any) {
        const newArray2 = [...Title1]
        DoneArr.push(newArray2[y])
        del(y)
    }

    const Donne = DoneArr.map((data,index) => {
        return <Line key = {index} Data = {data}></Line>
    }).reverse()

    const Showpage = Title1.map((data, index) => {
        return <Pages key={index} Data={data} Dels={del} DoNe={DonE} index={index} />
    }).reverse()


    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key == "Enter") {
            if (ev.currentTarget.value == "") {
                alert("Task cannot be empty")
            } else {
                aDD(ev.currentTarget.value)
                setTitle2("")
            }
        }

    }

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl' value={Title2} onChange={(Event) => setTitle2(Event.target.value)} onKeyDown={onKeyDownCallback}></input>
                <button type='submit' className='border border-gray-400 w-8 font-bold'
                    onClick={ev => {
                        ev.preventDefault()
                        if (Title2 != "") {
                            aDD(Title2)
                            setTitle2("")
                        } else {
                            alert("Task cannot be empty")
                        }
                    }
                }
                >+</button>
            </div>
            {Showpage}
            {Donne}
        </div>
    );
}

export default Todo;
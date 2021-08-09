import { title } from "process"
import { useState } from "react"
import Pages from "./Pages"

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

    const DoneArr: any[] = []
    function DonE(y: any) {
        const newArray2 = [...Title1]
        DoneArr.push(newArray2[y])
        del(y)
    }

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

            {/* task input and add button */}
            <div className='flex space-x-1'>
                <input
                    value={Title2}
                    onChange={(Event) => setTitle2(Event.target.value)}
                    className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} > </input>
                <button className='border border-gray-400 w-8 font-bold'
                    onClick={ev => {
                        ev.preventDefault()
                        if (Title2 != "") {
                            aDD(Title2)
                            setTitle2("")
                        } else {
                            alert("Task cannot be empty")
                        }
                    }}
                >+</button>
            </div>
            {Showpage}
            {/* tasks section */}
        </div>);
}

export default Todo
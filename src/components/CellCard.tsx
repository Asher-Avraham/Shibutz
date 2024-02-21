'use client'
import { useState } from 'react'
type propTypes = {
    content: string | number
    handleCellChange: (newValue: string) => void
}
const CellCard = ({ content, handleCellChange }: propTypes) => {
    const [editable, setEditable] = useState(false)

    const handleChange = (e) => {
        console.log('inside cellcard handle change')
        const newValue = e.target.value
        handleCellChange(newValue)
    }
    return (
        <div
            onClick={handleClick}
            className="rounded-xl flex items-center justify-center bg-red-100 p-1 cursor-pointer">
            {editable ? (
                <input
                    type="text"
                    value={content}
                    onChange={(e) => handleChange(e)}
                    // onClick={() => console.log('inside cellcard')}
                    className="cursor-default"
                />
            ) : (
                <div onClick={() => setEditable(true)}>{content}</div>
            )}
        </div>
    )
}

export default CellCard

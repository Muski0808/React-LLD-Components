import React, { useState } from 'react'

function Folder({name, contents, onAddFolder}) {
    const[isOpen, setIsOpen]= useState(false)

    const toggleOpen=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div style={{marginLeft: "20px"}}>
        <div onClick={toggleOpen} style={{cursor: "pointer"}}>
            {isOpen? "📂" : "📁"} {name}
        </div>
        {isOpen && (
            <div>
            {contents.map((item,index)=>{
                return item.type === "folder" ?(
                    <Folder key={index} name={item.name} contents={item.contents} onAddFolder={onAddFolder} />
                ):(
                    <div key={index} style={{marginLeft: "20px"}}>
                        📄{item.name}
                    </div>
                )
            })}
            <button onClick={()=> onAddFolder(name)}>Add Folder</button>
        </div>
        )}
    </div>
  )
}

export default Folder
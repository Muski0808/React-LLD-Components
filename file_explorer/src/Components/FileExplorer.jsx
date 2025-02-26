import React, { useState } from 'react';
import Folder from './Folder';

const initialData=[
  {name: "Document", type: "folder", contents:[]},
  {name: "Music", type: "folder", contents:[]},
  {name: "Photos", type: "folder", contents:[]},
]

function FileExplorer() {
  const[folders,setFolder]= useState(initialData)

  const addFolder=(parentName)=>{
    const newFolderName= prompt("Enter folder Name:")
    if(!newFolderName) return;

    const newFolder= {name: newFolderName, type: "folder", contents:[]}
    const updateFolder=(items)=>{
      return items.map((item)=>{
        if(item.name=== parentName){
          return {...item, contents:[...item.contents,newFolder]}
          
        }
        if(items.contents){
          return {...item, contents:updateFolder(item.contents)}
        }
        return item;
      })
    }
    setFolder(updateFolder(folders))
  }
  return (
    <div>
      {folders.map((folder, index)=>(
        <Folder key={index} name={folder.name} contents={folder.contents} onAddFolder={addFolder} />
      ))}
    </div>
  )
}

export default FileExplorer
"use client"


import { InputList, List } from "@/components/Components"
import { ListAction, listReducer } from "@/redurcers/listReducer"
import { item } from "@/types/item"
import { type } from "os"
import { useEffect, useReducer, useState } from "react"

export const Page = ()=>{


   
  const [list, dispatch] = useReducer(listReducer,[]);

  const addItem = (text:string)=>{
   if(text !== ""){
    dispatch({
      type:"add",
      payload:{
        text:text
      }
    })
   }else{
    alert("Digite uma tarefa")
   }
  }

  const EditItem = (id:number,text:string)=>{
    dispatch({type:"edit",payload:{
      id:id,
      text:text
    }})
  }

  const editDone = (id:number)=>{
    dispatch({type:"editDone",payload:{id:id}})
  }

  const remove = (id:number)=>{
    dispatch({type:"remove",payload:{id:id}})
  }

  return(
    <div className="w-full h-full">
   <h1 className="text-4xl text-center font-bold mt-5">Lista de tarefas</h1>
<InputList add={addItem}/>
<List lista={list} alterarStatus={editDone}editar={EditItem}remover={remove}/>

    </div>
  )
}

export default Page
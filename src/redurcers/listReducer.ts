import { item } from "@/types/item";
import { type } from "os";

type addAction = {
    type:"add"
    payload:{text:string}
}

type editTextAction = {
    type: "edit"
    payload:{id:number,text:string}
}

type editDoneAction = {
    type:"editDone"
    payload:{id:number}
}
 type removeAction ={
    type:"remove"
    payload:{id:number}
 }

export type ListAction = addAction | editDoneAction | editTextAction | removeAction

export const listReducer = (list:item[],action:ListAction):item[]=>{

    switch(action.type){
        case "add":
            return [...list,{
                id:Math.floor(Math.random()*100),
                text:action.payload.text,
                done:false
            }]

        case "edit":
            return list.map((item)=>{
                if(item.id === action.payload.id){
                    return {
                        ...item, text:action.payload.text
                    }
                }else{
                    return item
                }
            })

        case "editDone":
            return list.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,done: !item.done}
                }else{
                    return item
                }
            })


        case "remove":
             return list.filter((item)=>{
                if(item.id !== action.payload.id){
                    return item
                }
             })
        default:
            return list
    }



}
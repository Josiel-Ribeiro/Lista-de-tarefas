import { useState } from "react"

type Props = {
    save:(id:number,text:string)=>void,
    id:number,
    text:string
}
export const Editar = ({id,save,text}:Props)=>{

   const [value, setvalue] = useState(text)

return(
    <div className="fixed w-full h-full bg-black/70 left-0 top-0 flex justify-center items-center">
        <input value={value} onChange={e => setvalue(e.target.value)}  type="text"  className=" text-white border-b border-green-500 bg-black/0 w-96 outline-none"/> <br />
        <button onClick={()=>save(id,value)} className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md">Salvar</button>
    </div>
)


}
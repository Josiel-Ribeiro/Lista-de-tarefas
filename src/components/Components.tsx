import { item } from "@/types/item";
import { type } from "os";
import { useEffect, useState } from "react";
import { TelaEdit } from "./ComponentsEdit";

type PropsInput = {
  add: (text: string) => void;
};

export const InputList = ({ add }: PropsInput) => {
  const [valor, setValor] = useState("");

  const [expandir, setexpandir] = useState(false);

 

  useEffect(() => {
    setexpandir(true);
  }, []);

  const Adicionar = (text: string) => {
    add(text);
    setValor("");
  };

  const widthClass = expandir ? "w-8/12" : "w-0";
  const widthClassButton = expandir ? "w-36" : "w-0";

  return (
    <div
      className={`transition-all duration-1000 ${widthClass} h-14 rounded-md mt-12 mx-auto flex justify-center items-center`}
    >
      <input
      
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        type="text"
        className=" w-full h-full rounded-md mx-auto bg-gray-600 text-center text-white outline-green-500"
      />
      <button
        onClick={() => Adicionar(valor)}
        className={`transition-all duration-1000 ${widthClassButton} h-14 text-white bg-green-500 rounded-md`}
      >
        Adicionar
      </button>
    </div>
  );
};

type PropsList = {
  lista: item[];
  remover:(id:number)=>void
  editar:(id:number,text:string)=>void
  alterarStatus:(id:number)=>void
};

export const List = ({ lista,alterarStatus,editar,remover }: PropsList) => {
  const [expandir, setexpandir] = useState(false);
  const [show,setShow]= useState(false)
  const [itemEditar,setItemEdit] = useState(0)
  const [text,setText] = useState("")
 
 const functionEdit = (id:number,text:string)=>{
    setShow(true)
    setItemEdit(id)
    setText(text)
   
  

  }

  const edicao = (id:number,text:string)=>{
 
    editar(id,text)
    setShow(false)


  }

  useEffect(() => {
    setexpandir(true);
  });

  const heigthClass = expandir ? "h-96" : "h-0";

  return (
    <div
      className={`transition-all duration-1000 w-8/12 ${heigthClass} overflow-hidden mx-auto mt-3 bg-gray-500 rounded-md`}
    >
        {show && <TelaEdit/>}
      <table className=" w-11/12 mx-auto text-center">
        <tr className="text-green-400">
            <th className="w-1/2"><p>TAREFAS</p></th>
            <th className="w-1/2"><p>EDIÇÕES</p></th>
        </tr>
        {lista.map((item) => {
          return (
            <tr key={item.id} className="mb-5 ">
              <td>
                <p className={`${item.done?"line-through text-green-400":""} text-center text-white`} >{item.text} </p>
              </td>
             
              <td>
              <button onClick={()=>remover(item.id)} className="text-lg font-bold text-red-400">X</button>
              <button onClick={()=>functionEdit(item.id,item.text)} className="text-lg font-bold ml-5 text-black">Editar</button>
                
                <button onClick={()=> alterarStatus(item.id)} className= {`${item.done?" text-green-400":"text-white"} w-24 py-2`}>{!item.done && "Concluir"} {item.done && "Reverter"}</button>
              
              
              </td>

            </tr>
          );
        })}
      </table>
    </div>
  );
};

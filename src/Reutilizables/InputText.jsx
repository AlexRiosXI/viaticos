const InputText = ({funcion,tag,pholder,type}) => {
    return ( 
        <div className="input-text">
            <p className="tag">{tag}</p>
            <input onChange={()=>funcion()} type={type} placeholder={pholder}/>
            
        </div>
     );
}
 
export default InputText;
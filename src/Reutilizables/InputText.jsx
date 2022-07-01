const InputText = ({tag,pholder}) => {
    return ( 
        <div className="input-text">
            <p className="tag">{tag}</p>
            <input placeholder={pholder}/>
            
        </div>
     );
}
 
export default InputText;
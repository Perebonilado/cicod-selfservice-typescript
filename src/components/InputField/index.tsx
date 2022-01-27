import inputFieldStyles from './inputFieldStyles.module.css'


interface Props {
    inputVal: string | number,
    setInputVal: React.Dispatch<React.SetStateAction<string>>
}


const InputField: React.FC<Props> = ({ inputVal, setInputVal }:Props) => {

    return (
    <input
        className={`${inputFieldStyles['inputBox']}`}
        type="text" 
        id="ticket-id" 
        placeholder="Enter ticker ID or Order ID" 
        value={inputVal} 
        onChange={(e)=>setInputVal(e.target.value)}
        name='ticket-id'
        /> 
        )
}

export default InputField
import './BlueButton.css'

export default function BlueButton({name, handleClick}) {
    return <div className='blue-btn' onClick={handleClick}>
        <p className='blue-btn-name'>{name}</p>
    </div>
}
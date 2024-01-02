import './styles/ButtonCustomStyle.css';

type ButtonCustom = {
    text: string;
    handleClick: () => void;
}

export const ButtonCustom = ({ text, handleClick }:ButtonCustom) => {
    return (
        <button className='button-custom' onClick={handleClick}>
            <span>{text}</span>
        </button>
    )
}
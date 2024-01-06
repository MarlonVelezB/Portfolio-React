import './styles/CardStyle.css'

type CardProps = {
    children: JSX.Element | JSX.Element [];
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="card">
            <div className="cardContent">
                {children}
            </div>
        </div>
    )
}
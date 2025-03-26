import Spending from "@/models/entities/Spending";

interface Props {
    spending: Spending;
}

const SpendingCard = ({spending}:Props) => {
    return (
        <li>
            <h3>{spending.label}</h3>
            <p>{spending.amount} £</p>
        </li>
    )
}

export default SpendingCard;
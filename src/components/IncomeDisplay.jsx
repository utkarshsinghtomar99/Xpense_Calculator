import { useSelector } from "react-redux";

const IncomeDisplay = () =>
{
    const { xpenseData } = useSelector( state => state.xpense );

    const incomeAmt = xpenseData
        .filter( ( transaction ) => transaction.amount > 0 )
        .reduce( ( p, c ) => p + c.amount, 0 )

    return (
        <>
            <div className="card bg-success text-light rounded-5">
                <div className="card-body rounded-5">
                    <h1 className="display-4 text-center"> &#8377; {incomeAmt}</h1>
                    <h5 className="text-center">Current Income</h5>
                </div>
            </div>
        </>
    )
}

export default IncomeDisplay
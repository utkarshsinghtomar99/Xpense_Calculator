import { useSelector } from "react-redux";

const CurrentXpense = () =>
{
    const { xpenseData } = useSelector( state => state.xpense );

    const currAmt = xpenseData
        .filter( ( transaction ) => transaction.amount < 0 )
        .reduce( ( p, c ) => p + c.amount, 0 )

    return (
        <>
            <div className="card bg-danger text-light rounded-5">
                <div className="card-body rounded-5">
                    <h1 className="display-4 text-center"> &#8377; {currAmt}</h1>
                    <h5 className="text-center">Current Xpense</h5>
                </div>
            </div>
        </>
    )
}

export default CurrentXpense
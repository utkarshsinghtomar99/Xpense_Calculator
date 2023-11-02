import { useSelector } from "react-redux";

const BalDisplay = () =>
{
    const { xpenseData } = useSelector( state => state.xpense );
    const balAmt = xpenseData.reduce( ( p, c ) => p + c.amount, 0 )


    return (
        <>
            <div className="mb-5">
                <h1 className="display-1 text-center"> &#8377;  <span className={balAmt > 1000 ? 'display-1 text-green' : 'display-1 text-red'}>{balAmt}</span> </h1>
                <h3 className="text-center">Current Balance</h3>
            </div>
        </>
    )
}

export default BalDisplay
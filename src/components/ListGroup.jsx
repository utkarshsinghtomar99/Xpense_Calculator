import { useSelector } from "react-redux"
import ListItem from "./ListItem";

const ListGroup = () =>
{
    const { xpenseData } = useSelector( state => state.xpense );

    if ( xpenseData.length === 0 )
    {
        return <h2 className="text-center" style={{ margin: '250px 0' }}>No data to show</h2>;
    }

    return (
        <>
            <div>
                <ul className="list-group list-group-flush">
                    {
                        xpenseData.map( xpense => <ListItem key={xpense.id} xpense={xpense} /> )
                    }
                </ul>
            </div>
        </>
    )
}

export default ListGroup
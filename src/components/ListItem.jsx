
import { FaTrash, FaRegPenToSquare } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { remove, edit } from "../feature/xpense/XpenseSlice";

const ListItem = ( { xpense } ) =>
{
    const dispatch = useDispatch();

    const handleRemove = ( id ) =>
    {
        dispatch( remove( id ) );
    }

    const handleEdit = ( xpense ) =>
    {
        dispatch( edit( xpense ) );
    }

    return (
        <>
            <li className={`list-group-item bg-dark text-light rounded-4 my-2`}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-5 col-lg-5 col-xl-5 col-12">
                        <h1 className="text-center my-lg-0 my-xl-0 my-4" > &#8377; <span className={xpense.amount > 0 ? 'h1 text-green' : 'h1 text-red'}>{xpense.amount}</span></h1>
                    </div>
                    <div className="col-md-7 col-lg-7 col-xl-7 col-12">
                        <h4 className=""> <u className="h4">{xpense.title}</u> </h4>
                        <p className="p-0 m-0">{xpense.description}</p>
                        <div className="float-end mt-3 mb-2">
                            <button className="btn btn-sm btn-warning me-2 rounded-pill" onClick={() => handleEdit( xpense )}> <FaRegPenToSquare /></button>
                            <button className="btn btn-sm btn-danger rounded-pill" onClick={() => handleRemove( xpense.id )}><FaTrash /></button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ListItem
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { save, update } from "../feature/xpense/XpenseSlice";

const Form = () =>
{
    const { inEdit } = useSelector( state => state.xpense )

    const [ amount, setAmount ] = useState( '' );
    const [ title, setTitle ] = useState( '' );
    const [ description, setDescription ] = useState( '' );

    const dispatch = useDispatch();

    const handleSave = ( e ) =>
    {
        e.preventDefault();
        if ( inEdit.edit )
        {
            dispatch( update( {
                id: inEdit.xpense.id,
                title,
                amount: +amount,
                description
            } ) )
        }
        else
        {
            dispatch( save( {
                id: crypto.randomUUID(),
                title,
                amount: +amount,
                description
            } ) )
        }

        setAmount( '' );
        setTitle( '' );
        setDescription( '' );

    }

    useEffect( () =>
    {
        setAmount( inEdit.xpense.amount )
        setTitle( inEdit.xpense.title )
        setDescription( inEdit.xpense.description )
    }, [ inEdit ] )


    return (
        <>
            <div className="my-5">
                <form onSubmit={handleSave}>
                    {/* Input-1(number) */}
                    <label className="form-label">Enter Amount:</label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="place '-' before expenses, e.g. '-500'"
                        onChange={( e ) => setAmount( e.target.value )}
                        value={amount}
                    />
                    {/* Input-2(text) */}
                    <label className="form-label mt-3">Enter Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="enter title"
                        onChange={( e ) => setTitle( e.target.value )}
                        value={title}
                    />
                    {/* Input-3(text-area) */}
                    <label className="form-label mt-3">Enter Description:</label>
                    <textarea
                        className="form-control"
                        placeholder="enter description"
                        rows='5'
                        onChange={( e ) => setDescription( e.target.value )}
                        value={description}
                    ></textarea>
                    {/* Submit Button */}
                    <button className="btn btn-success mt-3 w-100" type="submit">Save</button>
                    {/*  */}
                </form>
            </div>
        </>
    )
}

export default Form
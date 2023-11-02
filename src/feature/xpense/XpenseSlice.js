import { createSlice } from "@reduxjs/toolkit";

const XpenseSlice = createSlice(
    {
        name: 'Xpense_Storage',
        initialState:
        {
            xpenseData: [],
            inEdit: {
                xpense: {},
                edit: false
            }
        },
        reducers:
        {
            remove: ( state, action ) =>
            {
                return {
                    ...state,
                    xpenseData: state.xpenseData.filter( xpense => xpense.id !== action.payload )
                }
            },
            save: ( state, action ) =>
            {
                return {
                    ...state,
                    xpenseData: [ action.payload, ...state.xpenseData ]
                }
            },
            edit: ( state, action ) =>
            {
                return {
                    ...state,

                    inEdit: {
                        xpense: action.payload,
                        edit: true
                    }
                }
            },
            update: ( state, action ) =>
            {
                return {
                    ...state,
                    xpenseData: state.xpenseData.map( xpense => xpense.id === action.payload.id ? action.payload : xpense ),
                    inEdit: {
                        xpense: {},
                        edit: false
                    }
                }
            }
        }
    } );

export const { remove, save, edit, update } = XpenseSlice.actions;
export default XpenseSlice.reducer;
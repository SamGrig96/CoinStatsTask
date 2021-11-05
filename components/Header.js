import '../App.css';
import Button from '@mui/material/Button';
import * as React from "react";
import BasicModal from "./CustomModal";
import {TextField} from "@mui/material";
import {useState} from "react";
import {addTodo} from "../redux/actions";
import {useDispatch} from "react-redux";

function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const [data, setData] = useState({})
    let dispatch = useDispatch()
    const handleChange = (e) => {
        const {name, value} = e.target
        setData(prevState => ({...prevState, [name]: value}))
    }

    const addData = () => {
        dispatch(addTodo(data
        ),)
    }

    return (
        <>
            <div className='header'>
                <span style={{marginLeft:'25px'}}>Custom Currencies</span>
                <Button onClick={handleOpen}>Add Currencies</Button>

            </div>
            <BasicModal open={open} handleClose={handleClose} title='Create Currency'>

                <div className='create-content'>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Name"
                        name='name'
                        multiline
                        placeholder='Enter Name'
                        // maxRows={4}
                        onChange={handleChange}
                        variant="standard"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Rate"
                        name='rate'
                        multiline
                        placeholder='Enter Rate'
                        // maxRows={4}
                        onChange={handleChange}
                        variant="standard"
                    />
                    <p style={{color: '#50578c'}}>Enter Only Number</p>
                    <div className='button-section'>
                        <Button
                            style={{
                                color:'#1692cb',
                                fontSize: "14px"
                            }}
                            variant="text" onClick={handleClose}>Cancel</Button>
                        <Button
                            style={{
                                color:'#1692cb',
                                fontSize: "14px"
                            }}
                            variant="contained"
                                onClick={() => {
                                    addData()
                                    handleClose()
                                }}>Confirm</Button>
                    </div>
                </div>
            </BasicModal>
        </>

    );
}

export default Header;
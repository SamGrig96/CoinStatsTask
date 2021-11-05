import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTodo} from "../redux/actions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#1f233f',
    boxShadow: 24,
    p: 4,
};
function EditModal(props) {
    const [data, setData] = useState(props.data)
    let dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(prevState => ({...prevState, [name]: value}))
    }

    const handleUpdate = () => {
        dispatch(updateTodo(data
        ),)
    }
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Edit Currency
                    </Typography>
                    <div className='create-content'>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Name"
                            name='name'
                            multiline
                            placeholder='Enter Name'
                            value={data.name}
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
                            value={data.rate}
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
                            }} variant="text" onClick={props.handleClose}>Cancel</Button>
                            <Button
                                style={{
                                    color:'#1692cb',
                                    fontSize: "14px"
                                }}
                                variant="contained" onClick={()=>{
                                handleUpdate()
                                props.handleClose()
                            }}>Confirm</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default  EditModal
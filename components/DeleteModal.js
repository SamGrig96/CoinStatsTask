import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/actions";

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

function DeleteModal(props) {
    const [id] = useState(props.data)
    let dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(id
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
                        Remove Currency
                    </Typography>
                    <div className='create-content'>

                        <p style={{color: '#50578c'}}>Are you sure you want to remove this Currency</p>
                        <div className='button-section'>
                            <Button style={{
                                color: '#1692cb',
                                fontSize: "14px"
                            }} variant="text" onClick={props.handleClose}>Cancel</Button>
                            <Button style={{
                                color: '#1692cb',
                                fontSize: "14px"
                            }} variant="contained" onClick={() => {
                                handleDelete()
                                props.handleClose()
                            }}>Confirm</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteModal;
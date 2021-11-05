import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTodoList} from '../redux/actions'
import {useEffect} from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {red} from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";



function TodoList() {

    let todos = useSelector(state => state)
    let dispatch = useDispatch()
    const [data, setData] = useState({})
    const [search, setSearch] = useState('')
    const [deleteData, setDeleteData] = useState({})
    const [open, setOpen] = useState(false)
    const [filteredPerson, setFilteredPerson] = useState([]);
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const handleClose = () => setOpen(false)
    const handleCloseDelete = () => setOpenDeleteModal(false)

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch]);

    useEffect(() => {
        setFilteredPerson(
            todos.filter(({ name }) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        )
    }, [todos, search]);

    const handleEdit = (row) => {
        setOpen(true)
        setData(row)
    }

    const handleDelete = (row) => {
        setOpenDeleteModal(true)
        setDeleteData(row)
    }
    return (
        <div className='my-4 container'>
            <div style={{height: 400, width: '100%'}}>
                <div className='search-wrapper'>
                    <TextField
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        placeholder='Search currency by Currency name'
                        InputProps={{
                            color: "primary",
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <TableContainer component={Paper} style={{color: 'white', background: '#1f233f'}}>
                    <Table sx={{minWidth: 650, border: 'none'}} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{color: 'white'}}>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Currency Name</TableCell>
                                <TableCell align="right">Rate(1$ = X Rate)</TableCell>
                                <TableCell align="right"/>
                                <TableCell align="right"/>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{color: 'white'}}>
                            {filteredPerson.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell style={{color: 'white'}} align="right">{index + 1}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.rate}</TableCell>
                                    <TableCell align="right">
                                        <EditIcon
                                            onClick={() => handleEdit(row)}
                                            sx={{color: '#14eeb1'}}
                                        /></TableCell>
                                    <TableCell align="right"> <DeleteIcon
                                        onClick={() => handleDelete(row)}
                                        sx={{color: red[500]}}/></TableCell>
                                    {/*<TableCell align="right">{row.protein}</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data.name && <EditModal data={data} open={open} handleClose={handleClose}/>}
                {deleteData.id &&
                <DeleteModal data={deleteData} open={openDeleteModal} handleClose={handleCloseDelete}/>}
            </div>

        </div>

    )
}

export default TodoList
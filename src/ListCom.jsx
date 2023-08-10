import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const List = (props) => {
    const [cut, setCut] = useState(false);

    const cutIt = () => {
        setCut(true);
    };
    return(
        <>
        <div className="todo-style">
            <Tooltip title="Remove">
            <Button className="delete-icon" onClick={cutIt}>
            <RemoveIcon />
            </Button>
            </Tooltip>
        <li style={{textDecoration: cut ? "line-through" :'none'}}>{props.text}</li>
        </div>
        </>
    );
};


export default List;
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import List from "./ListCom";

const App = () => {

    const [item, setItem] = useState();
    const [newitem, setNewItem] = useState([]);

    const inputEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItem = () => {
        setNewItem((preVal) => {
            return[...preVal, item];
        });
        setItem('');
    }
    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add A Items" onChange={inputEvent} value={item} />
                <Tooltip title="Add" arrow>
                <Button className="btn" onClick={listOfItem}><AddIcon/></Button>
                </Tooltip>
                
                <br />
                <ol>
                    {/* <li>{item}</li> */}

                    {
                        newitem.map((itemVal) => {
                            return <List text={itemVal}/>
                        })
                    }
                </ol>
            </div>
        </div>
        </>
    );
};

export default App;
import { Button } from "@material-ui/core"
import React from "react";
import reactDom from "react-dom";
import "./App.css";
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "/home/dataexim/Documents/Rohan/addtodo/node_modules/materialize-css/dist/css/materialize.min.css"


function App() {
    const [userInp, setuserInp] = useState("");
    const [myArray, setmyArray] = useState([]);
    const [checkboxindexstate, setcheckboxindexstate] = useState([]);
    const [Items, setItems] = useState([]);

    // Add myArray in Array
    const addmyArray = () => {
        if (!userInp || userInp.length <= 2) {
            window.alert("Text area is Empty")
        } else {
            // const allInputdata = {
            //   id: new Date().getTime().toString(),
            //   name: userInp,
            // };
            setmyArray([...myArray, userInp]);
            setItems([...Items, userInp]);
            setuserInp("");
        }
    };
    //delet Row data
    const deleteItem = (id) => {
        console.log(id);
        console.log(checkboxindexstate.includes(id));
        if (checkboxindexstate.includes(id)) {
            const deleteTodo = checkboxindexstate.filter((Element, index) => {
                return index !== id;
            });
            console.log(deleteTodo);
            setcheckboxindexstate(deleteTodo);
        }
        const updatedmyArray = myArray.filter((Element, index) => {
            return index !== id;
        });
        setmyArray(updatedmyArray);
        setItems(updatedmyArray);
    };

    const tickBtn = (index) => {
        console.log(index);
        if (checkboxindexstate.includes(index) && checkboxindexstate >= 1) {
            const checkedmyArray = checkboxindexstate.filter((i) => {
                return i !== index;
            });
            setcheckboxindexstate(checkedmyArray);
        } else {
            setcheckboxindexstate([...checkboxindexstate, index]);
        }
    };
    // chek btn, uncheked btn , All btns functions are here
    const chekedBtn = () => {
        // console.log(checkboxindexstate);
        const checkdata = myArray.filter((Element, index) => {
            return checkboxindexstate.includes(index);
        });
        setmyArray(checkdata);
        console.log(checkdata)
    };
    const unchekedBtn = (i) => {
        const checkdata = myArray.filter((Element, index) => {
            return !checkboxindexstate.includes(index);
        });
        setmyArray(checkdata);
        console.log(checkdata);
    };
    const AllData = () => {
        setmyArray(Items);
        console.log(Items);
    };

    const removeData = () => {
        setmyArray([]);
        setItems([]);
        setcheckboxindexstate([]);
    }
    return (
        <main>
            <div className="main-class">
                <div className="sub-class">
                    <h1>Add Todo</h1>
                    <div className="div-for-inp">

                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" placeholder="Write Todo here" value={userInp} onChange={(e) => setuserInp(e.target.value)} />
                            <button className="addList" class="btn-floating btn-medieum waves-effect waves-light red" onClick={addmyArray}>
                                +
                            </button>
                        </div>

                        <div className="showmyArray" >
                            {myArray.map((Element, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <span className="lineView">
                                            <h5 className="solid">
                                                {Element}

                                                <DeleteIcon onClick={() => deleteItem(index)} />
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        className="chekBox"
                                                        onChange={() => tickBtn(index)}
                                                    ></input>
                                                </div>
                                            </h5>
                                        </span>

                                    </div>
                                );
                            })}
                        </div>
                        <div className="last-Buttons">
                            <Button className="checkButton" variant="outlined" onClick={chekedBtn}>Cheked</Button>
                            <Button variant="outlined" onClick={unchekedBtn}>Uncheked</Button>
                            <Button variant="outlined" onClick={AllData}>All</Button>
                            <Button variant="outlined" onClick={removeData}>Remove all</Button>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
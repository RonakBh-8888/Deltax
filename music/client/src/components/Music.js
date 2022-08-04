//import React, { useState, useEffect, useContext } from 'react'
//import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
//import CreateIcon from '@mui/icons-material/Create';
//import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
//import React from 'react'

//import { adddata, deldata } from './context/ContextProvider';
//import { updatedata } from './context/ContextProvider'




const Music = () => {
   return(
        <>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/Addsong" className="btn btn-primary">Add Song</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col">Star</th>
                            </tr>
                        </thead>
                        <tbody>
                                            <tr>
                                                
                                                <td>Ronak</td>
                                                <td>rtrvv@gmail.com</td>
                                                <td>developer</td>
                                                <td>4556576723</td>
                                                <td className="d-flex justify-content-between">
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button> */}
                                                </td>
                                            </tr>
                                        
                                    
                            
                            
                        </tbody>
                    </table>


                </div>
            </div>
        </>
   )
}

export default Music
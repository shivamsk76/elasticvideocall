import React, { useState } from 'react';
import './Signin.css';

function SignIn() {
  const [name, setName] = useState('');
  const [createRoom, setCreateRoom] = useState('');
  const [joinRoom, setJoinRoom] = useState('');


  return (
            <div className="joinOuterContainer">
               <div className="joinInnerContainer" >
                 <h1 className='heading'> Video Call</h1>
                       <div >   <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /> </div>
                       <div > <input placeholder="Create Room" className="joinInput mt-20" type="text" onChange={(event) => setCreateRoom(event.target.value)} /> </div>
                       <div > <input placeholder="Join Room" className="joinInput mt-20" type="text" onChange={(event) => setJoinRoom(event.target.value)} /> </div>
                  
                  <td className="sameer">  <button className={'button mt-20'} type="submit" >Create Room</button></td>
                  <td> <button className={'button mt-20'} type="submit" >Join Room</button></td>
                     
                 
               </div>
             </div>
    );
}

export default SignIn;

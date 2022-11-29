import React from 'react';
import "./About.css";


function About() {
    return (
        <div className='about'>
            <p>
                hi, this is a multisigwallet<br></br>
                note:<br></br>
                this is not dynamic type,because this contracts owners are already declared..so that owners can only use  this contract.
                I have deployed this contract on ganache local blockchain, so that i used that blockchian's first 3 addresses as owners of this contract.
            </p>
            
        </div>

    );



};
export default About;
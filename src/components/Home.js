import React from 'react';
import "./Home.css";

function Home() {
    return (
        <>
            <div className='main'>
                 <header className='header1'>
                    <h1> &#129297; Multi-Sig-Wallet</h1>
                    <ul>
                        <li><a href='./Home' >Home</a></li>
                        <li><a href='./Wallet' >Wallet</a></li>
                        <li><a href='./About' >About</a></li>

                    </ul>

                </header> 
                <footer className='footer1'>
                    <div className='para'>
                        <p>
                            hello,users.<br></br>
                            this is multi signature Wallet.<br></br>
                            this wallet use multi accounts for sign one transaction.<br></br>
                            if wallet's one owner submit one transaction, then this transaction needs other owners approval.
                        </p><br></br>
                        
                    </div>
                    <div className='start'>
                        <li id="start"><a href='./Wallet.js'>get started</a></li>
                    </div>
                </footer>
            </div>
        </>
    )

}
export default Home;
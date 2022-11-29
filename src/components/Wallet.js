import React, { useState } from 'react';
import Web3 from 'web3';
import "./Wallet.css";

function Wallet() {
	const [accounts, setAccounts] = useState("");
	const [bal, setBal] = useState("0");
	var [a, setA] = useState("");
	var [b, setB] = useState("");
	var [c, setC] = useState("");


	let web3;
	web3 = new Web3(window.ethereum);
	var cAddress = "0x1f6b226f2032883CfbBF8106461F3c98abA207A3";
	var abi = [
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "_owners",
					"type": "address[]"
				},
				{
					"internalType": "uint256",
					"name": "_required",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "txId",
					"type": "uint256"
				}
			],
			"name": "Approve",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "Deposit",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "txId",
					"type": "uint256"
				}
			],
			"name": "Execute",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "txId",
					"type": "uint256"
				}
			],
			"name": "Revoke",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "txId",
					"type": "uint256"
				}
			],
			"name": "Submit",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_txId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "approved",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_txId",
					"type": "uint256"
				}
			],
			"name": "execute",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_txId",
					"type": "uint256"
				}
			],
			"name": "getTransaction",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "",
					"type": "bytes"
				},
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "isOwner",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "owners",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "required",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_txId",
					"type": "uint256"
				}
			],
			"name": "revoke",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "submit",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "transactions",
			"outputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				},
				{
					"internalType": "bool",
					"name": "executed",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
	const login = () => {
		if (window.ethereum) {
			window.ethereum.enable();
			web3 = new Web3(window.ethereum);
			console.log("metamask connected");
		} else {
			web3 = new Web3("Http://127.0.0.1:7545");
		}
		return web3;
	};

	function getAccounts() {
		web3.eth.getAccounts().then((res) => {
			setAccounts(res[0]);

		});
	};


	const getBal = () => {
		web3.eth.getBalance(accounts).then((result) => {
			window.alert(result);
		});

	};
	const getAddressBal = () => {
		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.getBalance().call().then((res) => {
			setBal(web3.utils.fromWei(res, 'ether'));
		})
	};
	const submit1 = () => {
		a = document.getElementById("address").value;
		setA(a);
		b = document.getElementById("val").value;
		setB(b);
		c = document.getElementById("data").value;
		setC(c);
		submit(a, b, c);
	}
	const submit = (a, b, c) => {

		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.submit(a.toString(), b.toString(), c.toString(c)).send({ from: accounts }).then((result) => {
			console.log(result);

		});
		contract.getPastEvents('Submit').then((res) => {
			console.log(res);
		});

	};
	const approve1 = () => {
		const b = document.getElementById("txid").value;
		approve(b);
		console.log(b);

	};
	function approve(b) {
		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.approve(b).send({ from: accounts }).then((result) => {
			console.log(result);
		});
		contract.getPastEvents('Approve').then((res) => {
			console.log(res);
		})

	};
	const revoke1 = () => {
		const b = document.getElementById("txid").value;
		revoke(b);
		console.log(b);

	};
	function revoke(b) {
		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.revoke(b).send({ from: accounts }).then((result) => {
			console.log(result);
		})
		contract.getPastEvents('Revoke').then((res) => {
			console.log(res);
		})
	};
	function execute1() {
		const b = document.getElementById("txid").value;
		execute(b);
		console.log(b);

	};
	function execute(b) {
		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.execute(b).send({ from: accounts }).then((result) => {
			console.log(result);
		});
		contract.getPastEvents('Execute').then((res) => {
			console.log(res);
		})

	};
	function getTransaction1() {
		const b = document.getElementById("txid").value;
		getTransaction(b);
		console.log(b);

	};
	function getTransaction(b) {
		const contract = new web3.eth.Contract(abi, cAddress);
		contract.methods.getTransaction(b).call().then((result) => {
			window.alert(result);
		});

	};
	return (
		<>
			<div className='main1'>

				<header className='header'>
					<div className='connect'>
						<h1>connect to metamask</h1>
						<button onClick={login}>connect</button>
						<h1>account: {accounts}</h1>
						<button onClick={getAccounts}>account</button><br></br>
					</div>
					<div className='balance'>
						<button onClick={getBal}>balance</button><br />
						<button onClick={getAddressBal}>contractBal</button>
						<h2>bal: {bal} ETH</h2>
					</div>
				</header>

				<section className='section'>
					<div>
						<div className='inputs'>
							<label for="address">address: </label><br></br>
							<input type="text" placeholder='address' id="address" ></input><br></br>
							<label for="val">value: </label><br></br>
							<input type="number" placeholder='value in wei' id='val'></input><br></br>
							<label for="data">data:</label><br></br>
							<input type="text" placeholder='0x012345' id='data'></input><br></br>
						</div>
						<div className='submit'>
							<button onClick={submit1}>
								submit
							</button>
						</div>
					</div>
				</section>

				<div className='note1'>
					<p>
						note:<br></br>
						 if you click anyone of the button these are shown below,first you mention the transaction id in the input section,
						 then you will click those buttons and you can get those transaction details in console log
					</p>

				</div>

				<footer className='footer'>
					<div>
						<input type="number" placeholder='txid' id='txid' required ></input><br></br>
						<button onClick={approve1} id="approve">approve</button><br></br>
						<button onClick={revoke1} id="revoke">revoke</button><br></br>
						<button onClick={execute1} id="execute">execute</button><br></br>
						<button onClick={getTransaction1} id="getTransaction">getTransaction</button>
					</div>
				</footer>
				
				<div className="note">
					<p>
						note: you can get your transaction details from console when you click those above 4 buttons.
					</p>
				</div>

			</div>
		</>


	);

};
export default Wallet;
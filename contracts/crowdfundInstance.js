import web3 from './web3';

const address = '0x96113430f7F857267222577c8ee98a13790E8714';
//0x151c5192e1D0fC016CF515c37BB5FFd0533097A8 -matictest2
//0x0b282f0E9B6985Ec8badcFDCfcb644e937686742 - matic testnet1
const abi =
    [
        {
            "constant": true,
            "inputs": [],
            "name": "returnAllProjects",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "description",
                    "type": "string"
                },
                {
                    "name": "durationInDays",
                    "type": "uint256"
                },
                {
                    "name": "amountToRaise",
                    "type": "uint256"
                }
            ],
            "name": "startProject",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "contractAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "projectStarter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "projectTitle",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "projectDesc",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "goalAmount",
                    "type": "uint256"
                }
            ],
            "name": "ProjectStarted",
            "type": "event"
        }
    ];

const inst = new web3.eth.Contract(abi, address);

export default inst;

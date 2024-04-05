export const abi = [
  {
    type: "constructor",
    inputs: [
      { name: "_usdcAddress", type: "address", internalType: "address" },
      { name: "_itAddress", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "AddAdmin",
    inputs: [{ name: "_admins", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "Balance",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "Deposit",
    inputs: [{ name: "_amount", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "GetAllDeposits",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Payout.DepositorsAndAmount[]",
        components: [
          { name: "depositors", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "GetAllWithdrawals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Payout.WithdrawalsAndAmount[]",
        components: [
          { name: "withdrawals", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "RemoveAdmin",
    inputs: [{ name: "_admins", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "USDCAddress",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "Withdraw",
    inputs: [
      { name: "_to", type: "address", internalType: "address" },
      { name: "_amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendUSDC",
    inputs: [
      { name: "recipients", type: "address[]", internalType: "address[]" },
      { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "DepositSuccessful",
    inputs: [
      { name: "", type: "address", indexed: true, internalType: "address" },
      { name: "", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PayoutSuccessful",
    inputs: [
      {
        name: "Payer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "Payees",
        type: "address[]",
        indexed: true,
        internalType: "address[]",
      },
      {
        name: "Amount",
        type: "uint256[]",
        indexed: true,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawalSuccessful",
    inputs: [
      { name: "", type: "address", indexed: true, internalType: "address" },
      { name: "", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
];
export const contractAddress = "0x7fd26AA5432f831B99071215BD876fc9472c96cF";

// ? Task:Generate Random Hex


// Solution 1

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());
// Result: #92b008

// ! Explanation: You can generate random hex colors with Math.random and padEnd properties.

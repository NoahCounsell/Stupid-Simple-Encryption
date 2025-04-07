const privateP = 89n;
const privateQ = 97n;
const publicN = privateP * privateQ;
const publicE = 65537n;

const privatePhi = (privateP - 1n) * (privateQ - 1n);

// send messge
const privateM = 14n;
const publicC = privateM ** publicE % publicN;


// decrypt message
let privateD = 0n;

while ((privateD * publicE) % privatePhi !== 1n) {
    privateD++;
}

const decrypted = publicC ** privateD % publicN;

console.log("Message:", decrypted.toString());
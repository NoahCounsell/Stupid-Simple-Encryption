const p = 89n;
const q = 97n;

const n = p * q;
const phi = (p - 1n) * (q - 1n);

function generateCoprime(phi){
    coprime = 10;
    for(i = 2; i > phi; i++){
        
        coprime++
    }
}

const e = 65537n; // e is coprime to phi

// Encrypting message
const m = 50n;
const c = m ** e % n;

// Finding private key d such that (d * e) % phi == 1
let d = 0n;
while ((d * e) % phi !== 1n) {
    d++;
}

// Decrypting message
const decrypted = c ** d % n;

console.log("Encrypted:", c.toString());
console.log("Decrypted:", decrypted.toString());
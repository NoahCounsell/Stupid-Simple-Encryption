g = 5915587277n
n = 5570373270183181665098052481109678989411n

APrivate = BigInt(Math.floor(Math.random() * 1000))
AtoB = g ** APrivate % n


BPrivate = BigInt(Math.floor(Math.random() * 1000))
BtoA = g ** BPrivate % n


console.log((AtoB ** BPrivate % n).toString())

console.log((BtoA ** APrivate % n).toString())

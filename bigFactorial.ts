const BASE = 10

const multiplyBigNumber = (bNum: number[], multiplier: number): number[] => {
    let carry = 0
    for (let i = 0; i < bNum.length; i++) {
        bNum[i] = bNum[i] * multiplier + carry
        if (bNum[i] >= BASE) {
            carry = Math.trunc(bNum[i] / BASE)
            bNum[i] %= BASE
        } else {
            carry = 0
        }
        if (i === bNum.length-1 && carry > 0) bNum.push(0)
    }
    return bNum
}

const bigNumerToString = (bNum: number[]): string => bNum.reduce((acc, num, i) => num.toString()+acc, '')

const printFactorial = (n: number): void => {
    let fact: number[]
    for (fact = [1]; n > 1; n--)
        fact = multiplyBigNumber(fact, n)

    const result = bigNumerToString(fact)
    console.log(result + '\n')
}

printFactorial(100)
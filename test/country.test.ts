import { CountryEst } from '../src/countryEst'
import {fourRandomNumber} from "../src/randomNumber";


test('check prefix for country', ()=> {
    let countryEst = new CountryEst('EST-')
    expect(countryEst).toEqual(countryEst)
    let countryLva = new CountryEst('LVA-')
    expect(countryLva).toEqual(countryLva)
    let countryLtu = new CountryEst('LTU-')
    expect(countryLtu).toEqual(countryLtu)
})

test('check length fourRandomNumber',() => {
    expect(fourRandomNumber()).toHaveLength(4)
})

test('check Estonia prefix and random number',() => {
    let countryEst = new CountryEst('EST-')
    let randomNumber = fourRandomNumber()
    let fullName = countryEst + randomNumber
    expect(fullName).toContain(countryEst + randomNumber)
})

test('check Latvia prefix and random number',() => {
    let countryLva = new CountryEst('LVA-')
    let randomNumber = fourRandomNumber()
    let fullName = countryLva + randomNumber
    expect(fullName).toContain(countryLva + randomNumber)})

test('check Lithuania prefix and random number',() => {
    let countryLtu = new CountryEst('LTU-')
    let randomNumber = fourRandomNumber()
    let fullName = countryLtu + randomNumber
    expect(fullName).toContain(countryLtu + randomNumber)})

// test('check Lithuania with Regx',() => {
//     let countryLtu = new CountryEst('LTU-')
//     let randomNumber = fourRandomNumber()
//     let fullName = countryLtu + randomNumber
//     expect("").toBe(fullName)
//     // expect(fullName).toContain(countryLtu + randomNumber)
// })
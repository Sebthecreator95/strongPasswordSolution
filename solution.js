function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"
    let obj = {numbers: 0, lowerCase: 0, upperCase: 0, specialCharacters: 0}
    for(let i = 0; i < n; i++){
        if(numbers.includes(password[i])){
            obj.numbers += 1
        }
        if(lower_case.includes(password[i])){
            obj.lowerCase += 1
        }
        if(upper_case.includes(password[i])){
            obj.upperCase += 1
        }
        if(special_characters.includes(password[i])){
            obj.specialCharacters += 1
        }
    }
    let missingCharacters = 0
    if(obj.specialCharacters === 0){
        missingCharacters +=1
    }
    if(obj.upperCase === 0){
        missingCharacters +=1
    }
    if(obj.lowerCase === 0){
        missingCharacters +=1
    }
    if(obj.numbers === 0){
        missingCharacters +=1
    }
    if(n < 6){
        let remainder = 6 - n
        if(remainder > missingCharacters){
            return remainder
        }
        if(remainder <= missingCharacters){
            return missingCharacters
        }
    }
    return missingCharacters
}

function findFirstStringInBracket(str) { 
    if (str.length === 0) { 
        return ''
    }
    let indexFirstBracketFound = str.indexOf("(")
    if (indexFirstBracketFound < 0) { 
        return ''
    }
    let wordsAfterFirstBracket = str.substr(1)
    if (!wordsAfterFirstBracket) { 
        return ''
    }
    let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")")
    if (indexClosingBracketFound < 0) { 
        return ''
    }
    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound)
}

let test = findFirstStringInBracket("(tester)")
test
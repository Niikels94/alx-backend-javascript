function calculateNumber(type, a, b) {
    const k = Math.round(a);
    const j = Math.round(b);
    let c = 0;

    if(type === 'SUM') {
        return k + j;  
    }
    else if(type === 'SUBTRACT') { 
        return k - j;
    }
    else if(type === 'DIVIDE') {
        return k / j;
    }
    else if(j === c) {
        return 'Error';
    }

}

module.exports = calculateNumber;

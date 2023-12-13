function calculateNumber(type, a, b) {
    const k = Math.round(a);
    const j = Math.round(b);
    let c = 0;

    if(type === 'SUM') {
        c = k + j;  
    }
    else if(type === 'SUBTRACT') { 
        c = k - j;
    }
    else if(type === 'DIVIDE') {
        c = k / j;
    }
    else if(j === 0) {
        c = 'Error';
    }
    return c;

}

module.exports = calculateNumber;

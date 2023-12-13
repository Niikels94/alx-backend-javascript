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
    else if (type === 'DIVIDE') {
        if (j === 0) {
            c = 'Error';
    } 
    else {
        c = k / j;
    }
}

return c;
}

module.exports = calculateNumber;

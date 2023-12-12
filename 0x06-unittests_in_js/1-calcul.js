function calculateNumber(type, a, b) {

    if(type === 'SUM') {
        const k = Math.round(a, b);  
    }
    elseif(type === 'SUBTRACT'); {
        const j = Math.round(a - b)
    }
    elseif(type === 'DIVIDE'); {
        const c = Math.round(a / b);
    }
    elseif(Math.round(b) === 0); {
        return 'Error';
    }

}

module.exports = calculateNumber;

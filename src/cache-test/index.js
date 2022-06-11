const turnoverArray = new Array(100000).fill(100);

const isOptimized = false;

if(isOptimized) {
    const startTime = Date.now();

    let turnover =turnoverArray.reduce((prevVal, currentVal) => {
        return prevVal + currentVal;
    });


    for(let i = 0; i < 10000; i++) {
        console.log(turnover);
    }
    console.log(`Verbrauchte Zeit: ${Date.now() - startTime}ms`);
} else {
    const startTime = Date.now();
    for(let i = 0; i < 10000; i++) {

        let turnover = 0;
        turnoverArray.forEach((el) => {
            turnover+= el;
        })

        console.log(turnover);
    }
    console.log(`Verbrauchte Zeit: ${Date.now() - startTime}ms`);
}




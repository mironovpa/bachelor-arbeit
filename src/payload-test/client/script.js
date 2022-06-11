document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#button").addEventListener("click", function () {
        const numberOfRequests = 1000;
        let numberOfResponses = 0;
        const startTime = Date.now();
        for(let i = 0; i < numberOfRequests; i++) {
            const request = new XMLHttpRequest();
            request.open("GET", 'http://localhost:3000/', true);

            request.send();

            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    // console.log(request.response);
                    numberOfResponses++;
                    if(numberOfResponses === numberOfRequests) {
                        console.warn("DONE")
                        console.log(`Verbrauchte Zeit: ${Date.now() - startTime}ms`);
                    }
                }
            }
        }
    })
});

import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "experimental-scripts"
});

const isOptimized = false;

if(isOptimized) {
    const startTime = Date.now();
    connection.query(`SELECT * FROM users WHERE name='Danielle' AND age > 40`, (error, response) => {
        if(error) console.log(error);
        console.log(response);
        console.log(`Verbrauchte Zeit: ${Date.now() - startTime}ms`); // 86.8
        connection.destroy();
    });
} else {
    const startTime = Date.now();
    connection.query(`SELECT * FROM users`, (error, response) => {
        if(error) console.log(error);
        const filteredData = response.filter((el) => el.name === 'Danielle' && el.age > 40);
        console.log(filteredData);
        console.log(`Verbrauchte Zeit: ${Date.now() - startTime}ms`); // 87.5
        connection.destroy();
    });
}




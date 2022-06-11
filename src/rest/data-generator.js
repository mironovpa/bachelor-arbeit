import mysql from "mysql";
import { faker } from '@faker-js/faker';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "experimental-scripts"
});

connection.connect();

// connection.query(`INSERT INTO users (name, surname, age, country, city, street, zip, gender, email, firm_name, turnover) VALUES ('Name', 'Surname', 20, 'Austria', 'Vienna', 'Schwarzenbergplatz 10', '1010', 'male', 'dummy@email.com', 'My Firm', 3999.4)`)

function generateRandomUser() {

    const gender = (Math.random() > 0.5) ? "male" : "female";
    return `(${mysql.escape(faker.name.firstName(gender))}, ${mysql.escape(faker.name.lastName(gender))}, ${Math.floor(Math.random() * 62) + 18}, ${mysql.escape(faker.address.country())}, ${mysql.escape(faker.address.cityName())}, ${mysql.escape(faker.address.streetAddress(true))}, ${mysql.escape(faker.address.zipCode())}, '${gender}', ${mysql.escape(faker.internet.email())}, ${mysql.escape(faker.company.companyName())}, ${faker.random.numeric(6)})`
}

let users = '';
for (let i = 0; i < 144; i++) {
    users = `${generateRandomUser()}, ${users}`;
    console.log(i);
}

users = users.slice(0, users.length - 2);

try {
    connection.query(`INSERT INTO users (name, surname, age, country, city, street, zip, gender, email, firm_name, turnover) VALUES ${users}`);

} catch (e) {
    console.log(e.message);
}

import {createConnection, MongoClient} from "typeorm";
import CONFIG from "./config";
import { UserEntity } from "src/entities/user.entity";
import { BookEntity } from "src/entities/book.entity";


// Connecting to the database
// export default (async () => {
//   try {
//   // MongoClient = require('mongodb').MongoClient;
// let options = {
//     useNewUrlParser: true,
//     auth: {
//         user: 'your_usr',
//         password: 'your_pwd'
//     }
// };
// MongoClient.connect("", options);
//     console.log("The Conection is Ok");
//   } catch (err) {
//     console.log(err);
//     console.log(`${err} Could not Connect to the Database. Exiting Now...`);
//     process.exit();
//   }
// })();

// createConnection({
//   type: "mongodb",
//   host: "cluster0-fxp9n.mongodb.net",
//   port: 27017,
//   username: "sashabaev",
//   password: encodeURIComponent("Qwerty@123"),
//   database: "test",
//   entities: [ "../src/entities/*.entity{.ts,.js}"],
//   synchronize: true,
//   logging: false,
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }).then(connection => {
//   console.log("Loaded posts from the database: ", connection);

//   // here you can start to work with your entities
// }).catch(error => console.log(error));

// Connecting to the database
// export default (async () => {
//   try {
//     console.log(CONFIG.DB_HOST);
//     await mongoose.connect(CONFIG.DB_HOST, { useNewUrlParser: true });
//     // listen for requests
//     console.log("The Conection is Ok");
//   } catch (err) {
//     console.log(err);
//     console.log(`${err} Could not Connect to the Database. Exiting Now...`);
//     process.exit();
//   }
// })();

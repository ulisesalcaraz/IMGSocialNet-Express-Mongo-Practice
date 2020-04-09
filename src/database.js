const mongoose = require("mongoose");

const { database } = require("./keys");

mongoose
	.connect(database.URI, {
		useNewUrlParser: true,
	})
	.then((db) => console.log("DB connected"))
	.catch((error) => console.log(error));

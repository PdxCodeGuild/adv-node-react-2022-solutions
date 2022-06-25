const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const new_path = path.resolve(__dirname, "../../.env");

// import routes
const authRoutes = require("./routes/auth.routes");
const squawkRoutes = require("./routes/squawk.routes");

dotenv.config({
	path: new_path,
});

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/squawk", squawkRoutes);

// Connect to Database
const connectDatabase = async (dbName = process.env.DB_NAME) => {
	try {
		const connection = await mongoose.connect(`mongodb://127.0.0.1/${dbName}`);
		console.log(`🚀Connected to ${dbName} database`);
		return connection;
	} catch (error) {
		console.log(`❌Error connecting to ${dbName} database`, error);
		return process.exit(1);
	}
};

// Start Server

const startServer = () => {
	app.listen(process.env.API_PORT, async () => {
		await connectDatabase();
		console.log(
			`🚀Server started on port http://127.0.0.1:${process.env.API_PORT}`
		);
	});
};

module.exports = {
	app,
	connectDatabase,
	startServer,
};

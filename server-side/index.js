/** @format */

const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8000;
const cookieParser = require("cookie-parser");

//middlewares
app.use(cookieParser());
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"http://localhost:5174",
			"https://assign-ment-11.web.app",
		],
		credentials: true,
	}),
);
// body parser
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zyi5zeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

// token validate middlewares
const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(401).send({ message: "unauthorized access" });
	}
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.status(401).send({ message: "unathorized access" });
		req.user = decoded;
		next();
	});
};

const cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
//localhost:5000 and localhost:5173 are treated as same site.  so sameSite value must be strict in development server.  in production sameSite will be none
// in development server secure will false .  in production secure will be true

async function run() {
	try {
		const foodsCollection = client.db("foodsDB").collection("foodsCollection");
		const requestFoodCollection = client
			.db("foodsDB")
			.collection("requestFoodCollection");
		// Connect the client to the server	(optional starting in v4.7)
		// await client.connect();

		// add food
		app.post("/add-food", async (req, res) => {
			const foodData = req.body;
			const result = await foodsCollection.insertOne(foodData);
			res.send(result);
		});
		// delete a food
		app.delete("/deleteFood/:id", async (req, res) => {
			const id = req.params.id;
			// console.log(id);
			const query = { _id: new ObjectId(id) };
			const result = await foodsCollection.deleteOne(query);
			res.send(result);
		});
		// update a food
		app.put("/updateFoodInfo/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) };
			const food = req.body;
			const updatedDoc = {
				$set: {
					foodName: food.updatedFoodName,
					foodImage: food.updatedFoodImage,
					quantity: food.updatedQuantity,
					status: food.updatedStatus,
					additional: food.updatedAdditional,
					expiredDate: food.updatedExpiredDate,
					pickupLocation: food.updatedPickupLocation,
				},
			};
			const options = { upsert: true };
			const result = await foodsCollection.updateOne(
				filter,
				updatedDoc,
				options,
			);
			res.send(result);
		});
		// change status
		app.patch("/updateStatus/:id", async (req, res) => {
			const id = req.params.id;
			const data = req.body.status;
			const updatedStatus = { $set: { status: data } };
			const options = { upsert: true };
			const query = { _id: new ObjectId(id) };
			const result = await foodsCollection.updateOne(
				query,
				updatedStatus,
				options,
			);
			res.send(result);
			console.log(id, data);
		});

		// get single food
		app.get("/food-details/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await foodsCollection.findOne(query);
			res.send(result);
		});

		// get available foods
		app.get("/available-foods", async (req, res) => {
			let sortOptions = {};
			const search = req.query.search;
			const sortValue = req.query.sort;
			// console.log(sortValue);
			const query = {
				status: "Available",
			};
			if (search) query.foodName = { $regex: search, $options: "i" };
			if (sortValue === "date") {
				sortOptions = { sort: { expiredDate: 1 } };
			}
			else if (sortValue == "quantity") {
				sortOptions = { sort: { quantity: 1 } };
			}
			const result = await foodsCollection.find(query, sortOptions).toArray();
			res.send(result);
		});
		//get my added foods
		app.get("/manage-my-foods", verifyToken, async (req, res) => {
			const email = req.query.email;
			const userEmail = req.user.email;
			if (userEmail !== email) {
				return res.status(403).send({ message: "forbidden access" });
			}
			const filter = { "donator.donatorEmail": email };
			const result = await foodsCollection.find(filter).toArray();
			res.send(result);
		});

		// jwt related api
		app.post("/jwt", async (req, res) => {
			const userPayload = req.body;
			const token = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: "1d",
			});
			res.cookie("token", token, cookieOptions).send({ success: true });
		});
		// clear cookies
		app.post("/clearCookies", (req, res) => {
			res
				.clearCookie("token", { ...cookieOptions, maxAge: 0 })
				.send({ success: true });
		});
		// requested food
		app.post("/requested-foods-collection", async (req, res) => {
			const foodData = req.body;
			const result = await requestFoodCollection.insertOne(foodData);
			res.send(result);
		});
		// get requested foods
		app.get("/my-requested-foods", verifyToken, async (req, res) => {
			const user = req.user.email;
			const email = req.query.email;
			if (user !== email)
				return res.status(403).send({ message: "forbidden access" });
			const query = { email: email };
			const result = await requestFoodCollection.find(query).toArray();
			res.send(result);
		});

	} finally {
		// Send a ping to confirm a successful connection
	}
}
run().catch(console.log);

app.get("/", (req, res) => {
	res.send("Assignment -11 server is running");
});

app.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});

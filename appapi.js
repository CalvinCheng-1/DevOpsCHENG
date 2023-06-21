const express = require("express");
const yahooFinance = require("yahoo-finance");
let server = express();
server.use(express.json());

server.listen(8080, (errors) => {
  if (errors) {
    console.log("Could not start the server. Error: " + errors);
  } else {
    console.log("Server start at port 8080");
  }
});

server.get("/", (req, res) => {
  res.send(["Hello! This is API service for resource retrieve"]);
});

server.get("/stall/inventory", (req, res, next) => {
	const invcode = req.query.invcode;
  
	// Check if invcode is provided
	if (!invcode) {
	  return res.status(400).json({ error: "Inventory code is required" });
	}
  
	let inventoryCount = 0;
  
	// Retrieve the inventory count based on invcode
	if (invcode === "ABCDEF") {
	  inventoryCount = 10;
	} else if (invcode === "123456") {
	  inventoryCount = 20;
	}
  
	// Return the inventory count as JSON
	res.json({ invcode: invcode, count: inventoryCount });
  });  

server.get("/stall", (req, res) => {
	res.send(["Hello! This is API service for Inventory retrieve"]);
  });

  server.get("/yf", (req, res) => {
	res.send(["Hello! This is API service for Stock value retrieve"]);
  });
server.get("/yf/stock", (req, res, next) => {
  const symbol = req.query.symbol; // Retrieve the symbol from the query parameter

  // Check if symbol is provided
  if (!symbol) {
    return res.status(400).json({ error: "Symbol is required" });
  }

  // Retrieve the stock quote for the symbol
  yahooFinance.quote(
    {
      symbol: symbol,
      modules: ["price"],
    },
    (err, quotes) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to retrieve stock quote" });
      }

      // Check if the quote is available for the symbol
      if (!quotes.price) {
        return res.status(404).json({ error: "Stock quote not found" });
      }

      // Extract the price from the quote response
      const price = quotes.price.regularMarketPrice;

      // Return the stock price as JSON
      res.json({ symbol: symbol, price: price });
    }
  );
});

server.get("*", function (req, res) {
  res.redirect("/");
});

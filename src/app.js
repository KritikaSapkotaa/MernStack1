import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");

});

app.get("/products", (req, res) => {
    const products = ["Samsung s24 ultra", "Iphone 14", "Acer predator laptop"];
    res.json(products);
});

app.listen(5000, () => {
    console.log("Server running at 5000...");
});
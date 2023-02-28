const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 顧客情報をサーバーに保管する
const customers = [
  { name: "田中", id: 1 },
  { name: "加藤", id: 2 },
  { name: "鈴木", id: 3 },
  { name: "高田", id: 4 },
  { name: "山田", id: 5 },
];

// getメソッド
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  res.send(customer);
});

// postメソッド
app.post("/api/customers", (req, res) => {
  const customer = { name: req.body.name, id: customers.length + 1 };
  customers.push(customer);
  res.send(customers);
});

// putメソッド
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.name = req.body.name;
  res.send(customer);
});

// deleteメソッド
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));

  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  res.send(customer);
});

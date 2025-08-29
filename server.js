import app from "./app.js";
import employees from "./db/employees.js";

app.route("/").get((req, res) => {
  res.send("Hello employees");
});

app.route("/employees").get((req, res) => {
  res.json(employees);
});

app.route("/employees/:id").get((req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((el) => el.id === id);

  if (employee) {
    res.send(employee);
  } else {
    res.status(404).json({ error: "there is no employee with that id" });
  }
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const employee = employees[randomIndex];
  res.send(employee);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

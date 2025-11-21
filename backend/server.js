const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: "Mahesh Mahapatra", regd: "2301292053", course: "CSE" },
  { id: 2, name: "Ritesh Kumar", regd: "2301292304", course: "CSE" },
  { id: 3, name: "Ayan Dandapat", regd: "2301292024", course: "CSE" },
  { id: 4, name: "Kumar Shanu", regd: "2301292506", course: "CSE" },
  { id: 5, name: "Md Sadique Akhtar", regd: "2301292251", course: "CSE" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log("🚀 Backend API running on port 5000");
});

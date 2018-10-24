const express = require("express");
const Person = require("../models/Person.js");
const PersonRouter = express.Router();

PersonRouter.route("/")
	.get((req,res) => {
		Person.find({}, (err, people) => {
			res.json(people);
		});
	})
	.post((req,res) => {
		let person = new Person(req.body);
		person.save();
		res.status(201).send(person);
	});
;

PersonRouter.route("/:PersonId")
	.get((req,res) => {
		Person.findById(req.params.PersonId, (err, person) => {
			res.json(person);
		});
	});
module.exports = PersonRouter;

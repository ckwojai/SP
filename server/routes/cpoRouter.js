const express = require("express");
const CPO = require("../models/cpo.js");
const cpoRouter = express.Router();

cpoRouter.route("/")
	.get((req,res) => {
		CPO.find({}, (err, cpos) => {
			res.json(cpos);
		});
	})
	.post((req,res) => {
		let cpo = new CPO(req.body);
		cpo.save();
		res.status(201).send(cpo);
	});
;


cpoRouter.route("/:cpoId")
	.get((req,res) => {
		CPO.findById(req.params.bookId, (err, cpo) => {
			res.json(cpo);
		});
	});
module.exports = cpoRouter;

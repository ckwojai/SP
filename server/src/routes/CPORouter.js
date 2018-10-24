const express = require("express");
const CPO = require("../models/CPO.js");
const CPORouter = express.Router();

CPORouter.route("/")
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

CPORouter.route("/:CPOId")
	.get((req,res) => {
		CPO.findById(req.params.CPOId, (err, cpo) => {
			res.json(cpo);
		});
	});
module.exports = CPORouter;

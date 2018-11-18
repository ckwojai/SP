const express = require("express");
const CPO = require("../models/CPO.js");
const CPORouter = express.Router();

CPORouter.route("/")
	.get((req,res) => {
		CPO.find({}, (err, cpos) => {
			res.json(cpos);
		});
	})
	.post((req,res, next) => {
		let cpo = new CPO(req.body);
		cpo.save((err) => {
			if (err) {
				res.status(422).send(err.message);
				return next(err);
		}
		res.status(201).send(cpo);
		});
	})

;
CPORouter.route("/:CPOId")
	.get((req,res) => {
		CPO.findById(req.params.CPOId, (err, cpo) => {
			res.json(cpo);
		});
	})
	.put((req, res, next) => {
		let id = req.params.CPOId;
		let cpo = req.body;
		CPO.findByIdAndUpdate(id, cpo, (err, updatedCPO) => {
			if (err) {
				res.status(422).send(err.message);
				return next(err);
			} else {
				res.status(201).send(updatedCPO);
			}
		});
	});

module.exports = CPORouter;

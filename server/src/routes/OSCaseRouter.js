const express = require("express");
const Case = require("../models/OSCase.js");
const CaseRouter = express.Router();

CaseRouter.route("/")
	.get((req,res) => {
		Case.find({}, (err, cases) => {
			res.json(cases);
		});
	})
	.post((req,res, next) => {
		console.log(req.body);
		let tempCase = new Case(req.body);
		tempCase.save((err) => {
			if (err) {
				res.status(422).send(err.message);
				return next(err);
		}
		res.status(201).send(tempCase);
		});
	})

;
CaseRouter.route("/:caseId")
	.get((req,res) => {
		Case.findById(req.params.caseId, (err, tempCase) => {
			res.json(tempCase);
		});
	})
	.put((req, res, next) => {
		let id = req.params.caseId;
		let tempCase = req.body;
		Case.findByIdAndUpdate(id, tempCase, (err, updatedCase) => {
			if (err) {
				res.status(422).send(err.message);
				return next(err);
			} else {
				res.status(201).send(updatedCase);
			}
		});
	});

module.exports = CaseRouter;

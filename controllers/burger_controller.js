const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function(req, res){
    burger.selectAll((data) => {
        const viewData = {
            burgers: data
        }
        res.render("index", viewData)
    })
  
})

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
        res.json({ id: data.insertID });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = { id: req.params.id };

    console.log("condition", condition);

    burger.updateOne({devoured: true}, condition, (results) => {
        if (results.changedRows == 0 ){
            return response.status(404).end();
        };
        response.status(200).end();
    });
});

module.exports = router
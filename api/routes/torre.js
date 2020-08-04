const express = require("express");
const router = express.Router();
const Axios = require("axios");

router.get("/:username", async (req, res) => {
  try {
    const response = await Axios.get(
      `https://bio.torre.co/api/bios/${req.params.username}`
    );
    res.status(200).send(response.data.strengths);
  } catch (err) {
    console.log(err);
    res.send({ error: 1 });
  }
});

router.get("/mentor/:skill", async (req, res) => {
  try {
    const url = `https://search.torre.co/people/_search/?currency=USD$&page=0&periodicity=hourly&lang=en&size=20&aggregate=false&offset=0`;
    const response = await Axios.post(url, {
      and: [
        { opento: { term: "mentoring" } },
        {
          skill: {
            term: `${req.params.skill}`,
            experience: "potential-to-develop",
          },
        },
      ],
    });
    console.log(response.data.results);
    res.status(200).send(response.data.results);
  } catch (err) {
    console.log(err);
    res.send({ error: 1 });
  }
});

module.exports = router;

const fs = require("fs");
const path = require("path");

const indexcontrollers = {
  home: function (req, res) {
return res.render("index", { title: "",  });
  },
  about: function (req, res) {
res.render("about", { title: "about",  });
  },
  contact: function (req, res) {
    return res.render("contact", { title: "contact",  });
  },
};

module.exports = indexcontrollers;
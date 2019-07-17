"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var StringUtil = require("../../utilities/string-util");

function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.json({
      message: validation.message
    });
  }

  var user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password
  };
  console.log(user);
  return res.json();
}

function validateIndex(body) {
  var errors = '';

  if (StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }

  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}
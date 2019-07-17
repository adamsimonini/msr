"use strict";

var _interopRequireDefault = require("C:\\code\\msp\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = _interopRequireDefault(require("./api/task/tasks-routes"));

var _registerRoutes = _interopRequireDefault(require("./api/register/register-routes"));

var _authRoutes = _interopRequireDefault(require("./api/auth/auth-routes.js"));

var _userRoutes = _interopRequireDefault(require("./api/user/user-routes"));

function registerRoutes(app) {
  app.use('/api', _tasksRoutes.default);
  app.use('/api', _registerRoutes.default);
  app.use('/api', _userRoutes.default);
  app.use('/api', _authRoutes.default);
}
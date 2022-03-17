'use strict';

var utils = require('../utils/writer.js');
var Medecin = require('../service/MedecinService');

module.exports.addmedecin = function addmedecin (req, res, next) {
  var body = req.swagger.params['body'].value;
  Medecin.addmedecin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInventory = function getInventory (req, res, next) {
  Medecin.getInventory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getmedecinById = function getmedecinById (req, res, next) {
  var medecinId = req.swagger.params['medecinId'].value;
  Medecin.getmedecinById(medecinId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nearmedecin = function nearmedecin (req, res, next) {
  var speciality = req.swagger.params['speciality'].value;
  var body = req.swagger.params['body'].value;
  Medecin.nearmedecin(speciality, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addPatient = function addPatient (req, res, next) {
  var patientId = req.swagger.params['patientId'].value;
  var medecin = req.swagger.params['medecin'].value;
  Medecin.addPatient(patientId, medecin)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
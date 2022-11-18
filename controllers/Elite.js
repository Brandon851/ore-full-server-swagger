'use strict';

var utils = require('../utils/writer.js');
var Elite = require('../service/EliteService');

module.exports.eliteExpressPOST = function eliteExpressPOST (req, res, next, body, fullName, phoneNumber, source, clientType, operationType, propertyType, location) {
  Elite.eliteExpressPOST(body, fullName, phoneNumber, source, clientType, operationType, propertyType, location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

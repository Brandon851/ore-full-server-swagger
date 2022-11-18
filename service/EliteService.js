'use strict';


/**
 * Agrega un prospecto de elite express
 * Agregar un nuevo prospecto de elite tipo express a la base de datos
 *
 * body EliteBody Crear un nuevo prospecto express a la base de datos
 * fullName String Nombre completo del prospecto express
 * phoneNumber String Número de del prospecto express
 * source String Fuente de donde se obtuvo la información del prospecto express
 * clientType String Tipo de cliente del prospecto express (optional)
 * operationType String Tipo de operación del prospecto express (optional)
 * propertyType String Tipo de propiedad del prospecto express (optional)
 * location String Ubicación de quién dio de alta el prospecto express (optional)
 * returns EliteExpressPostResponseSuccess
 **/
exports.eliteExpressPOST = function(body,fullName,phoneNumber,source,clientType,operationType,propertyType,location) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Prospect Elite Express sucessfully created"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


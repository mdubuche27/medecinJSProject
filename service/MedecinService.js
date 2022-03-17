const Medecin = require('../models/medecin')


exports.addmedecin = function(body) {
  return new Promise(function(resolve, reject) {
    const newMedecin = Medecin({
      name: body.name,
      city: body.city,
      speciality: body.speciality,
      id: body.id,
      lat: body.lat,
      long: body.long,
      listPatient: []
    })
    newMedecin.save();
    resolve();
  });
}



exports.getInventory = function() {
  return new Promise(function(resolve, reject) {
    var res = {};
    Medecin.find().then(med =>{
      res['application/json'] = med;
      if (Object.keys(res).length > 0) {
        resolve(res[Object.keys(res)[0]]);
      } else {
        resolve();
      }
    })
  });
}

exports.addPatient = function(patientId, medecin) {
  return new Promise(function(resolve, reject) {
    var res = {};

    console.log(medecin.id)
    console.log(patientId)
    if (!medecin.listPatient.includes(patientId)){

      medecin.listPatient.push(patientId)

      Medecin.updateOne(
        {"id": medecin.id},
        medecin
      ).then(med =>{
        resolve(res[Object.keys(res)[0]]);
      })
    }
    else {
      resolve();
    }
  });
}


exports.getmedecinById = function(medecinId) {
  return new Promise(function(resolve, reject) {
    var res = {};
    Museum.findOne({id : museumId}).then(med => {
      res['application/json'] = med;
      if (Object.keys(res).length > 0) {
        resolve(res[Object.keys(res)[0]]);
      } else {
        resolve();
      }
    })
  });
}


exports.nearmedecin = function(speciality, body) {

  return new Promise(function(resolve, reject) {
    var res = {}
    
    Medecin.find({"speciality" : speciality}).then(med => {
      var nearest = med[0];

      med.forEach(m => {

        var DistMLat = Math.abs(body.lat - m.lat) * Math.abs(body.lat - m.lat)
        var DistMLong = Math.abs(body.long - m.long) * Math.abs(body.long - m.long)
        var DistNLat = Math.abs(body.lat - nearest.lat) * Math.abs(body.lat - nearest.lat)
        var DistNLong = Math.abs(body.long - nearest.long) * Math.abs(body.long - nearest.long)
        
        var distM = Math.sqrt(DistMLat + DistMLong);
        var distNearest = Math.sqrt(DistNLat + DistNLong);

        if (distM < distNearest){
           nearest = m;
        }

      });

      res['application/json'] = nearest;
      if (Object.keys(res).length > 0) {
        resolve(res[Object.keys(res)[0]]);
      } else {
        resolve();
      }

    })
  });
}


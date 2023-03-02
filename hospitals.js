const fs = require('fs');

// GET all hospitals
const getHospitals = () => {
  const hospitals = JSON.parse(fs.readFileSync('hospitals.json'));
  return hospitals;
}

// GET
const getHospital = (name) => {
  const hospitals = JSON.parse(fs.readFileSync('hospitals.json'));
  const hospital = hospitals.hospitals.find(hospital => hospital.name === name);
  return hospital;
}

// POST
const addHospital = (name, patientCount, location) => {
  const hospitals = JSON.parse(fs.readFileSync('hospitals.json'));
  const newHospital = {
    name: name,
    patientCount: patientCount,
    location: location
  };
  hospitals.hospitals.push(newHospital);
  fs.writeFileSync('hospitals.json', JSON.stringify(hospitals));
}


// PUT

const updateHospital = (name, patientCount, location) => {
  const hospitals = JSON.parse(fs.readFileSync('hospitals.json'));
  const hospitalIndex = hospitals.hospitals.findIndex(hospital => hospital.name === name);
  if (hospitalIndex === -1) {
    console.log(`Hospital with name ${name} not found.`);
  } else {
    hospitals.hospitals[hospitalIndex].patientCount = patientCount;
    hospitals.hospitals[hospitalIndex].location = location;
    fs.writeFileSync('hospitals.json', JSON.stringify(hospitals));
  }
}


// DELETE 

const deleteHospital = (name) => {
  const hospitals = JSON.parse(fs.readFileSync('hospitals.json'));
  const hospitalIndex = hospitals.hospitals.findIndex(hospital => hospital.name === name);
  if (hospitalIndex === -1) {
    console.log(`Hospital with name ${name} not found.`);
  } else {
    hospitals.hospitals.splice(hospitalIndex, 1);
    fs.writeFileSync('hospitals.json', JSON.stringify(hospitals));
  }
}

 console.log(getHospitals()); // get all hospitals
// console.log(getHospital('General Hospital')); // get 
//  addHospital('Kims Hospital', 50, 'Anayara'); // add 
// updateHospital('Community Hospital', 150, ''); // update
// deleteHospital('General Hospital'); // delete

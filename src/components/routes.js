import React from 'react';
import PatientHome from './PatientHome';
import Navbar from './Navbar';
import Report from './Report';
import Donors from './Donors';


const routes = [
  { name: "PatientHome", path: "/", exact: true, main: () => <PatientHome /> },
  { name: "Report", path: "/donateplasma", exact: true, main: () => <Report /> },
  { name: "FindADonor", path: "/donors", exact: true, main: () => <Donors />}
];

export default routes;
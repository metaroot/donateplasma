import React from 'react';
import PatientHome from './PatientHome';
import Navbar from './Navbar';
import Report from './Report';

const routes = [
  { name: "PatientHome", path: "/", exact: true, main: () => <PatientHome /> },
  { name: "Report", path: "/donateplasma", exact: true, main: () => <Report /> },
];

export default routes;
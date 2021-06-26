import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import Title from './Title';
import firebaseDb from "../../config/firebase";
import { isAuthenticated } from "../../utils/auth";
// Generate Order Data
function createData(id, sub, sem, grade) {
  return { id, sub, sem, grade };
}

const rows = [
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),
  createData(0, 'maths', 2, 'F'),

  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Grades() {
  const classes = useStyles();
  const user_id = isAuthenticated().id;
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("grades").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Grades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { Object.keys(contactObjects).map((val,key) =>(
         user_id == contactObjects[val].email  ? 
            <TableRow key={key}>
              <TableCell>{contactObjects[val].fullName}</TableCell>
              <TableCell>{contactObjects[val].mobile}</TableCell>
            </TableRow>
          : null))
        }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
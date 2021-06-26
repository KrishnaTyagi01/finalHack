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
function createData(id, name, status, lastdate) {
  return { id, name, status, lastdate };
}

const rows = [
  createData(0, 'assign1', 0, '16 Mar, 2019'),
  createData(0, 'assign2', 0, '16 Mar, 2019'),
  createData(0, 'assign3', 1, '16 Mar, 2019'),
  createData(0, 'assign4', 0, '16 Mar, 2019'),
  createData(0, 'assign5', 1, '16 Mar, 2019'),
  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const user_id = isAuthenticated().id;
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("assignment").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  console.log(contactObjects);
  return (
    <React.Fragment>
      <Title>Assignments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Assignments</TableCell>
            <TableCell>Last Date</TableCell>
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
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
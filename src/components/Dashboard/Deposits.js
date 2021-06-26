import React, { useEffect, useState } from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import firebaseDb from "../../config/firebase";
import { isAuthenticated } from "../../utils/auth";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  const user_id = isAuthenticated().id;
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("jobs").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  console.log(contactObjects)
  var applied =0;
  var heardback = 0;
  Object.keys(contactObjects).map(val => {
    if(contactObjects[val].email == user_id){
      applied++;

      if(contactObjects[val].mobile == 'Yes')
      {
        heardback++;
      }
    }
  })
  console.log(applied)
  console.log(heardback)

  useEffect(()=>{

  }, [applied, heardback])
  return (
    <React.Fragment>
      <Title>Jobs Applied To</Title>
      <Typography component="p" variant="h4">
        {applied}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Heard back : {heardback}
      </Typography>
      <div>
        <Link color="primary" to="/jobs" >
          check all
        </Link>
      </div>
    </React.Fragment>
  );
}
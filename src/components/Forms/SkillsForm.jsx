import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Topbar from "../../pages/Topbar";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    // flexWrap: "wrap",
    // width: "75vw",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SkillsForm() {
  const classes = useStyles();
  const history = useHistory();
  let skillCounts = 1;

  const [values, setValues] = useState({
    name: "",
    job: "",
    email: "",
    phoneNo: "",
    proSum: "",
    skill1: "",
    skillsum1: "",
    skill2: "",
    skillsum2: "",
    techSkill: { s1: "", s2: "", s3: "", s4: "", s5: "", s6: "" },
    exp1: { comp: "", year: "", des: "", summary: "" },
    exp2: { comp: "", year: "", des: "", summary: "" },
    edu1: { college: "", major: "", gpa: "" },
    edu2: { college: "", major: "", gpa: "" },
  });
  const [submit, setSubmit] = useState(false);
  const { exp1, exp2, edu1, edu2, techSkill } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    return history.push({ pathname: "/resume", data: { values } });
  };
  console.log(values);
  const techSkillInput = () => (
    <>
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s1: e.target.value },
          });
        }}
      />
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s2: e.target.value },
          });
        }}
      />
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s3: e.target.value },
          });
        }}
      />
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s4: e.target.value },
          });
        }}
      />
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s5: e.target.value },
          });
        }}
      />
      <TextField
        id="standard-basic"
        margin="dense"
        label="Skill Name"
        style={{ margin: "20px 80px" }}
        onChange={(e) => {
          setValues({
            ...values,
            techSkill: { ...techSkill, s6: e.target.value },
          });
        }}
      />
    </>
  );
  const [techSkills, setTechSkills] = useState(1);

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        <h2 style={{ margin: "8px" }}>
          <b>BASIC INFO</b>
        </h2>
        <div style={{ display: "flex" }}>
          <TextField
            label="Name"
            id="outlined-margin-dense"
            className={classes.textField}
            helperText="Enter your full name"
            margin="dense"
            variant="outlined"
            required="true"
            onChange={handleChange("name")}
          />
          <TextField
            label="Job"
            id="outlined-margin-dense"
            className={classes.textField}
            helperText="what Job are you applying for"
            margin="dense"
            variant="outlined"
            required="true"
            onChange={handleChange("job")}
          />
          <TextField
            label="Email"
            id="outlined-margin-dense"
            className={classes.textField}
            helperText="Enter your email"
            type="email"
            margin="dense"
            variant="outlined"
            required="true"
            onChange={handleChange("email")}
          />
          <TextField
            label="Phone Number"
            id="outlined-margin-dense"
            className={classes.textField}
            helperText="your business phone number"
            margin="dense"
            variant="outlined"
            required="true"
            onChange={handleChange("phoneNo")}
          />
        </div>
        <TextField
          id="filled-full-width"
          label="Professional Summary"
          style={{ margin: 8 }}
          helperText="Summarize your skills and Experience in less than 100 words"
          fullWidth
          required="true"
          margin="normal"
          multiline
          rows={3}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange("proSum")}
        />

        <h2 style={{ margin: "8px" }}>
          <b>SKILLS</b>
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div className="skillform_skill" style={{ width: "100%" }}>
            <TextField
              label="Primary Skills"
              id="outlined-margin-dense"
              className={classes.textField}
              helperText="Enter your primary Skills"
              margin="dense"
              variant="outlined"
              onChange={handleChange("skill1")}

              //   required="true"
            />

            <TextField
              id="filled-full-width"
              label="skill summary"
              style={{ margin: 8 }}
              helperText="Write about your knowledge in this field"
              fullWidth
              // required="true"
              margin="normal"
              multiline
              rows={3}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleChange("skillsum1")}
            />
          </div>
          <div className="skillform_skill" style={{ width: "100%" }}>
            <TextField
              label="Secondary Skill"
              id="outlined-margin-dense"
              className={classes.textField}
              helperText="Enter your secondary Skill"
              margin="dense"
              variant="outlined"
              onChange={handleChange("skill2")}
              //   required="true"
            />

            <TextField
              id="filled-full-width"
              label="skill summary"
              style={{ margin: 8 }}
              helperText="Write about your knowledge in this field"
              fullWidth
              // required="true"
              margin="normal"
              multiline
              rows={3}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleChange("skillsum2")}
            />
          </div>
        </div>

        <h2 style={{ margin: "8px" }}>
          <b>TECHNICAL SKILLS</b>
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{[...Array(techSkills)].map((_, i) => techSkillInput())}</div>
        </div>

        <h2 style={{ margin: "8px" }}>
          <b>EXPERIENCE</b>
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
            <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
              <div>
                <TextField
                  label="Company"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="Company you worked In"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp1: { ...exp1, comp: e.target.value },
                    });
                  }}
                />
                <TextField
                  label="Year"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="eg: 2007-2009"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp1: { ...exp1, year: e.target.value },
                    });
                  }}
                />
                <TextField
                  label="Designation"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="Your designation in the organization"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp1: { ...exp1, des: e.target.value },
                    });
                  }}
                />
              </div>
              <TextField
                id="filled-full-width"
                label="Summary"
                style={{ margin: 8 }}
                helperText="Summarize your experience in the company"
                fullWidth
                required="true"
                margin="normal"
                multiline
                rows={3}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setValues({
                    ...values,
                    exp1: { ...exp1, summary: e.target.value },
                  });
                }}
              />
            </div>
            <Divider />
            <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
              <div>
                <TextField
                  label="Company"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="Company you worked In"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp2: { ...exp2, comp: e.target.value },
                    });
                  }}
                />
                <TextField
                  label="Year"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="eg: 2007-2009"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp2: { ...exp2, year: e.target.value },
                    });
                  }}
                />
                <TextField
                  label="Designation"
                  id="outlined-margin-dense"
                  className={classes.textField}
                  helperText="Your designation in the organization"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      exp2: { ...exp2, des: e.target.value },
                    });
                  }}
                />
              </div>
              <TextField
                id="filled-full-width"
                label="Summary"
                style={{ margin: 8 }}
                helperText="Summarize your experience in the company"
                fullWidth
                required="true"
                margin="normal"
                multiline
                rows={3}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setValues({
                    ...values,
                    exp2: { ...exp2, summary: e.target.value },
                  });
                }}
              />
            </div>
          </div>
        </div>

        <h2 style={{ margin: "8px" }}>
          <b>EDUCATION</b>
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "20px 0" }}>
            <div>
              <TextField
                label="Graduation"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Name of college"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu1: { ...edu1, college: e.target.value },
                  });
                }}
              />
              <TextField
                label="Major"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Enter your Major"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu1: { ...edu1, major: e.target.value },
                  });
                }}
              />
              <TextField
                label="GPA"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="GPA"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu1: { ...edu1, gpa: e.target.value },
                  });
                }}
              />
            </div>
          </div>
          <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
            <div>
              <TextField
                label="Post Graduation"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Name of college"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu2: { ...edu2, college: e.target.value },
                  });
                }}
              />
              <TextField
                label="Major"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Enter your Major"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu2: { ...edu2, major: e.target.value },
                  });
                }}
              />
              <TextField
                label="GPA"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="GPA"
                margin="dense"
                variant="outlined"
                required="true"
                onChange={(e) => {
                  setValues({
                    ...values,
                    edu2: { ...edu2, gpa: e.target.value },
                  });
                }}
              />
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ marginTop: "20px" }}
          onClick={() => setSubmit(true)}
        >
          Submit
        </Button>

        {submit ? handleSubmit() : null}
      </main>
    </div>
  );
}

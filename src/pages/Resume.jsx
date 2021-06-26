import React from "react";
import "../css/resume.css";
import { Button } from "@material-ui/core";
// import

const ResumeTemp = ({ history }) => {
  const { values } = history?.location?.data;
  const { exp1, exp2, edu1, edu2 } = values;
  const { s1, s2, s3, s4, s5, s6 } = values.techSkill;
  const techskills = [s1, s2, s3, s4, s5, s6];

  // const ref = React.createRef();

  console.log(techskills);
  console.log("resumedata:", values);
  // const ref = React.createRef();
  // const curcom = this.ref
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="doc2" class="yui-t7" style={{ width: "65%" }}>
        <div id="inner">
          <div id="hd">
            <div
              class="yui-gc"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div class="yui-u first">
                <h1>{values.name}</h1>
                <h2>{values.job}</h2>
              </div>

              <div class="yui-u">
                <div class="contact-info">
                  <h3>
                    <Button
                      id="pdf"
                      onClick={() => window.print()}
                      href="/resume"
                    >
                      Download PDF
                    </Button>
                  </h3>
                  <h3>
                    <a href="mailto:name@yourdomain.com">{values.email}</a>
                  </h3>
                  <h3>{values.phoneNo}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div class="yui-b">
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Profile</h1>
                  </div>
                  <div class="yui-u" style={{ maxWidth: "180px" }}>
                    <p class="enlarge">{values.proSum}</p>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Skills</h1>
                  </div>
                  <div class="yui-u">
                    <div class="talent">
                      <h2>{values.skill1}</h2>
                      <p>{values.skillsum1}</p>
                    </div>
                    <div class="talent">
                      <h2>{values.skill2}</h2>
                      <p>{values.skillsum2}</p>
                    </div>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Technical</h1>
                  </div>
                  <div class="yui-u" style={{ display: "flex" }}>
                    <ul
                      class="talent"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {techskills.map((val) => (
                        <li
                          style={{
                            width: "33%",
                            borderBottom: "none",
                            padding: "12px 12px",
                            fontSize: "1.2rem",
                          }}
                        >
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h1>Experience</h1>
                  </div>

                  <div class="yui-u">
                    <div class="job">
                      <h2>{exp1.comp}</h2>
                      <h3>{exp1.des}</h3>
                      <h4>{exp1.year}</h4>
                      <p>{exp1.summary}</p>
                    </div>

                    <div class="job">
                      <h2>{exp2.comp}</h2>
                      <h3>{exp2.des}</h3>
                      <h4>{exp2.year}</h4>
                      <p>{exp2.summary}</p>
                    </div>
                  </div>
                </div>

                <div class="yui-gf last">
                  <div class="yui-u first">
                    <h1>Graduation</h1>
                  </div>
                  <div class="yui-u">
                    <h2>{edu1.college}</h2>
                    <h3>
                      {edu1.major} &mdash; <strong>{edu1.gpa}</strong>{" "}
                    </h3>
                  </div>
                </div>
                <div class="yui-gf last">
                  <div class="yui-u first">
                    <h1>Post Graduation</h1>
                  </div>
                  <div class="yui-u">
                    <h2>{edu2.college}</h2>
                    <h3>
                      {edu2.major} &mdash; <strong>{edu2.gpa}</strong>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              {values.name} &mdash;{" "}
              <a href="mailto:name@yourdomain.com">{values.email}</a> &mdash;{" "}
              {values.phoneNo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTemp;

var sql = require("mysql");
var dbConfig = {
  host: "professor-scheduler-db.mysql.database.azure.com",
  user: "db",
  password: "UTDallas1",
  dialect: "mysql",
  database: "professorschema",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
};

var Repo = {};
Repo.GetInstructorsAsync = async function GetInstructors(id) {
  console.log("GetInstructors");
  return new Promise((resolve, reject) => {
    let conn = new sql.createConnection(dbConfig);
    let srchStr = `SELECT * FROM professorschema.classinstructor prof`;
    conn.query(srchStr, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
};

Repo.GetInstructorByIDAsync = async function GetInstructorByID(id) {
  console.log("GetInstructorByID req.query");
  return new Promise((resolve, reject) => {
    try {
      let conn = new sql.createConnection(dbConfig);
      //Get Class with Insturctors:  let srchStr=`SELECT * FROM professorschema.class cls inner join professorschema.classinstructorxref instructorxref on instructorxref.class_number=cls.class_number	inner join professorschema.classinstructor classinstructor on classinstructor.classInstructorId=instructorxref.classInstructorId where cls.class_number=${req.params.id}`
      let srchStr = `SELECT * FROM professorschema.classinstructor prof where prof.classInstructorId=${id}`;
      conn.query(srchStr, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    } catch (err) {
      console.error(err);
    }
  });
};

Repo.InstructorSearchAsync = async function InstructorSearch(searchFilter) {
  console.log("InstructorSearch req.query", searchFilter);
  return new Promise((resolve, reject) => {
    let conn = new sql.createConnection(dbConfig);
    let srchStr = `SELECT * FROM professorschema.classinstructor prof where prof.name like '%${searchFilter}%'`;
    console.log("InstructorSearch srchStr", srchStr);
    conn.query(srchStr, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
};

/*
[{"classInstructorId":2,"name":"Andras Farago","email":null,"phone":null,"experience":null,"education":null,"email_notification":null,"phone_notification":null,"instructor_schedule":null}]
*/
Repo.UpdateInstructor = async function UpdateInstructor(instructoritm) {
  console.log("UpdateInstructor called");
  return new Promise((resolve, reject) => {
    console.log("UpdateInstructor inside promise", instructoritm);

    let email = "null";
    if (instructoritm.email != "") email = "'" + instructoritm.email + "'";

    let phone = "null";
    if (instructoritm.phone != "") phone = "'" + instructoritm.phone + "'";

    let experience = "null";
    if (instructoritm.experience != "")
      experience = "'" + instructoritm.experience + "'";

    let education = "null";
    if (instructoritm.education != "")
      education = "'" + instructoritm.education + "'";

    let phone_notification = "0";
    if (instructoritm.phone_notification) phone_notification = "1";

    let email_notification = "0";
    if (instructoritm.email_notification) email_notification = "1";

    let instructor_schedule = "null";
    if (instructoritm.instructor_schedule != "")
      instructor_schedule = "'" + instructoritm.instructor_schedule + "'";

    console.log(instructoritm, email_notification);

    let conn = new sql.createConnection(dbConfig);
    let srchStr =
      "UPDATE classinstructor SET name = '" +
      instructoritm.name +
      "',email = " +
      email +
      ",phone = " +
      phone +
      ",experience = " +
      experience +
      ",education = " +
      education +
      ",phone_notification = " +
      phone_notification +
      ",email_notification = " +
      email_notification +
      ",instructor_schedule = " +
      instructor_schedule +
      " WHERE classInstructorId = " +
      instructoritm.classInstructorId;
    conn.query(srchStr, (err, result) => {
      console.log("returning from async inside promise");
      return err ? reject(err) : resolve(result);
    });
  });
};
Repo.InsertInstructor = async function InsertInstructor(instructoritm) {
  console.log("UpdateInstructor called");
  return new Promise((resolve, reject) => {
    console.log("UpdateInstructor inside promise", instructoritm);

    let conn = new sql.createConnection(dbConfig);
    let srchStr = `INSERT classinstructor SET name = '${instructoritm.name}',email = '${instructoritm.email}',phone = '${instructoritm.phone}',experience = '${instructoritm.experience}',education = '${instructoritm.education}',phone_notification = '${instructoritm.phone_notification}',instructor_schedule = '${instructoritm.instructor_schedule}' WHERE classInstructorId = ${instructoritm.classInstructorId}`;
    conn.query(srchStr, (err, result) => {
      console.log("returning from async inside promise");
      return err ? reject(err) : resolve(result);
    });
  });
};

module.exports = Repo;

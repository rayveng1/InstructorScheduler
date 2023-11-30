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

Repo.GetClassesAsync = async function GetClasses(id) {
  console.log("GetClasses");
  return new Promise((resolve, reject) => {
    let conn = new sql.createConnection(dbConfig);
    let srchStr = `SELECT * FROM professorschema.class cls LIMIT 15;`;
    conn.query(srchStr, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
};

Repo.GetClassesByCourseNumberAsync = async function GetClassesByCourseNumber(
  coursenumber
) {
  console.log("GetClassesByCourseNumber coursenumber", coursenumber);
  return new Promise((resolve, reject) => {
    //test course_number: 3320
    let conn = new sql.createConnection(dbConfig);
    let srchStr = `SELECT * FROM professorschema.class cls where cls.course_number=${coursenumber}`;
    conn.query(srchStr, (err, result) => {
      console.log("returning from async inside promise");
      return err ? reject(err) : resolve(result);
    });
  });
};

Repo.GetClassByClassNumberAsync = async function GetClassByClassNumber(
  classnumber
) {
  console.log("async called");
  return new Promise((resolve, reject) => {
    console.log("async inside promise");
    //test class_number: 88348
    let conn = new sql.createConnection(dbConfig);
    let srchStr = `SELECT * FROM professorschema.class cls where cls.class_number=${classnumber}`;
    conn.query(srchStr, (err, result) => {
      console.log("returning from async inside promise");
      return err ? reject(err) : resolve(result);
    });
  });
};

/*
{
	"section_address": "bmen3200.001.23f",
	"course_prefix": "bmen",
	"course_number": "3200",
	"section": "001 ",
	"class_number": 88348,
	"title": "Biomedical Engineering Fundamentals and Design ",
	"topic": null,
	"enrolled_status": "Open",
	"enrolled_current": 27,
	"enrolled_max": 48,
	"assistant_s": "Soto Kubo, Angeloh Stout",
	"term": "23f",
	"session": 1,
	"days": "Friday",
	"times": "11:00 - 11:50",
	"times_12h": "11:00am - 11:50am",
	"location": "FO_2.404",
	"core_area": null,
	"activity_type": "Lecture",
	"school": "ecs",
	"dept": "encsbien",
	"syllabus": "syl134518",
	"textbooks": "9781107087354, 9781316191842 "
}
*/
Repo.UpdateClass = async function UpdateClass(classitm) {
  console.log("UpdateClass called");
  return new Promise((resolve, reject) => {
    console.log("UpdateClass inside promise", classitm);

    let conn = new sql.createConnection(dbConfig);
    let srchStr = `UPDATE class SET enrolled_status = '${classitm.enrolled_status}' WHERE class_number = ${classitm.class_number}`;
    conn.query(srchStr, (err, result) => {
      console.log("returning from async inside promise");
      return err ? reject(err) : resolve(result);
    });
  });
};

module.exports = Repo;

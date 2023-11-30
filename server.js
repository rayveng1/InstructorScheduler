var bodyParser = require("body-parser");
var express = require("express");
const next = require("next");
var fs = require("fs"); // required for file serving
var sql = require("mysql");
const axios = require("axios");
const cors = require("cors");
const http = require("http");
var classrouter = require("./routes/classRoutes");
var instructorrouter = require("./routes/instructorRoutes");
//var db = require("./db");
var path = require("path"); // Import the 'path' module
//const { DataFrame, Series } = require('pandas-js');
//const tf = require('@tensorflow/tfjs');

//function groupBy(data, key) {
//    return data.reduce((acc, curr) => {
//        (acc[curr[key]] = acc[curr[key]] || []).push(curr);
//        return acc;
//    }, {});
//}

//function preprocessData(data) {
//    // Create a DataFrame from the data
//    const df = new DataFrame(data);

//    // it's crucial that the data is sorted by 'professor' and 'semester' for the following code to work correctly.
//    const sortedDf = df; // Assuming data is already sorted.

//    // Get the distinct courses for one-hot encoding
//    const uniqueCourses = sortedDf.get("course").unique();
//    const numCourses = uniqueCourses.length;

//    // One-hot encode the courses
//    function oneHotEncode(course) {
//        return uniqueCourses.map(uniqueCourse => uniqueCourse === course ? 1 : 0);
//    }

//    const encodedData = data.map(item => ({
//        ...item,
//        encodedCourse: oneHotEncode(item.course)
//    }));

//    let professorSequences = {};
//    let currentProfessor = null;
//    let currentSequence = [];

//    encodedData.forEach(item => {
//        if (currentProfessor === null) {
//            currentProfessor = item.professor;
//        }

//        if (item.professor !== currentProfessor) {
//            professorSequences[currentProfessor] = currentSequence;
//            currentSequence = [];
//            currentProfessor = item.professor;
//        }

//        currentSequence.push(item.encodedCourse.toArray());
//    });

//    // For the last professor in the list
//    if (currentSequence.length > 0) {
//        professorSequences[currentProfessor] = currentSequence;
//    }

//    return {
//        professorSequences: professorSequences,
//        uniqueCourses: uniqueCourses
//    };
//}

//// Sample data
//const data = [
//    { "professor": "Kathleen Myers", "semester": "20f", "course": "Bioengineering I" },
//    { "professor": "Kathleen Myers", "semester": "21s", "course": "Computer Science II" },
//    // ... (more data)
//];

//const trainData = [
//    { "professor": "Kathleen Myers", "semester": "21f", "course": "Bioengineering I" },
//    { "professor": "Kathleen Myers", "semester": "22s", "course": "Bioengineering II" },
//    // ... (more data)
//];

//const testData = [
//    { "professor": "Kathleen Myers", "semester": "22f", "course": "Bioengineering I" },
//    { "professor": "Kathleen Myers", "semester": "23s", "course": "Bioengineering II" },
//    // ... (more data)
//];

//const sampleData = [
//    { "professor": "Kathleen Myers", "semester": "23s", "course": "Bioengineering I" },
//    { "professor": "Kathleen Myers", "semester": "23f", "course": "Computer Science I" },
//    // ... (more data)
//];

//// feeding the model
//const result = preprocessData(data);
//console.log(result.professorSequences);

//const professorSequences = result.professorSequences;
//const uniqueCourses = result.uniqueCourses;

//const firstProfessor = Object.keys(professorSequences)[0];
//let inputLength = professorSequences[firstProfessor].length;
//let inputDim = professorSequences[firstProfessor][0].length;
//let outputDim = uniqueCourses.size;

//const model = tf.sequential();

//// First LSTM layer
//model.add(tf.layers.lstm({
//    units: 128,
//    returnSequences: true,
//    inputShape: [inputLength, inputDim]
//}));

//// Second LSTM layer
//model.add(tf.layers.lstm({
//    units: 128
//}));

//// Dense output layer
//model.add(tf.layers.dense({
//    units: outputDim,
//    activation: 'softmax'
//}));

//model.compile({
//    optimizer: 'adam',
//    loss: 'categoricalCrossentropy',
//    metrics: ['accuracy']
//});

//// training
//const trainResult = preprocessData(trainData);

//const trainInputSequences = [];
//const trainOutputSequences = [];

//Object.values(trainResult.professorSequences).forEach(sequences => {
//    for (let i = 1; i < sequences.length; i++) {
//        const inputSequence = sequences.slice(0, i);
//        const outputSequence = sequences[i];

//        trainInputSequences.push(inputSequence);
//        trainOutputSequences.push(outputSequence);
//    }
//});

//// Padding sequences to have consistent length of sequenceLength
//const paddedInputSequences = trainInputSequences.map(seq => {
//    while (seq.length < inputLength) {
//        seq.unshift(new Array(inputDim).fill(0));  // Prepend zeros to the beginning to pad
//    }
//    return seq;
//});

//const trainInputTensor = tf.tensor3d(paddedInputSequences);
//const trainOutputTensor = tf.tensor2d(trainOutputSequences);

//const train = async () => {
//    await model.fit(trainInputTensor, trainOutputTensor, {
//        epochs: 50,
//        validationSplit: 0.2,
//        shuffle: true
//    });
//}

//train();

//// testing
//const testResult = preprocessData(testData);
//const testProfessorSequences = testResult.professorSequences;

//const testInputSequences = [];
//const testOutputSequences = [];

//Object.values(testProfessorSequences).forEach(sequences => {
//    for (let i = 1; i < sequences.length; i++) {
//        const inputSequence = sequences.slice(0, i);
//        const outputSequence = sequences[i];

//        testInputSequences.push(inputSequence);
//        testOutputSequences.push(outputSequence);
//    }
//});

//const testPaddedInputSequences = testInputSequences.map(seq => {
//    while (seq.length < inputLength) {
//        seq.unshift(new Array(inputDim).fill(0));  // Prepend zeros to the beginning to pad
//    }
//    return seq;
//});

//const testInputTensor = tf.tensor3d(testPaddedInputSequences);
//const testOutputTensor = tf.tensor2d(testOutputSequences);

//const evaluation = model.evaluate(testInputTensor, testOutputTensor);
//console.log(`Test Loss: ${evaluation[0].dataSync()[0]}`);
//console.log(`Test Accuracy: ${evaluation[1].dataSync()[0]}`);

//const sampleResult = preprocessData(sampleData);
//const sampleProfessorSequences = sampleResult.professorSequences['Kathleen Myers'];
//const inputSequence = tf.tensor(sampleProfessorSequences);
//const expandedInput = inputSequence.expandDims(0); // This will reshape tensor to [1, 2, 2]
//const prediction = model.predict(expandedInput);
//console.log(prediction);
//const classes = ["Bioengineering I", "Computer Science I"];
//prediction.array().then(array => {
//    const predictedIndex = array[0].indexOf(Math.max(...array[0]));
//    console.log("Predicted class:", classes[predictedIndex]);
//});

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

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

//const connection = sql.createConnection(dbConfig);
//connection.connect(err => {
//    if (err) throw err;
//    console.log('Connected to the MySQL server.');
//});

var port = process.env.PORT || 8080;

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

var app = express();

// Serve static files from the .next directory
app.use(
  "/_next",
  express.static(path.join(__dirname, "nextfrontend", ".next"))
);

// app.use(bodyParser.urlencoded({ extended: true }));
//router for Class  /class,
app.use(express.json());
app.use("/class", classrouter);
app.use("/instructor", instructorrouter);

nextApp.prepare().then(() => {
  app.get("/test", function (req, res) {
    console.log("req.body", req.body); //body to json from a post
    //console.log("req.body string",JSON.stringify(req.body));
    console.log("req.query", req.query);
    res.write("hello wolrd");
    res.end();
  });

  app.post("/api/professor", (req, res) => {
    const professor = req.body; // The professor object sent from the frontend
    console.log("Received professor:", professor);

    // Store the professor for later use
    storedProfessor = professor;

    res.status(200).json({ message: "Professor data received successfully" });
  });

  app.get("/getSolution", (req, res) => {
    // Use the stored professor object
    const postData = JSON.stringify({ professor: storedProfessor });
    // Data to be sent to the Flask server
    // const postData = JSON.stringify({
    //     professors: [
    //             {
    //                 'name': 'Kathleen Myers',
    //                 'availability': {
    //                     'Monday': [[timeToMinutes('9:00'), timeToMinutes('16:00')]],
    //                     'Tuesday': [[timeToMinutes('9:00'), timeToMinutes('16:00')]],
    //                     'Wednesday': [[timeToMinutes('9:00'), timeToMinutes('16:00')]],
    //                     'Thursday': [[timeToMinutes('9:00'), timeToMinutes('16:00')]],
    //                     'Friday': [[timeToMinutes('9:00'), timeToMinutes('16:00')]],
    //         //# ...other days
    //                 } ,
    //             'preferences': {
    //                 '1200': 10, //# Let's say 10 is the highest preference, 0 is no preference.
    //                 '1334': 5,
    //                 '2340': 3,
    //                 '3162': 1
    //        // # ...other courses
    //                 }
    //             }
    //// # ...other professors
    //         ]
    // });

    const options = {
      hostname: "localhost",
      port: 5000,
      path: "/solve",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };
    console.log(postData);
    const request = http.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          res.json(parsedData.solution);
          console.log(parsedData.solution);
        } catch (e) {
          console.error("Error parsing solution:", e);
          res.status(500).json({ error: "Failed to parse solution" });
        }
      });
    });

    request.on("error", (error) => {
      console.error("Error fetching solution:", error);
      res.status(500).json({ error: "Failed to fetch solution" });
    });

    // Write data to request body
    request.write(postData);
    request.end();
  });

  //app.get('/*', (req, res) => {
  //    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  //});
  // middleware. use the body-parse before the request is handled.
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  //   app.use(bodyParser.urlencoded({ extended: true }));
  //   app.use(bodyParser.json());
  //   app.use(function (req, res, next) {
  //     console.log("DONGJI", req.body);
  //     next();
  //   });

  app.all("*", (req, res) => {
    return nextHandler(req, res);
  });

  app.listen(port, function (err) {
    if (err) throw err;
    console.log("express listening port : " + port);
  });
});

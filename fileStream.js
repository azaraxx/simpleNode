const fs = require("fs");

fs.readFile("file.txt", "utf-8", function (error, data) {
  if (error) {
    throw error;
  }
  console.log(data.toString());
});

fs.writeFile("file2.txt", "MongoDb", function (error) {
  if (error) {
    throw error;
  }
  console.log("Write Success..");
});

fs.appendFile("file2.txt", "\nAmazon DynamoDB", function (error) {
  if (error) {
    throw error;
  }
  console.log("Update Success..");
});

// fs.unlink("file2.txt", function(error) {
//     if (error) {
//         throw error;
//     }
//     console.log("Delete Success..")
// });

import fs from "fs";

//Synchronous
//READ
//const result = fs. readFileSync("data.txt", "utf8");
//console.log(result);

//console.log("hello");

//const image = fs.readFileSync("taylor.jpg", "base64");
//console.log(image);

//WRITE
//fs.writeFileSync("myFile.txt", "Hello from the newly created file.");

//UPDATE
//fs.appendFileSync("myFile.txt", "\nOk lets goto next section");

//DELETE
//unlink - remove only the file
//rm (rmSync/rmdirSync) - remove files and folders
//fs.unlikeSync("myFile.txt");
//fs.rmdirSync("text");

//Asynchronously
//fs.readFile("dat.txt", "utf8", (error, data) => {
  //  if (error) {
    //    console.log(error);

      //  return;
    //}

    //console.log(data);
//});

// fs.writeFile("sam.txt", "write this file", (error, data) => {
//     if (error) {
//         console.log(error);

//         return;
//     }

//     console.log("File has been written successfully")
// });

// fs.appendFile("sam.txt", "\nThis text is appended.", (error, data) => {
// if (error) {
//     console.log(error);

//     return;
// }

// console.log("File has been updated successfully.";)
// });

// fs.rm("sam.txt", (error, data) => {
//     if (error) {
//         console.log(error);

//         return;
//     }

//     console.log("File deleted successfully");
// });
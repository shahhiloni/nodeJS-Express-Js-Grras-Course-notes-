let fs = require('fs');

// create file and write a text in the file  (Create - post)
fs.writeFile("new.txt", "Hello node.js", (err) => {
    if(err) throw err;
    console.log("file has been created successfully!!")
} )

// read file data (Read - get)
fs.readFile("new.txt", 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

// append file (add data without replace the original data)
fs.appendFile('new.txt', "Appended!!" , (err) => {
    if(err) throw err;
    console.log('Appended successfully!!')
})

// update file data or overwritting file data (Put , patch - UPDATE) 
fs.writeFile("new.txt", "this is updated data", (err) => {
    if(err) throw err;
    console.log('data updated successfully')
})


fs.unlink("new.txt", (err) => {
    if(err) throw err;
    console.log("File deleted successfully")
})
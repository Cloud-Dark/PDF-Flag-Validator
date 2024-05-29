// Import the 'fs' module to handle file system operations
const fs = require('fs');

// Define the source PDF file
const sourceFile = 'sample.pdf';
// Define the destination PDF file
const destinationFile = 'sample.enc.pdf';

// Define the flag to be added to the PDF
const flag = 'flag=%fl4g_h3r3%';

// Read the contents of the source file
fs.readFile(sourceFile, (err, data) => {
    // Handle any errors that occur during file reading
    if (err) {
        return console.log(err);
    }

    // Append the flag to the file data
    const modifiedData = Buffer.concat([data, Buffer.from(flag)]);

    // Write the modified data to the destination file
    fs.writeFile(destinationFile, modifiedData, (err) => {
        // Handle any errors that occur during file writing
        if (err) {
            return console.log(err);
        }
        console.log('File created and flag appended!');

        // Check the validity of the new file
        checkValidFile(destinationFile);
    });
});

// Function to check the validity of the file by verifying the presence of the flag
function checkValidFile(filePath) {
    // Read the contents of the file to be checked
    fs.readFile(filePath, (err, data) => {
        // Handle any errors that occur during file reading
        if (err) {
            return console.log(err);
        }

        // Check if the flag is present in the file data
        if (data.includes(Buffer.from(flag))) {
            console.log('file valid');
        } else {
            console.log('file not valid');
        }
    });
}

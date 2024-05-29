# PDF-Flag-Validator

**PDF-Flag-Validator** is a simple yet effective tool for adding a custom flag to a PDF file and validating the file's integrity based on the presence of that flag. By utilizing the `fs` module in Node.js, this tool helps ensure the integrity of your PDF files with ease.

## Features

- **Add Flag**: Insert a custom flag into a PDF file for identification and validation purposes.
- **File Validation**: Check if a PDF file has been tampered with by verifying the presence of the flag.
- **Easy to Use**: Simple implementation with just a few lines of code.
- **Node.js Based**: Leverages the power of the `fs` module for fast and reliable file operations.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/Cloud-Dark/PDF-Flag-Validator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd PDF-Flag-Validator
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Ensure you have a source PDF file (`sample.pdf`).
2. Run the following script to add a flag and check the file's validity:
    ```bash
    node index.js
    ```

## Example Code

```javascript
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
```

## Contributing

We welcome contributions from the community! If you have ideas or improvements, please create a pull request or open an issue in this repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

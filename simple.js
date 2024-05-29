const fs = require('fs');
const sourceFile = 'sample.pdf';
const destinationFile = 'sample.enc.pdf';

const flag = 'flag=%fl4g_h3r3%';

// Membaca isi file sumber
fs.readFile(sourceFile, (err, data) => {
    if (err) {
        return console.log(err);
    }

    // Menambahkan flag ke data
    const modifiedData = Buffer.concat([data, Buffer.from(flag)]);

    // Menyimpan data yang telah dimodifikasi ke file tujuan
    fs.writeFile(destinationFile, modifiedData, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File created and flag appended!');
    });
});

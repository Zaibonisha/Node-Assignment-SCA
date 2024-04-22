const https = require('https');
const fs = require('fs');

// Make an HTTPS request to the given URL
const request = https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    // Create a writable stream to write data to a file inside the public folder
    const fileWriteStream = fs.createWriteStream('./public/output.html');

    // Listen for 'data' event and write data to the file
    response.on('data', (data) => {
        process.stdout.write(data); // Log data to the console
        fileWriteStream.write(data); // Write data to the file
    });

    // Listen for 'end' event
    response.on('end', () => {
        console.log('Request completed!'); // Log message when request is completed
    });

    // Listen for 'close' event
    response.on('close', () => {
        console.log('Connection closed!'); // Log message when connection is closed
    });

});

// Listen for 'error' event
request.on('error', (error) => {
    console.error(error);
});

const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/42734956-b9f24cf7-5e8e-4db6-b927-360cf1493512?access_key=${process.env.access_key}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});

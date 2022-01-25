const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name,github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    //prompt method can receive an array of 'question' objects
    .prompt([
        {
            type: 'input',
            name: 'columbus',
            message: 'What is your name?'
        }
    ])
    .then(answers => {
        console.log(answers);
    });







// const printProfileData = profileDataArr => {
//     //This...
//     for (let i = 0; i<profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     //Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
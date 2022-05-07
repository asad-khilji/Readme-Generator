const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./lib/ReadmeGen')

const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is required to install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is it used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who is contributing to the project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'What license will you be using?',
        name: 'license',
        choices: ['ISC', 'MIT', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    }
]

async function runQuery(){
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if(err){
                console.log('Could not save file')
            } else {
                console.log('You README file has been successfully created')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuery()
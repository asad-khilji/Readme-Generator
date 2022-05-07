class MarkDown {
static generateReadme(answers){
return `

# ${answers.title}

## Table of Contents
- [Project Description](#Description)
- [Usage](#usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Questions
${answers.email}
${answers.github}

## License
${answers.license}
    
`
}

}

module.exports = MarkDown
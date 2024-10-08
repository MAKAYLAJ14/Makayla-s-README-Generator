const licenses = {
  MIT: { badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },
  Apache: { badge: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
  GPL: { badge: '[![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' },
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return licenses[license] ? licenses[license].badge : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const licenseInfo = licenses[license];
  return licenseInfo ? `## License
  This project is licensed under the ${license} License.` : '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseInfo = licenses[data.license];

  return `
  # ${data.title}
  
  ${licenseInfo ? licenseInfo.badge : ''}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - ${renderLicenseLink(data.license)}
  - [Contribution Guidelines](#contribution-guidelines)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Contribution Guidelines
  ${data.contribution}

  ## Tests
  README.md generator demo link: ${data.test}

  ## Questions
  If any questions, please see the following links below.
  Email: [${data.email}](mailto:${data.email}).
  Github: [${data.username}](https://github.com/${data.username}).
`;
}

export default generateMarkdown;

const os = require('os');
const fs = require('fs');

// Gather information from the os module
const architecture = os.arch();
const uptimeInSeconds = os.uptime();
const uptimeFormatted = formatUptime(uptimeInSeconds);
const homeDirectory = os.homedir();

// Format the information into a markdown-formatted string
const markdownContent = `
# Operating System Information

- **Architecture:** ${architecture}
- **Uptime:** ${uptimeFormatted}
- **Home Directory:** ${homeDirectory}
`;

// Write the markdown content to a file
fs.writeFileSync('./public/os_info.md', markdownContent);

// Function to format uptime into days, hours, and minutes
function formatUptime(uptimeInSeconds) {
    const days = Math.floor(uptimeInSeconds / (3600 * 24));
    const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    return `${days} days ${hours} hours ${minutes} minutes`;
}

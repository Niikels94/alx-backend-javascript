const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.split('\n');

    // Define data structures to store student counts and lists for each field
    const fieldStats = new Map();

    // Process the lines and populate the data structures
    for (const line of lines) {
      if (line) {
        const [name, , , field] = line.split(',');
        const trimmedField = field.trim();

        // Update the fieldStats map
        if (fieldStats.has(trimmedField)) {
          const { count, students } = fieldStats.get(trimmedField);
          fieldStats.set(trimmedField, { count: count + 1, students: [...students, name] });
        } else {
          fieldStats.set(trimmedField, { count: 1, students: [name] });
        }
      }
    }

    // Total number of students
    const totalStudents = lines.length - 1;

    // Print the results
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, { count, students }] of fieldStats) {
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const fs = require("fs");
const path = require("path");

// Path to the directory
const directory = "./";

// Old and new extensions
const oldExt = ".html";
const newExt = ".js";

// Read the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Loop through each file
  files.forEach((file) => {
    // Get the file extension
    const fileExt = path.extname(file);

    // Check if the file has the old extension
    if (fileExt === oldExt) {
      const oldPath = path.join(directory, file);
      const newPath = path.join(
        directory,
        path.basename(file, oldExt) + newExt
      );

      // Rename the file
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log("Error renaming file:", err);
        } else {
          console.log(`Renamed: ${oldPath} -> ${newPath}`);
        }
      });
    }
  });
});

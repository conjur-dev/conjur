const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "build");
shell.rm("-rf", "node_modules");

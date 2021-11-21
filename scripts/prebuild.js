const shell = require("shelljs");

shell.exec("cd ../");
shell.rm("-rf", "build/client");
shell.mkdir("-p", "build/client");

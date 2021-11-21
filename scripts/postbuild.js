const shell = require("shelljs");

shell.exec("cd ../");
shell.mv("build/*", "../build/client");
shell.rm("-rf", "build");

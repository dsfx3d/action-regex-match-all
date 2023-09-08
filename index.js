import {exec} from "node:child_process";
import {promisify} from "node:util";

const {stdout, stderr} = await promisify(exec)(
  "npm --loglevel=error ci --no-audit --only=prod",
);
console.log(stdout);
if (stderr) {
  throw stderr;
}

const {run} = await import("./action/bin.cjs");
run();

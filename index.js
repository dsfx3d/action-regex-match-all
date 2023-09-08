import {exec} from "node:child_process";
import {promisify} from "node:util";

const {stderr} = await promisify(exec)(
  "npm --loglevel=error ci --no-audit --only=prod",
);
if (stderr) {
  throw stderr;
}

const {run} = await import("./action/bin.cjs");
run();

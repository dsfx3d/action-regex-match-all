import {chain} from "lodash";
import {getInput, setOutput} from "@actions/core";

const regex = getInput("regex", {
  required: true,
  trimWhitespace: true,
});
const input = getInput("input", {
  required: true,
});

const matchArray = input.matchAll(new RegExp(regex, "g"));
const matches = chain([...matchArray])
  .flatten()
  .uniq()
  .value();
setOutput("matches", matches.join(","));

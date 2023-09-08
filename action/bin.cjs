const {chain} = require("lodash");
const {getInput, setOutput} = require("@actions/core");

module.exports["run"] = () => {
  const regex = getInput("regex", {
    required: true,
    trimWhitespace: true,
  });
  const input = getInput("input", {
    required: true,
  });
  const flags =
    getInput("flags", {
      trimWhitespace: true,
    }) ?? "gi";
  const delimiter =
    getInput("delimiter", {
      trimWhitespace: true,
    }) ?? ",";

  const matchArray = input.matchAll(new RegExp(regex, flags));
  const matches = chain([...matchArray])
    .flatten()
    .uniq()
    .value();
  setOutput("matches", matches.join(delimiter));
};

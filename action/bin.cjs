const {chain} = require("lodash");
const {getInput, setOutput} = require("@actions/core");

module.exports["run"] = () => {
  const regex = getInput("regex", {
    required: true,
    trimWhitespace: true,
  });
  const text = getInput("text", {
    required: true,
  });
  const flags = getInput("flags", {
    trimWhitespace: true,
  });

  const matchArray = text.matchAll(new RegExp(regex, flags));
  const matches = chain([...matchArray])
    .flatten()
    .uniq()
    .value();
  setOutput("matches", matches);
};

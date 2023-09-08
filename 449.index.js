export const id = 449;
export const ids = [449];
export const modules = {

/***/ 449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {chain} = __webpack_require__(911);
const {getInput, setOutput} = __webpack_require__(614);

module.exports.run = () => {
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


/***/ })

};

const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam = (members) =>
  (members instanceof Array)
      ? members.filter(item => typeof(item) === 'string')
          .map(item => item.trim().toUpperCase()[0])
          .sort().join('')
      : false;

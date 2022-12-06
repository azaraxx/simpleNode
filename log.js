const log = {
  information: (info) => {
    console.log("Information :" + info);
  },
  fault: (fault) => {
    console.log("Fault :" + fault);
  },
};

module.exports = log;
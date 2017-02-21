const getEquationStepChanges = require('./getEquationStepChanges');
const getEquationSubstepChanges = require('./getEquationSubstepChanges');

function describeEquationStep(step) {
  // console.log("FUNCTION " + StepChanges.changeFunction);
  console.log("SUBSTEPS");
  console.log(step.substeps);
  console.log(step.substeps.length >0);
  var StepChanges = getEquationStepChanges(step);
  var stepDescription = "";

  console.log("FUNCTION " + StepChanges.changeFunction);

console.log("CHANGE VALS");
  console.log(StepChanges.changeValues);

  if (step.changeType === 'SIMPLIFY_LEFT_SIDE' || step.changeType === 'SIMPLIFY_RIGHT_SIDE') {
    if (step.substeps.length >0) {
      stepDescription = "See substeps.";

    }

    else {
      if (StepChanges.changeFunction === "add") {
        stepDescription = "Add " + StepChanges.changeValues.toString();
      }
      else if (StepChanges.changeFunction === "subtract") {
        stepDescription = "Subtract " + StepChanges.changeValues[1] + " from " + StepChanges.changeValues[0];
      }
      else if (StepChanges.changeFunction === "multiply") {
        stepDescription = "Multiply " + StepChanges.changeValues;
      }
      else if (StepChanges.changeFunction === "divide") {
        stepDescription = "Divide " + StepChanges.changeValues[0] + " by " + StepChanges.changeValues[1];

      }

      else {
        stepDescription = "Boop.";
      }
    }
  }

  else if (step.changeType === "DIVIDE_FROM_BOTH_SIDES") {
    stepDescription = "Divide both sides by " + StepChanges.changeValues[0];
  }
  return stepDescription;
}

module.exports = describeEquationStep;

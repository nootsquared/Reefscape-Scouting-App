quietZoneColor: '#FFFFFF'
};

// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r2,b1..), s=scouter
// Must be filled in: e=event, m=match#, l=level(q,qf,sf,f), t=team#, r=robot(r1,r3,b1..), s=scouter
//var requiredFields = ["e", "m", "l", "t", "r", "s", "as"];
var requiredFields = ["e", "m", "l", "r", "s"]; // Removed "as" from required fields

@@ -759,12 +759,12 @@ function configure() {
}

function getRobot() {
  return "r2";
  return "r3";
}


function resetRobot() {
  document.querySelector('input[value="r2"]').checked = true;
  document.querySelector('input[value="r3"]').checked = true;
}


@@ -1345,21 +1345,21 @@ function updateMatchStart(event) {
console.log("Current match data:", match);

// Check if the radio input exists before trying to set it
  const r2Radio = document.querySelector('input[value="r2"]');
  if (r2Radio) {
    r2Radio.checked = true;
  const r3Radio = document.querySelector('input[value="r3"]');
  if (r3Radio) {
    r3Radio.checked = true;
} else {
    console.log("Warning: R2 radio button not found");
    console.log("Warning: r3 radio button not found");
}

updateRobotPositions();

  // Auto-fill team number for R2
  // Auto-fill team number for r3
if (event.target.id == "input_m") {
if (match && match.red && match.red.team_keys) {
      const r2TeamNumber = match.red.team_keys[1].replace("frc", "");
      console.log("R2 Team Number:", r2TeamNumber);
      document.getElementById("input_t").value = r2TeamNumber;
      const r3TeamNumber = match.red.team_keys[1].replace("frc", "");
      console.log("r3 Team Number:", r3TeamNumber);
      document.getElementById("input_t").value = r3TeamNumber;
onTeamnameChange();
}
}
@@ -1564,12 +1564,12 @@ window.onload = function () {
};

document.addEventListener('DOMContentLoaded', function() {
  // Set initial robot selection to R2
  document.querySelector('input[value="r2"]').checked = true;
  // Set initial robot selection to r3
  document.querySelector('input[value="r3"]').checked = true;

// Disable changing robot selection
document.querySelectorAll('input[name="r"]').forEach(input => {
    if (input.value !== "r2") {
    if (input.value !== "r3") {
input.disabled = true;
}
});

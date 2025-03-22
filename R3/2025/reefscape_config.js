var config_data = `
{
    "dataFormat": "tsv",
    "title": "Scout App 2025",
    "page_title": "ReefScape",
    "checkboxAs": "10",
    "fontSize": "16px",
    
    "prematch": [
      {
        "name": "Scouter Initials",
        "code": "s",
        "type": "scouter",
        "size": 5,
        "maxSize": 5,
        "required": "true"
      },
      {
        "name": "Event",
        "code": "e",
        "type": "event",
        "defaultValue": "2025mitry",
        "required": "true"
      },
      {
        "name": "Match Level",
        "code": "l",
        "type": "level",
        "choices": {
          "qm": "Quals"
        },
        "defaultValue": "qm",
        "required": "true"
      },
      {
        "name": "Match #",
        "code": "m",
        "type": "match",
        "min": 1,
        "max": 150,
        "required": "true",
        "size": "large"
      },
      {
        "name": "Robot",
        "code": "r", 
        "type": "robot",
        "choices": {
          "r3": "<span style='color: #FF4444'>Red-3: <span id='r3_team'></span></span>"
        },
        "defaultValue": "r3",
        "required": "true",
        "locked": "true"
      },
      {
        "name": "Team #",
        "code": "t",
        "type": "team",
        "min": 1,
        "max": 99999
      },
      {
        "name": "Starting Position",
        "code": "sp",
        "type": "radio",
        "choices": {
          "p": "Processor Side<br>",
          "c": "Center<br>",
          "o": "Opposite Processor"
        },
        "required": "true"
      }
    ],
  
    "auton": [
      {
        "name": "Leave Starting Line",
        "code": "al",
        "type": "bool"
      },
      {
        "name": "Coral L4",
        "code": "acl4",
        "type": "counter"
      },
      {
        "name": "Coral L3",
        "code": "acl3",
        "type": "counter"
      },
      {
        "name": "Coral L2",
        "code": "acl2",
        "type": "counter"
      },
      {
        "name": "Coral L1 (Trough)",
        "code": "acl1",
        "type": "counter"
      },
      {
        "name": "Algae Removed from Reef",
        "code": "arr",
        "type": "counter"
      },
      {
        "name": "Algae in Processor",
        "code": "aap",
        "type": "counter"
      },
      {
        "name": "Algae in Net",
        "code": "aan",
        "type": "counter"
      }
    ],
  
    "teleop": [
      {
        "name": "Coral L4",
        "code": "tcl4",
        "type": "counter"
      },
      {
        "name": "Coral L3",
        "code": "tcl3",
        "type": "counter"
      },
      {
        "name": "Coral L2",
        "code": "tcl2",
        "type": "counter"
      },
      {
        "name": "Coral L1 (Trough)",
        "code": "tcl1",
        "type": "counter"
      },
      {
        "name": "Algae Removed from Reef",
        "code": "trr",
        "type": "counter"
      },
      {
        "name": "Algae in Processor",
        "code": "tap",
        "type": "counter"
      },
      {
        "name": "Algae in Net",
        "code": "tan",
        "type": "counter"
      },
      {
        "name": "Defense was played on robot",
        "code": "dpr",
        "type": "bool"
      },
      {
        "name": "Ground Pickup",
        "code": "gpu",
        "type": "radio",
        "choices": {
          "n": "None",
          "s": "Slow",
          "f": "Fast"
        },
        "defaultValue": "n"
      }
    ],
  
    "endgame": [
      {
        "name": "Climb Status",
        "code": "clm",
        "type": "radio",
        "choices": {
          "n": "Not Attempted<br>",
          "p": "Parked (Failed Climb)<br>",
          "s": "Successful - Shallow<br>",
          "d": "Successful - Deep"
        },
        "defaultValue": "n"
      },
      {
        "name": "Why No Climb?",
        "code": "ncr",
        "type": "radio",
        "choices": {
          "x": "N/A (Did Climb)<br>",
          "s": "Strategic Choice<br>",
          "b": "Robot Issues<br>",
          "t": "Out of Time"
        },
        "defaultValue": "x"
      }
    ],
  
    "postmatch": [
      {
        "name": "Driver Skill",
        "code": "ds",
        "type": "radio",
        "choices": {
          "x": "Not Observed<br>",
          "i": "Ineffective<br>",
          "a": "Average<br>",
          "e": "Excellent"
        },
        "defaultValue": "x"
      },
      {
        "name": "Defense Rating",
        "code": "dr",
        "type": "radio",
        "choices": {
          "n": "Did Not Defend<br>",
          "i": "Ineffective<br>",
          "a": "Average<br>",
          "e": "Excellent"
        },
        "defaultValue": "n"
      },
      {
        "name": "Died/Immobilized",
        "code": "die",
        "type": "radio",
        "choices": {
          "n": "None<br>",
          "p": "Partially<br>",
          "e": "Entire Match"
        },
        "defaultValue": "n"
      },
      {
        "name": "Tippy",
        "code": "tip",
        "type": "bool"
      },
      {
        "name": "Comments",
        "code": "co",
        "type": "text",
        "size": 15,
        "maxSize": 55
      }
    ]
  }`;
  

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
        "defaultValue": "2025milac",
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
          "r1": "<div style='display: inline-block; width: 50%; color: #FF4444'>Red-1: <span id='r1_team'></span></div>",
          "b1": "<div style='display: inline-block; width: 50%; color: #4444FF'>Blue-1: <span id='b1_team'></span></div><br>",
          "r2": "<div style='display: inline-block; width: 50%; color: #FF4444'>Red-2: <span id='r2_team'></span></div>",
          "b2": "<div style='display: inline-block; width: 50%; color: #4444FF'>Blue-2: <span id='b2_team'></span></div><br>",
          "r3": "<div style='display: inline-block; width: 50%; color: #FF4444'>Red-3: <span id='r3_team'></span></div>",
          "b3": "<div style='display: inline-block; width: 50%; color: #4444FF'>Blue-3: <span id='b3_team'></span></div>"
        },
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
        "name": "Algae Removed from Reef",
        "code": "arr",
        "type": "counter"
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
        "name": "Algae Removed from Reef",
        "code": "trr",
        "type": "counter"
      },
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
        "name": "Climb",
        "code": "clm",
        "type": "radio",
        "choices": {
          "n": "None<br>",
          "p": "Park<br>",
          "s": "Shallow<br>",
          "d": "Deep"
        },
        "defaultValue": "n"
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
        "name": "Speed Rating",
        "code": "sr",
        "type": "radio", 
        "choices": {
          "1": "1 (slow)<br>",
          "2": "2<br>",
          "3": "3<br>",
          "4": "4<br>",
          "5": "5 (fast)"
        },
        "defaultValue": "3"
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
        "name": "Dropped Corals (>2)",
        "code": "dn",
        "type": "bool"
      },
      {
        "name": "Good Alliance Partner?",
        "tooltip": "Would you want this robot on your alliance in eliminations?",
        "code": "all",
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
  

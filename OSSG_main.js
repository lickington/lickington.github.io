

// The dialog data array will always be structured like this:

const bgm = document.getElementById("bgm");
let mode = 1;
let partIDGame = 1;
let stateIDGame = 1;
let nodeIDGame = 1;
let nodeDialogData = ``;
let nodeResponse1 = ``;
let nodeResponseID1 = ``;
let nodeResponse2 = ``;
let nodeResponseID2 = ``;
let nodeResponse3 = ``;
let nodeResponseID3 = ``;
let character = "";
// first, there will be a Part array with its id (for organization purposes only) and then multiple state arrays within each part.
// Then, within each State array, with its ID, there will be multiple Node arrays. 
// Each Node will contain its ID, its dialog data in a template literal, and the responses (with each of their IDs and RESPONSE data).
let dialogData = [
    [1, [
        1, [[1, `<b>Welcome to the Older Sibling's Survival Guide!</b>`, [[
            2, `NEXT`]]
        ], [2, `You are playing Sarah, the oldest sibling in her family! She has to deal with the chaotic pranks of her younger brothers, which drive her and her parents mad! But, with the proper techniques, you can actually <b>tame</b> your brothers! Are you up for the challenge?`, [
            [3, `YES!`], [1, `No...`]
        ], ""]
    ]
]
]
]


document.addEventListener("click", () =>{
    
    bgm.play();
});
const titleHeader = document.createElement("h1");
titleHeader.textContent = "The Older Sibling's Survival Guide";
titleHeader.className = "glow";
document.body.appendChild(titleHeader);
// Button demos


function createButton(classnam, text, idn, visible){ 
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.className = classnam;
    newButton.id =idn
    if (visible===true) {
        newButton.style.display = "block";
    } else {
        newButton.style.display = "none";
    }
    
    newButton.style.margin = "0 auto";

    return document.body.appendChild(newButton)
}

createButton("green_button play", "PLAY!", "play", true);
createButton("blue_button small_button part", "Credits", "credits", true)
createButton("blue_button part", "Part 1: Breakfast in the Kitchen", "part1", false)
createButton("blue_button part", "Part 2: Lunch and the Brothers' Council", "part2", false)
createButton("blue_button part", "Part 3: Alice and the Two Terrible Tots", "part3", false)
createButton("blue_button part", "Part 4: Sarah vs. the Big Brawling Bullies", "part4", false)
createButton("blue_button part", "Part 5: The Talent Show", "part5", false)
/*
const videoPlayer = document.createElement("iframe")
videoPlayer.src = "./Mendi_recording.mp4"
videoPlayer.width = 528 
videoPlayer.height = 240
videoPlayer.style.display = "none"
videoPlayer.style.margin = "0 auto"

document.body.appendChild(videoPlayer)
*/
const playButton = document.getElementById("play");
const partButtons = document.getElementsByClassName("part")
playButton.addEventListener("click", ()=> {
    
    
    


    for (const part of partButtons) {
        let partIDArray = part.id.split('');
        
        if (partIDArray[4] > partID) {
            part.style.display = "none";
           
        } else {
            part.style.display = "block";
        }
        part.addEventListener("click", function() {
            goToPart(partIDArray[4])
            
        });
        console.log(part.id);
    }
    

})

function goToPart(partNumber) {
    partID = partNumber
    console.log(partID)
    renderInterface(partID)
}



function renderInterface() {
    // if mode equals 1, initialize the game.
    // if mode equals 2, then just simply update the interface with the new data.
    
    const gameDiv = document.getElementById('game');
    let buttons = document.getElementsByClassName('part');
    
   

    if (mode == 1) {
        gameDiv.style.display = "flex";
        for (const button of buttons) {
            button.style.display = "none";
        }
        playButton.style.display = "none";
        titleHeader.style.display = "none";
        for (const button of buttons) {
            button.addEventListener("click", function() {

            })
        }
    } else if (mode == 2) {
        // First step -- retrieve the dialogue.
        nodeDialogData = dialogData[0][0][0]
        console.log(nodeDialogData);
        // Second step -- render it. 
    }
    
}

function renderDialog(partID, stateID, nodeID) {
    partIDGame = partID;
    stateIDGame = stateID;
    nodeIDGame = nodeID;
}



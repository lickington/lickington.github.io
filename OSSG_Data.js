// How did you organize dialog with your old CYOA engine? 

// Let's see...
// You simply started at node 1.
let choice1ID = 0;
let choice2ID = 0;
let choice3ID = 0;

let currentChoiceID = 0;
let partInteger = 1;
let stateInteger = 1;
let currentDialog = ""

// Each dialog array should look like this: the ID of the current node, the dialog text, the character's name and their image (optional, for now)...
// And also contain the responses (with text and the ID in each entry, in that order)

window.momDialog001 = [
    [1, `<i>she glances up from her order pad</i> Good morning sweetie! How are you doing this morning?`, "Mom", "", [
        [`*yawns* Good.`, 2],
        [`I'm starving!`, 3]
    ]]
]



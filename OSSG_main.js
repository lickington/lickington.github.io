const bgm = document.getElementById("bgm");
let mode = 1;
let partIDGame = 1;
let stateIDGame = 1;
let nodeIDGame = 1;
let nodeResponse1 = 0;
let nodeResponse2 = 0;
let nodeResponse3 = 0;

document.addEventListener("click", () => {
    bgm.play();
    
});

const titleHeader = document.createElement("h1");
titleHeader.textContent = "The Older Sibling's Survival Guide";
titleHeader.className = "glow";
document.body.appendChild(titleHeader);

function createButton(classnam, text, idn, visible) {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.className = classnam;
    newButton.id = idn;
    newButton.style.display = visible ? "block" : "none";
    newButton.style.margin = "0 auto";
    return document.body.appendChild(newButton);
}

createButton("green_button play", "PLAY!", "play", true);
createButton("blue_button small_button part", "Credits", "credits", true);
createButton("blue_button part", "Part 1: Breakfast in the Kitchen", "part1", false);
createButton("blue_button part", "Part 2: Lunch and the Brothers' Council", "part2", false);
createButton("blue_button part", "Part 3: Alice and the Two Terrible Tots", "part3", false);
createButton("blue_button part", "Part 4: Sarah vs. the Big Brawling Bullies", "part4", false);
createButton("blue_button part", "Part 5: The Talent Show", "part5", false);

const playButton = document.getElementById("play");
const partButtons = document.getElementsByClassName("part");

playButton.addEventListener("click", () => {
    for (const part of partButtons) {
        let partIDArray = part.id.split('');
        const thisPartNumber = Number(partIDArray[4]); // "1" -> 1

        if (thisPartNumber > partIDGame) {
            part.style.display = "none";
        } else {
            part.style.display = "block";
        }

        part.onclick = function () {
            goToPart(thisPartNumber);
        };
    }
});

function goToPart(partNumber) {
    partIDGame = Number(partNumber);
    console.log(partIDGame);
    renderInterface();
    console.log(mode);
}

function renderInterface() {
    const gameDiv = document.getElementById('game');
    let buttons = document.getElementsByClassName('part');

    if (mode === 1) {
        gameDiv.style.display = "flex";
        for (const button of buttons) {
            button.style.display = "none";
        }
        playButton.style.display = "none";
        titleHeader.style.display = "none";

        // start game
        mode = 2;
        stateIDGame = 1;
        nodeIDGame = 1;
        const documentBody = document.getElementsByTagName("body");
        documentBody[0].style.background = "#181818";
        renderBackground("downstairs_hallway.png");
        renderDialog(partIDGame, stateIDGame, nodeIDGame);
    } else if (mode === 2) {
        // later you can add UI updates here if needed
    }
}

function renderDialog(partID, stateID, nodeID) {
    partID = Number(partID);
    stateID = Number(stateID);
    nodeID = Number(nodeID);

    switch (partID) {
        case 1:
            switch (stateID) {
                case 1:
                    switch (nodeID) {
                        case 1:
                            renderNode(
                                `<b>Welcome to the Older Sibling's Survival Guide!</b>`,
                                `*NEXT*`,
                                null,
                                null,
                                2,
                                null,
                                null
                            );
                            break;
                        case 2:
                            renderNode(`You are Sarah, the oldest and only sister in a household of five siblings.`, `*NEXT*`, null, null, 3, null, null);
                            break;
                        case 3:
                            renderNode(`Your four younger brothers <b>love</b> to prank you.`, `*NEXT*`, null, null, 4, null, null);
                            break;
                        case 4: 
                        renderNode(`But if you make the right choices within the game, you can turn the tide of pranks off of you!`, `*NEXT*`, null, null, 5, null, null);
                        break;
                        case 5: renderNode(`There is a big talent show coming up in several weeks. Your brothers will hear about the talent show and will probably want to sign up. However, you may want to work with your brothers, and not against them. You'll see exactly what I mean in just a few minutes. `, `*NEXT*`, null, null, 6, null, null);
                        break;
                        case 6: renderNode(`Now, time to get started!`, `*NEXT*`, null, null, 7, null, null);
                        break;
                        case 7: 
                        renderBackground("sarah_bedroom.png");
                        stateIDGame++;
                        nodeIDGame = 1;

                        renderDialog(partIDGame, stateIDGame, nodeIDGame);
                        break;
                    }
                    break;
                case 2: switch (nodeID) {
                    case 1:
                        bgm.src = "./Beethoven_Moonlight_2nd_movement.ogg"
                        renderNode(`It is a beautiful spring morning. You wake up, ready to face the world.`, `*NEXT*`, ``, ``, 2, null, null);

                        break;
                    case 2:
                        renderNode(`You head downstairs to the kitchen, where your mother is waiting to talk to you.`, `*NEXT*`, ``, ``, 3, null, null);

                        break;
                    case 3:
                        
                        renderNode(`Mom: *<i>she glances up from the stove</i>* Good morning! How are you doing this morning?`, `*<i>yawns</i>* Good.`, `I'm starving!!`, ``, 5, 4, null);
                        break;
                    case 4:
                        renderNode(`*<i>laughs</i>* Well, that's not the first time I've heard you say that! Now, what would you like to have for breakfast? You can have either blueberry waffles, oatmeal, or eggs. Which one would you like?`, `Waffles!`, `Oatmeal!`, `Eggs!`, 6, 7, 8)
                    break;
                    case 5: 
                        renderNode(`Great. Sarah, what would you like to have for breakfast? You can choose between blueberry waffles, oatmeal, or eggs. Which would you like?`, `Waffles!`, `Oatmeal!`, `Eggs!`, 6, 7, 8);
                        break;
                    case 6:
                        renderNode(`Okay, waffles it is! Oh, Sarah, I forgot to tell you something.`, `What is it, Mom?`, ``, ``, 9, null, null);
                        break;
                    case 7:
                        renderNode(`Okay, oatmeal it is! Oh, Sarah, I forgot to tell you something.`, `What is it, Mom?`, ``, ``, 9, null, null);
                        break;
                    case 8:
                        renderNode(`Okay, eggs it is! Oh, Sarah, I forgot to tell you something.`, `What is it, Mom?`, ``, ``, 9, null, null);
                        break;
                    case 9:
                        renderNode(`There's a talent show coming up in several weeks. I know you could do well if you signed up -- you've got a beautiful voice, and great talents! I would have told your brothers too, but they ran off to play some games before breakfast. You can find them in their bedroom.`, `Okay!`, ``, ``, 10, null, null);
                        break;
                    case 10:
                        stateIDGame++;
                        nodeIDGame = 1;

                        renderDialog(partIDGame, stateIDGame, nodeIDGame);
                        break;
                    
                }
                    break;
                case 3: switch(nodeIDGame) {
                    case 1: 
                        renderNode(`You head downstairs to the room where your brothers are in. It looks like they are playing a game.`, `*NEXT*`, ``, ``, 2, null, null);
                    break;
                    case 2: 
                        renderNode(`Tommy: Aw, <b>MAAAAAAAAAAN!!!!</B> You win <b><i>AGAIN!?!?!</i></b>`, `*NEXT*`, ``, ``, 3, null, null);
                    break;
                    case 3:
                        renderNode(`Carl: You guessed it... The UNO Master has NOT lost his touch yet!`, `Hey, guys!`, `What are you doing?`, ``, 4, 4, null);
                        break;
                    case 4: 
                        renderNode(`Kane: (absolutely terrified) How... how did you get in here?!`, `...I just walked in here.`, `*no response*`, ``, 5, 6, null);
                        break;
                    case 5: 
                        break;
                }
            }
            break;
            
    }
}

function renderNode(dialogue, response1, response2, response3, id1, id2, id3) {
    const dialogDiv = document.getElementById("dialogData");
    const r1 = document.getElementById("r1");
    const r2 = document.getElementById("r2");
    const r3 = document.getElementById("r3");

    dialogDiv.innerHTML = `<p>${dialogue}</p>`;

    // set text first
    r1.innerHTML = response1 || "";
    r2.innerHTML = response2 || "";
    r3.innerHTML = response3 || "";

    // then show/hide
    r1.style.display = response1 ? "block" : "none";
    r2.style.display = response2 ? "block" : "none";
    r3.style.display = response3 ? "block" : "none";

    nodeResponse1 = id1;
    nodeResponse2 = id2;
    nodeResponse3 = id3;

    r1.onclick = () => {
        if (nodeResponse1 != null) {
            nodeIDGame = nodeResponse1;
            renderDialog(partIDGame, stateIDGame, nodeIDGame);
        }
    };

    r2.onclick = () => {
        if (nodeResponse2 != null) {
            nodeIDGame = nodeResponse2;
            renderDialog(partIDGame, stateIDGame, nodeIDGame);
        }
    };

    r3.onclick = () => {
        if (nodeResponse3 != null) {
            nodeIDGame = nodeResponse3;
            renderDialog(partIDGame, stateIDGame, nodeIDGame);
        }
    };
    document.getElementById("node").src = "./dialogue_audio/p"+partIDGame+"_s"+stateIDGame+"_n"+nodeIDGame+".mp3";
    document.getElementById("node").play();
}

function renderBackground(imageName) {
    document.getElementById("background-image").src = "background_images/" + imageName;
}
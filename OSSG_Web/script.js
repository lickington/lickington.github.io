const chapterTitles = ["Breakfast in the Kitchen", "Prank Wars", "Babysitting (Possibly Gone Wrong)", "The Bullies", "The Talent Show", "Epilogue"]
const descriptions = [``, 
``,
 ``,
 ``,
 ``,
 ``];
let currentVersion = "1.0"
 let currentNodeID = "0.1.0";
 let currentChapterIndex = 1;
 let maxChapterIndex = 1;
 
 let response1ID = ""; 
 let response2ID = "";
 let response3ID = "";
 
 let siblingRelationship = 4;
 let parentRelationship = 4;
// Important dialogue variables that are absolutely necessary.

let p1foundOutAboutPrank = false;
let p1playedUNO = false;
  const slides = document.querySelectorAll('.slide')
function showSlide(name) {
	slides.forEach(slide => slide.classList.remove('active'));
	document.getElementById(name).classList.add('active');
}

document.getElementById('play1').addEventListener('click', function() {
	document.getElementById('play1').style.display = "none";
	showSlide("main-menu")
	
})

document.getElementById('play').addEventListener('click', function() {
	setChapter(1);
	showSlide("chapter-selection");
})
document.getElementById('credits').addEventListener('click', function() {
	showSlide("creditsSlide");
})
document.getElementById('backToMainMenu').addEventListener('click', function() {
	showSlide("main-menu");
})
document.getElementById('next').addEventListener('click', function() {
	currentChapterIndex = currentChapterIndex + 1
	setChapter(currentChapterIndex );
})
document.getElementById('previous').addEventListener('click', function() {
	currentChapterIndex = currentChapterIndex - 1
	setChapter(currentChapterIndex );
})

function setChapter(index) {
	if (index == chapterTitles.length +1 || index == 0) {
		currentChapterIndex = 1;
		index = 1;
		
	}
	document.getElementById('chapterTitle').innerHTML = chapterTitles[index - 1];
	document.getElementById('description').innerHTML = descriptions[index - 1];
}

// here's the first thing you wanna do: 
document.getElementById("start").addEventListener('click', () => {
	
	if (currentChapterIndex == 1) {
			theEnormousDialogueFunction("0.1.0");
	} else if (currentChapterIndex == 2) {
		theEnormousDialogueFunction("2.1.1");
	}
	
})
// You want to have it start at Chapter One.


function theEnormousDialogueFunction(id) { 
	switch (id) {
		// Prologue
		case "0.1.0": 
			document.getElementById("relationshipContainer").style.display = "none";
			renderNode(`The Narrator: It is 2050. Abby is with her mother, Sarah, in the living room. Her cousin, Bea, is also with them. They want Sarah to tell them a story.`, 
			`*NEXT*`, ``, ``, "0.1.1", null, null);
		break;
		case "0.1.1": 
			renderNode(`Abby: Mommy... what was life like when you were a kid?`,
						`*NEXT*`, ``, ``, "0.1.2", null, null);
		break;
		case "0.1.2": 
			renderNode(`Bea: <b>YEAH!!</b> Tell us! Did ya have flying cars back then? (gasps) Or <b><i>EVEN THE INTERNET?!?!</i></b>`
						, `*NEXT*`, ``, ``, "0.1.3", null, null);
		break;
		case "0.1.3": 
			renderNode(`Sarah: Calm down! Yes, we had the Internet back then... but definitely not flying cars. (Abby and Bea breathe a sigh of relief.) Those were a rather... 2040 thing. Anyways, I'm going to tell you stories of the wild adventures my brothers and I had when we were just kids. We used to fight like cats and dogs back then... *laughs*`, 
			`*NEXT*`, ``, ``, "0.1.4", null, null);
			
		break;
		case "0.1.4": 
			renderNode(`Abby: Yeah. You should see Bea when she's angry. She looks like a cat in a bath! *laughs*`, 
			`*NEXT*`, ``, ``, "0.1.5", null, null);
		break;
		case "0.1.5": 
			renderNode(`Bea: I do <b>NOT!!!</b> (Bea glares at Abby. Abby blows a raspberry at her. Sarah, Abby's mother and Bea's aunt, gives her <i>THE LOOK</i>, universally known among parents and their children.)`, 
			`*NEXT*`, ``, ``, "0.1.6", null, null);
		break;
		case "0.1.6": 
			renderNode(`Sarah: And you're also going to hear how we finally... <b>finally</b>... managed to get along in the end.`, 
			`*NEXT*`, ``, ``, "0.1.7", null, null);
		break;
		case "0.1.7":
			renderNode(`Bea: Siblings can actually... get along?!`,
			`*NEXT*`, ``, ``, "0.1.8", null, null);
			
		break;
		case "0.1.8": 
			renderNode(`Sarah: Yep... they actually can. And I'm going to tell you how this bunch of siblings got along... okay. Where to start... Once upon a time... nope. Too cheesy. A long, long, time ago... nope. Not that either! alright. It was two months after my 14th birthday... *flashback!*`,
			`*NEXT*`, ``, ``, "0.2.1", null, null);
		break;
		case "0.2.1": 
			renderNode(`The Narrator: Welcome to the Older Sibling's Survival Guide.`,
			`*NEXT*`, ``, ``, "0.2.2", null, null);
		break;
		case "0.2.2": 
			renderNode(`The Narrator: You are Sarah, the oldest of five kids.`,
			`*NEXT*`, ``, ``, "0.2.3", null, null);
		break;
		case "0.2.3": 
			renderNode(`The Narrator: You have four younger brothers, and they <b>LOVE</b> to prank you and everyone around them. Their ultimate dream is to pull off a prank which changes history!`,
			`*NEXT*`, ``, ``, "0.2.4", null, null);
		break;
		case "0.2.4": 
			renderNode(`The Narrator: But, if you make the right choices, you can turn the tide of pranks away from you... and maybe even win the respect of your brothers in the process. <b>Maybe.</b> Anyways, let's get started.`,
			`*NEXT*`, ``, ``, "0.2.5", null, null)
		break;
		case "0.2.5": 
			renderNode(`The Narrator: Now, let's introduce your four younger brothers.`, 
			`*NEXT*`, ``, ``, "0.2.6", null, null);
		break;
		case "0.2.6": 
			renderNode(`The Narrator: Tommy, the eldest of your four brothers, is the Prank Master, as he likes to call himself.`,
			`*NEXT*`, ``, ``, "0.2.7", null, null);
		break;
		case "0.2.7": 
			renderNode(`The Narrator: Carl is next, and he loves gaming. Board games, video games, card games, and everything in between, you name it, he probably has either played it or at least knows about it.`,
			`*NEXT*`, ``, ``, "0.2.8", null, null);
		break;
		case "0.2.8": 
			renderNode(`The Narrator: Kane is second-youngest, and he is really good at computers and technology. If you have a problem with computers or have any questions on how they work, go find him.`,
			`*NEXT*`, ``, ``, "0.2.9", null, null);
		break;
		case "0.2.9": 
			renderNode(`The Narrator: Finally, we have Xavier, the youngest, and he loves Daniel Tiger's Neighborhood and Donkey Hodie.`,
			`*NEXT*`, ``, ``, "0.2.10", null, null);
		break;
		case "0.2.10": 
			renderNode(`The Narrator: In order to be the best older sibling you can be, keep an eye on both of these important aspects of your life -- your relationship with your brothers, AND your relationship with your parents. If either fall too low, bad things will happen!`,
			
			`*NEXT*`, ``, ``, "0.2.11", null, null);
			showRelationships();
		break;
		case "0.2.11": 
			renderNode(`The Narrator: Now, let's get started.`,
			`*NEXT*`, ``, ``, "1.1.1", null, null);
		break;
		// Part 1 code
		case "1.1.1": 
			renderNode(`It is a beautiful (and <b>hot!</b>) summer morning. Yesterday was the last day of school. Now, you are on summer break. You wake up, ready to face the world.`,
			`*NEXT*`, ``, ``, "1.1.2", null, null);
		break;
		case "1.1.2": 
			renderNode(`Sarah: Hello, world!`,
			`*NEXT*`, ``, ``, "1.1.3", null, null);
		break;
		case "1.1.3": 
			renderNode(`You go downstairs to see your mother, where she is cooking in the kitchen.`,
			`Hi, Mom!`, ``, ``, "1.1.4", null, null)
			
		break;
		case "1.1.4": 
			renderNode(`Mom: Good morning, sweetie! How are you doing this morning?`, 
			`Great, thanks.`, `I'm starving!`, ``, "1.1.5", "1.1.6", null);
			break;
		case "1.1.5": 
			renderNode(`Mom: Okay, great! Sarah, what would you like for breakfast? You can have waffles, oatmeal, or eggs. Which would you like?`,
			`Waffles!`, `Oatmeal!`, `Eggs!`, "1.1.7", "1.1.8", "1.1.9");
			break;
		case "1.1.6": 
			renderNode(`Mom: *laughs* I thought you might say that! Sarah, what would you like for breakfast? You can have waffles, oatmeal, or eggs. Which would you like?`,
			`Waffles!`, `Oatmeal!`, `Eggs!`, "1.1.7", "1.1.8", "1.1.9");
		break;
		case "1.1.7":
			renderNode(`Mom: Okay, waffles it is. Oh, Sarah, I forgot to tell you something!`,
			`What is it, Mom?`, ``, ``, "1.1.10", null, null);
		break;
		case "1.1.8":
			renderNode(`Mom: Okay, oatmeal it is. Oh, Sarah, I forgot to tell you something!`,
			`What is it, Mom?`, ``, ``, "1.1.10", null, null);
		break;
		case "1.1.9":
			renderNode(`Mom: Okay, eggs it is. Oh, Sarah, I forgot to tell you something!`,
			`What is it, Mom?`, ``, ``, "1.1.10", null, null);
		break;
		case "1.1.10": 
			renderNode(`Mom: There is a big state talent show going on in a couple of weeks, and it is close enough that you could enter! I know your brothers would jump at the chance, but they ran off to play before I could tell them. If you are wondering where they are, I last saw them run into Kane's bedroom.`,
			`Okay, Mom! See you in a little bit! (leave the kitchen)`, ``, ``, "1.2.1", null, null);
		break;
		case "1.2.1": 
			renderNode(`The Narrator: You have a few minutes to kill before breakfast. What would you like to do?`,
			`Find your brothers and see how they're doing.`, `Go back to your bedroom and sleep a little longer. It <b>is</b> early for you!`,
			``, "1.2.2", "1.2.end", null);
		break;
		case "1.2.2": 
			renderNode(`The Narrator: Okay, let's find your brothers. Your mother said they went into Kane's bedroom. Let's see where that is.`,
			`Go into the living room.`, `Go upstairs.`, ``, "1.2.3", "1.2.4", null);
		break;
		case "1.2.3": 
			renderNode(`The Narrator: Alright. We are in the living room now. Where do you want to go now?`,
			`Back to the kitchen.`, `The downstairs hallway.`, `Upstairs.`, "1.2.2", "1.2.5", "1.2.4");
		break;
		case "1.2.4": 
			renderNode(`The Narrator: Alright. Upstairs we go. Hmm... none of these rooms look like Kane's bedroom.`,
			`Back to the kitchen.`, ``, ``, "1.2.2", null, null);
		break;
		case "1.2.5": 
			renderNode(`The Narrator: Hmm... hey, look at this! There is a sign that says, "Kane's Cave." I think this might be it!`,
			`Go inside.`, `Continue looking around.`, ``, "1.2.6", "1.2.3", null);
		break;
		case "1.2.6":
			renderNode(`Carl: Aw, <b>maaaaaaaaaan!</b> You win AGAIN!?`,
			`*NEXT*`, ``, ``, "1.2.7", null, null);
		break;
		case "1.2.7": 
			renderNode(`Tommy: That's RIGHT! No one has ever defeated the UNO Master!`, 
			`Hi, guys!`, `*Continue listening*`, ``, "1.2.10", "1.2.8", null);
		break;
		case "1.2.8":
			p1foundOutAboutPrank = true;
			renderNode(`Tommy: Anyways, I want to play a prank! Sarah, of course, is way too busy with her "BFF" (sarcastic), Alice, to have fun with <b>us</b>! I say, the next time they come over, we pull a prank on both her AND Alice!`,
			`*gasp*`, `*continue listening*`, ``, "1.2.10", "1.2.9", null);
		break;
		case "1.2.9":
			renderNode(`The brothers: HEAR HEAR! *applause and whooping!* Carl: Yeah! I wish Sarah wasn't so busy! BOOOOOOOO to extra studying and playing with dolls! (all the brothers boo)`,
			`Hey, guys! What'cha doing?`, ``, ``, "1.2.10", null, null);
		break;
		case "1.2.10": 
			renderNode(`The Narrator: The brothers whip around just in time to see you standing right behind them. They are stunned. Tommy suddenly looks pale.`,
			`*NEXT*`, ``, ``, "1.2.11", null, null);
		break;
		case "1.2.11": 
			renderNode(`Kane: What... what are you doing here?`,
			`Nothing... just wanted to know how you guys are doing.`, p1foundOutAboutPrank == true ? `WHAT WERE YOU GUYS DOING!? (asked aggresively)` : ``, ``, "1.2.12", p1foundOutAboutPrank == true ? "1.2.13" : null, null);
		break;
		case "1.2.12": 
			renderNode(`Tommy: (clearly shellshocked) ...I am good, thanks.`,
			`What were you guys doing? (asked calmly)`, ``, ``, "1.2.13", null, null);
		break;
		case "1.2.13":
			renderNode(`Carl: Well, we <b>WERE</b> just playing an UNO game, but I doubt that would interest you, Your Majesty (sarcastic). Matter of fact, we were just talking about -- (Tommy shushes Carl)`, 
			`Talking about what?`, `Hmm... interesting! Tell me more!`, ``, "1.2.14", "1.2.15", null);
		break;
		case "1.2.14": 
			renderNode(`Kane: None of your business. Anyways, what do you want?`,
			`Nothing. Just wanted to see what you guys were talking about. See ya later!`, `Did you just say something about UNO? Alice and I do that game sometimes!`, ``, "1.2.end", "1.2.15", null);
		break;
		case "1.2.15": 
			renderNode(`Tommy: (surprised) You actually <b>LIKE</b> UNO?! Whenever Alice came over, the two of you were always going, "we're going to play with our... DOLLIES!!"`, 
			`Well, I have a few minutes to kill. It looks like you guys were about to set up again. Can I join too?`, `That's not true! Anyways, seems like you guys are still playing. Mind if I join you?`, `(you suddenly remember that you believe that older siblings cannot be friends with their younger siblings.) Uh... gotta go! Bye!`, "1.2.16", "1.2.16", "1.2.end");
			break;
		case "1.2.16":
			updateRelationships("s", 1);
			p1playedUNO = true;
			renderNode(`The Narrator: Your brothers are stunned. All they can do is just haul out the cards and shuffle the deck.`, 
			`*NEXT*`, ``, ``, "1.2.17", null, null);
		break;
		case "1.2.17":
			renderNode(`The Narrator: Game on! Tommy starts out first, and plays a Draw 4. Yikes. You somehow know that he fails being challenged almost 90% of the time. You have two Draw 4s in your deck. Do you decide to continue the drawing war, or challenge Tommy?`,
			`(Challenge Tommy!)`, `(Play your Draw 4.)`, ``, "1.2.18", "1.2.19", null);
		break;
		case "1.2.18":
			renderNode(`The Narrator: The last non-Wild card played was yellow. Tommy throws down his cards and reveals that he has not one, not two, but <u>FOUR</u> yellow cards in his deck! *head slap* It amazes me just how overconfident he is in order to think that the Challenge rule doesn't apply to him!`,
			`*NEXT*`, ``, ``, "1.2.20", null, null);
		break;
		case "1.2.19":
			renderNode(`The Narrator: You play your Draw 4. Kane puts down HIS Draw 4 as well. Carl looks at his cards and groans. Carl: Aw, <b>maaaaaaaaaan!!</b> I HAVE TO DRAW <b>12</B>!? (frustratingly draws 12 cards, then glances at the deck, and smirks) OOOOOOH! You guys are gonna get it!`,
			`*NEXT*`, ``, ``, "1.2.20", null, null);
		break;
		case "1.2.20": 
			renderNode(`The Narrator: The drawing war continues on. It is <b>brutal</b> -- wait a moment. Did Tommy just -- yes, he did -- he just failed another challenge... <b>AGAIN</b>. And now he has to draw six more cards! You have basically lost track of how many cards he has. Oof. Meanwhile, you have just three cards left. Wait, what about Kane, the genius? I bet he's a great strategist! If you cooperate with Kane, you stand a great chance of beating the UNO Master (who just might not be the UNO master after all...) But that's <u>if</u> you cooperate. If you do not, you have a far lower chance of succeeding. Do you want to cooperate with Kane?`,
			`Hmm... you know what? Let's do it!`, `Nah, I think I got this on my own.`, ``, Math.random() < 0.9 ? "1.2.21" : "1.2.22", Math.random() < 0.2 ? "1.2.23" : "1.2.24", null);
			break;
		case "1.2.21": 
			renderNode(`The Narrator: You and Kane decide to discuss a strategy for winning this round of UNO. You both decide to instigate a targeted drawing war on the other siblings and to use reverses strategically to not only give you extra turns, but, to also keep any potential Draws away from you! You both implement the strategy... and it works!! You triumphantly put down your last card, and Tommy can't help but be completely terrified as he realizes his reign as the UNO Master has been ended... by someone who "likes to play with dollies" and "breathe and browse at the mall". Not bad... not bad at all. You and Kane exchange fist-bumps.`,
			`*NEXT*`, ``, ``, "1.2.25", null, null);
		break;
		case "1.2.22": 
			renderNode(`The Narrator:  You and Kane decide to discuss a strategy for winning this round of UNO. You both decide to instigate a targeted drawing war on the other siblings and to use reverses strategically to not only give you extra turns, but, to also keep any potential Draws away from you! You both decide to play the strategy... and it fails dramatically! Unfortunately, it just so happened that the reverses went in exactly the wrong direction... and Kane accidentally giving you a Draw 4 does NOT help either! Tommy secures the win once again!`,
			`*NEXT*`, ``, ``, "1.2.26", null, null);
		break;
		case "1.2.23": 	
			renderNode(`The Narrator: You decide to plan your strategy by yourself, instead of working with Kane. It might not work... but then again, it just might. You decide to wait and keep the game going as long as possible until the deck runs out of cards and needs to be reshuffled. When the deck does run out, you pull off your secret weapon. First, every second turn, you start drawing cards. The other brothers look at you and laugh. It seems counter-intuitive... until they realize you're collecting Draws. Then, Carl instigates World Drawing War II by giving you a Draw 4. You have to fight back. You challenge Carl, and he fails the challenge. Then, you proceed to stun all of your brothers by showing them the weapons in your arsenal... and by the time World Drawing War II ends, you are the winner. Your brothers look at you in astonishment.`,
			`*NEXT*`, ``, ``, "1.2.25", null, null);
		break;
		case "1.2.24": 
			renderNode(`The Narrator: You decide to plan your strategy by yourself, instead of working with Kane. It might not work... but then again, it just might. You decide to instigate a drawing war at just the right moment. When Tommy puts down his last card -- "UNO!" -- , you see your chance, but... Carl gives you a Draw 4. You challenge him, but it fails and you have to draw six cards. Tommy puts down his last card in triumph. Ouch.`,
			`*NEXT*`, ``, ``, "1.2.26", null, null);
		break;
		case "1.2.25": 
		updateRelationships("s", 1);
			renderNode(`Tommy: <b>How could you beat the UNO expert?!!</b> The Narrator: Congratulations... you are an UNO master. Your brothers are quite impressed! So am I! Oh, wait, I think I hear your mother! <br> Mom: Kids!!! It's time for breakfast! <br> The Narrator: It's time for breakfast. Shall we go?`,
			`Let's eat!`, ``, ``, "1.3.1", null, null);
		break;
		case "1.2.26":
		
			renderNode(`Tommy: I win again! I'm sure you'll beat me... next time. Maybe. (starts laughing <b>very</b> evilly) The Narrator: You tried. Still... that was fun, wasn't it?`,
			`Yeah... I guess so.`, `I still wish I won, though!`, ``, "1.2.27", "1.2.27", null);
		break;
		case "1.2.27": 
			renderNode(`The Narrator: Well, look at the bright side. There will be other opportunities. Did you know that was the first time you played with your brothers in two months? They really missed playing with ya! Oh wait, I think I hear your mother!
			<br> Mom: Kids!! It's time for breakfast!
			<br> The Narrator: Let's go!`, 
			`I'll get you next time, Tommy!`, ``, ``, "1.3.1", null, null);
		break;
		case "1.2.end": 
			renderNode(`The Narrator: You head back up to your bedroom to get a few more minutes of sleep. Suddenly, you are jolted awake. Mom: Kids!! It's time for breakfast!`, 
			`*NEXT*`, ``, ``, "1.3.1", null, null);
		break;
		case "1.3.1": 
			if (p1playedUNO) {
				renderNode(`The Narrator: You sit down to eat breakfast. For the first time in months, your breakfast has not been pranked on. It is absolutely delicious.`, 
				`*NEXT*`, ``, ``, "1.3.2", null, null);
				
			} else {
				// nothing yet.
			}
			break;
		case "1.3.2": 
			renderNode(`Tommy: Say... Wanna join us at the next Brothers' Council? We have it straight after breakfast.`,
			`(sure, a Brothers' Council meeting sounds like fun. Why not?) Okay!`, `(you aren't sure what that is) What is it?`, `(you're a little skeptical. Attend a meeting with your sworn prankster enemies? No way.) Uh... no thanks!`, "1.3.3", "1.3.4", "1.3.5");
		break;
		case "1.3.3": 
			renderNode(`Tommy: Okay, great! See you after breakfast!`,
			`(End of Part 1)`, ``, ``, "1.end", null, null);
		break;
		case "1.3.4": 
			renderNode(`Tommy: It's basically our (almost) daily meeting that we hold except on the weekends for planning our, *hehe* antics for the day. You in?`,
			`(sure, a Brothers' Council meeting sounds like fun. Why not?) Okay!`, ``, `(you're a little skeptical. Attend a meeting with your sworn prankster enemies? No way.) Uh... no thanks!`, "1.3.3", null, "1.3.5")
		break;
		case "1.3.5": 
			renderNode(`Tommy: *sigh* Okay, Sarah... see you later, I guess.`,
			`(End of Part 1)`, ``, ``, "1.end", null, null);
		break;
		
		// Part 2 code
			
	}	
}


	
	
function renderNode(d, r1, r2, r3, i1, i2, i3) {
    showSlide("dialogue");
	document.getElementById("dialogue").style.display = "flex";
    document.getElementById("dialogueP").innerHTML = d;

    document.getElementById("response1").innerHTML = r1;

    if (i2 == null) {
        document.getElementById("response2").style.display = "none";
    } else {
        document.getElementById("response2").style.display = "";
        document.getElementById("response2").innerHTML = r2;
    }

    if (i3 == null) {
        document.getElementById("response3").style.display = "none";
    } else {
        document.getElementById("response3").style.display = "";
        document.getElementById("response3").innerHTML = r3;
    }

    response1ID = i1;
    response2ID = i2;
    response3ID = i3;
}

function renderScene() {
	
	
}
document.getElementById("response1").addEventListener('click', () => {
	
	currentNodeID = response1ID;
	theEnormousDialogueFunction(currentNodeID);
});
document.getElementById("response2").addEventListener('click', () => {
	
	currentNodeID = response2ID;
	theEnormousDialogueFunction(currentNodeID);
});
document.getElementById("response3").addEventListener('click', () => {
	
	currentNodeID = response3ID;
	theEnormousDialogueFunction(currentNodeID);
});

function showRelationships() {
	document.getElementById("relationshipContainer").style.display = "flex";

	
}

function updateRelationships(mode, increment) {
	if (mode == "s") {
		siblingRelationship = siblingRelationship + increment;
		if (siblingRelationship > 7) {
			siblingRelationship = 7;
		}
		if (siblingRelationship < 1) {
			siblingRelationship = 1;
		}
	}
	if (mode == "p") {
		parentRelationship = parentRelationship + increment;
		if (parentRelationship > 7) {
			parentRelationship = 7;
		}
		if (parentRelationship < 1) {
			parentRelationship = 1;
		}
	}
	// Time to set up the emojis! 
	if (siblingRelationship == 7) {
		document.getElementById("siblingScore").innerHTML = `😁`
	} else if (siblingRelationship == 6) {
		document.getElementById("siblingScore").innerHTML = `😀`
	} else if (siblingRelationship == 5) {
		document.getElementById("siblingScore").innerHTML = `🙂`
	} else if (siblingRelationship == 4) {
		document.getElementById("siblingScore").innerHTML = `😐`
	} else if (siblingRelationship == 3) {
		document.getElementById("siblingScore").innerHTML = `🙁`
	} else if (siblingRelationship == 2) {
		document.getElementById("siblingScore").innerHTML = `😠`
	} else if (siblingRelationship == 1) {
		document.getElementById("siblingScore").innerHTML = `😡`
	}
	
	if (parentRelationship == 7) {
		document.getElementById("parentScore").innerHTML = `😁`
	} else if (parentRelationship == 6) {
		document.getElementById("parentScore").innerHTML = `😀`
	} else if (parentRelationship == 5) {
		document.getElementById("parentScore").innerHTML = `🙂`
	} else if (parentRelationship == 4) {
		document.getElementById("parentScore").innerHTML = `😐`
	} else if (parentRelationship == 3) {
		document.getElementById("parentScore").innerHTML = `🙁`
	} else if (parentRelationship == 2) {
		document.getElementById("parentScore").innerHTML = `😠`
	} else if (parentRelationship == 1) {
		document.getElementById("parentScore").innerHTML = `😡`
	}
	
}

document.getElementById("test").addEventListener('click', () => {
	showRelationships();
	theEnormousDialogueFunction(document.getElementById("enterInID").value)
})
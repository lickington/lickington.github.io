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
let p2attendingBrothersCouncil = false;
let p2bcPlan = "none";
let p2didBubblePrank = false;

  const slides = document.querySelectorAll('.slide')
function showSlide(name) {
	slides.forEach(slide => slide.classList.remove('active'));
	document.getElementById(name).classList.add('active');
}

function hideSlide() {
	slides.forEach(slide => slide.classList.remove('active'));
	
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
    if (currentChapterIndex < maxChapterIndex) {
        setChapter(currentChapterIndex + 1);
    }
});
document.getElementById('previous').addEventListener('click', function() {
    if (currentChapterIndex > 1) {
        setChapter(currentChapterIndex - 1);
    }
});

function setChapter(index) {
    // Keep the requested chapter within the allowed range.
    if (index < 1 || index > maxChapterIndex) {
        index = currentChapterIndex;
    }

    currentChapterIndex = index;

    document.getElementById('chapterTitle').innerHTML =
        chapterTitles[index - 1];

    document.getElementById('description').innerHTML =
        descriptions[index - 1];
}

// here's the first thing you wanna do: 
document.getElementById("start").addEventListener('click', () => {
	
	if (currentChapterIndex == 1) {
			theEnormousDialogueFunction("0.0.0");
	} else if (currentChapterIndex == 2) {
		theEnormousDialogueFunction("2.1.1");
	}
	
})
// You want to have it start at Chapter One.


function theEnormousDialogueFunction(id) { 
	switch (id) { 
		// Prologue
		case "0.0.0": 
			changeBackground("");
			renderNode(`The Narrator: This is a fictional tale. While the principles of the Older Sibling's Survival Guide are totally real, the plot is completely made up. P.S: Please do not try any of the pranks from within without extreme caution. P.S.<b>S</b>: Wait until the end of the game to see how you would do in real life if you made those same choices! (<- note: this feature will be released at a future date.)`,
			`*NEXT*`, `` ,``,
			"0.1.0", null, null);
			break;
		case "0.1.0": 
			changeBackground("grownup_living_room.png");
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
			changeBackground("sarah_bedroom.png");
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
			renderNode(`The Narrator: Finally, we have Xavier, the youngest, and he loves... honestly, I forgot. I'll tell you later.`,
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
			changeBackground("kitchen.png");
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
		changeBackground("kitchen.png");
			renderNode(`The Narrator: Okay, let's find your brothers. Your mother said they went into Kane's bedroom. Let's see where that is.`,
			`Go into the living room.`, `Go upstairs.`, ``, "1.2.3", "1.2.4", null);
		break;
		case "1.2.3": 
			changeBackground("living_room.png");
			renderNode(`The Narrator: Alright. We are in the living room now. Where do you want to go now?`,
			`Back to the kitchen.`, `The downstairs hallway.`, `Upstairs.`, "1.2.2", "1.2.5", "1.2.4");
		break;
		case "1.2.4": 
			changeBackground("upstairs_hallway.png");
			renderNode(`The Narrator: Alright. Upstairs we go. Hmm... none of these rooms look like Kane's bedroom.`,
			`Back to the kitchen.`, ``, ``, "1.2.2", null, null);
		break;
		case "1.2.5": 
			changeBackground("downstairs_hallway.png");
			renderNode(`The Narrator: Hmm... hey, look at this! There is a sign that says, "Kane's Cave." I think this might be it!`,
			`Go inside.`, `Continue looking around.`, ``, "1.2.6", "1.2.3", null);
		break;
		case "1.2.6":
		changeBackground("kane_bedroom.png");
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
			changeBackground("sarah_bedroom.png");
			renderNode(`The Narrator: You head back up to your bedroom to get a few more minutes of sleep. Suddenly, you are jolted awake. Mom: Kids!! It's time for breakfast!`, 
			`*NEXT*`, ``, ``, "1.3.1", null, null);
		break;
		case "1.3.1": 
			changeBackground("kitchen_door.png");
			if (p1playedUNO) {
				renderNode(`The Narrator: You sit down to eat breakfast. For the first time in months, your breakfast has not been pranked on. It is absolutely delicious.`, 
				`*NEXT*`, ``, ``, "1.3.2", null, null);
				
			} else {
				
				renderNode(`The Narrator: You sit down to eat breakfast. As you take your first bite, the gag reflex takes over. Your brothers pulled a disgusting prank on your breakfast, and it was so disgusting, it might be better to simply not say what it was. Tommy: Come on, it <b>WAS</b> a funny prank! Sarah: MOOOOOOOOOOOOOM!! My brothers just (redacted), and they need to pay!!!!!!`,
					
				`*NEXT*`, ``, ``, "1.3.6", null, null);
			}
			break;
		case "1.3.2": 
			renderNode(`Tommy: Say... Wanna join us at the next Brothers' Council? We have it straight after breakfast.`,
			`(sure, a Brothers' Council meeting sounds like fun. Why not?) Okay!`, `(you aren't sure what that is) What is it?`, `(you're a little skeptical. Attend a meeting with your sworn prankster enemies? No way.) Uh... no thanks!`, "1.3.3", "1.3.4", "1.3.5");
		break;
		case "1.3.3": 
		    p2attendingBrothersCouncil = true;
			renderNode(`Tommy: Okay, great! See you after breakfast! Mom: AFTER you do those math worksheets!! Tommy: Oh, right. Yes, Mom. *sigh* Summer school stinks... (muttering)`,
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
		case "1.3.6": 
			renderNode(`Mom: What's going on here?`,
			`*NEXT*`, ``, ``, "1.3.7", null, null);
		break;
		case "1.3.7": 
			renderNode(`Tommy: Oh, nothing. -- (you interrupt Tommy) Sarah: it was <b>NOT</b> nothing! It was (redacted), and it was <b><u>DISGUSTING!!!</u>`,
			`*NEXT*`, ``, ``, "1.3.8", null, null);
		break;
		case "1.3.8": 
			renderNode(`Mom: Sarah, that's enough. Guys, you are grounded for the rest of the day. I don't know why you keep on pulling pranks on Sarah... but it needs to stop. And Tommy? You will be spending the rest of the morning doing your math homework.`,
			`*NEXT*`, ``, ``, "1.3.9", null, null);
		break;
		case "1.3.9": 
			renderNode(`Tommy: Aw, MAAAAAAAAAN! Why do they have to assign homework during <b>summer break</b> anyway? It's so DUMB!!!!`, 
			`*NEXT*`, ``, ``, "1.3.10", null, null);
		break;
		case "1.3.10":
			renderNode(`Mom glares at Tommy. Mom: Tommy, you know the rules. We've worked out an agreement with Siblingtown Middle School that you do extra assignments year-round until your grades improve.`,
			`*NEXT*`, ``, ``, "1.3.11", null, null);
		break;
		case "1.3.11": 
			renderNode(`The Narrator: Tommy starts to sulk. You've seen him pout before, but never like this. You know, he does look <b>kinda</b> remorseful. What do you want to do?`,
			`Tease Tommy about his homework troubles.`, `Convince your mother to lighten their punishment.`, `Do nothing.`, "1.3.12", "1.3.15", "1.end");
		break;
		case "1.3.12": 
			renderNode(`Sarah: Ha, ha, haaaaaaaaa!! You got into trouble and I didn't! Know what else?! I am a straight-A student... and YOU aren't EITHER! *laughs evilly*`,
			`*NEXT*`, ``, ``, "1.3.13", null, null);
		break;
		case "1.3.13": 
			updateRelationships("s", -1);
			updateRelationships("p", -1);
			
			renderNode(`Mom: Sarah, that is unacceptable! Sure, Tommy may justly deserve it, but you have to be humble as well! You will help me with washing dishes for the rest of the morning, and you're grounded for today as well.`,
			`*NEXT*`, ``, ``, "1.3.14", null, null);
		break;
		case "1.3.14": 
			renderNode(`The Narrator: Ouch. Look down below. Your relationship scores are starting to dip. Better get a grip on it! When I warned you at the start that bad things would start to happen... I wasn't joking. Trust me, you'll get it in future parts when the real exciting stuff starts to happen.`,
			`*NEXT*`, ``, ``, "1.end", null, null);
		break;
		case "1.3.15": 
			renderNode(`Sarah: Wait! I thought about it... maybe don't punish my brothers... THIS time. I think all they wanted was a bit of attention.`,
			`*NEXT*`, ``, ``, "1.3.16", null, null);
		break;
		case "1.3.16": 
			updateRelationships("s", 2);
			updateRelationships("p", 1);
		renderNode(`The Narrator: Your brothers are stunned. They fully expected punishment... but not this. Your mother is a little surprised herself. Mom: Alright... Not this time. Tommy, you aren't grounded, and you don't have to do your math worksheets all morning. But you still have to do twice as many. Complain once, and you're grounded for TWO days.`,
			`*NEXT*`, ``, ``, "1.3.17", null, null);
		break;
		case "1.3.17": 
			renderNode(`Tommy: Yes, ma'am!`,
			`*NEXT*`, ``, ``, "1.3.2", null, null);
		
		case "1.end": 
			renderNode(`You have hit the end of this Part.`,
			`*NEXT*`, ``, ``, "1.exit", null, null);
		break;
		
		case "1.exit":
			maxChapterIndex = 2; 
			hideSlide();
			showSlide("chapter-selection");
			setChapter(2);
			
		break;
		// Part 2 code
		case "2.1.1":
			if (p2attendingBrothersCouncil ) {
				renderNode(`The Narrator: After breakfast (and 30 minutes of math worksheets on Tommy's end), you all congregate in Kane's bedroom after being invited on CatsApp. This morning, your brothers are in an especially rowdy mood. You have absolutely no clue why.`,
				`*NEXT*`, ``, ``, "2.1.2", null, null);
			} else {
				// nothing for now.
			}
		break;
		case "2.1.2": 
			renderNode(`Tommy: Alright, alright. Settle down! (The brothers continue to act up. Tommy whistles.) Today marks our 200th daily meeting so far! Ever since we started up this council, the number of successful pranks we have pulled off has quadrupled! (everyone starts cheering)`, 
			`*NEXT*`, ``, ``, "2.1.3", null, null);
		break;
		case "2.1.3": 
			renderNode(`The Narrator: You shudder. You know exactly what he means by that. Last week, they somehow managed to position a spider exactly where your eyes were. That made for a rude awakening. Oh, wait, Tommy's continuing his speech.`,
			`*NEXT*`, `` ,``, "2.1.4", null, null);
		break;
		case "2.1.4":
			renderNode(`Tommy: Settle down!! Alright, today, in commemoration of our 200th meeting, we are going to pull off the greatest prank ever to date to celebrate. (everyone starts cheering again. Tommy slaps his head.) What is our goal here?`,
			`*NEXT*`, ``, ``, "2.1.5", null, null);
		break;
		case "2.1.5": 
			renderNode(`(Carl raises his hand.) Carl: To pull of a prank that changes history! Tommy: YEAH! That's right! (applause)`,
			`*NEXT*`, ``, ``, "2.1.6", null, null);
		break;
		case "2.1.6": 
			renderNode(`Tommy: Alright, everyone, stand up! It's time for the Pledge of Brotherly Allegiance! -- *everyone starts reciting the pledge* I pledge my allegience to the Brothers Council... and promise that whatever plans discussed here -- no matter how gross, amazing, or funny they may be -- will be kept secret unless otherwise stated by Tommy, the Council Founder.`, 
			`*NEXT*`, ``, ``, "2.1.7", null, null);
		break;
		case "2.1.7": 
			renderNode(`Tommy: Alright. So, to commence our meeting for today... we need ideas for this great prank. Got any ideas?`,
			`*NEXT*`, ``, ``, "2.1.8", null, null);
		break;
		case "2.1.8": 
			renderNode(`Kane: Sorry, I do not. Carl: Me neither. (Xavier is currently engrossed on his tablet. Not sure what he's doing, though.)`, 
			`*NEXT*`, ``, ``, "2.1.9", null, null);
		break;
		case "2.1.9": 
			renderNode(`Tommy: That's fine... because I have the greatest idea ever! We are going to do a bubble party prank! I will sneak upstairs myself. Two of you will keep watch. And Kane will stay down here with one other person of my choosing to make sure that they don't rat us out to Mom! When Mom and Dad go out on their usual "date shopping morning", I will sneak upstairs, fill the dishwasher's soap compartment to overflowing, and then, shut it. It will be SOOOOOOOOO funny!`,
			`*NEXT*`, ``, ``, "2.1.10", null, null);
		break;
		case "2.1.10": 
			renderNode(`Carl: Uh... I'm not supa sure about this one. Kane: Neither am I. Besides... if you do manage to succeed in this prank, we will have to clean up for... (does some quick calculations on his phone) 3 days! And we all know how much we hate cleaning.`,
			`*NEXT*`, ``, ``, "2.1.11", null, null);
		break;
		case "2.1.11": 
			renderNode(`(Tommy gasps. Apparently no one has ever challenged him before.) Tommy: DO YOU DARE QUESTION MY AUTHORITY?! Carl: No, no, no, we just don't want to be stuck cleaning!`, 
			`*NEXT*`, ``, ``, "2.1.12", null, null);
		break;
		case "2.1.12": 
			renderNode(`The Narrator: Oof. Tommy really wasn't joking when he said the greatest prank ever -- and not in a good sense this time! But what do you think you should do? You know that if you help them, they will get into a royal mess (and you might get dragged down with them!). You could object, but then they could call you chicken, or a party pooper (could be Xavier's idea), and kick you out of the Brothers' Council! But what if you decided to try and convince them to do something else instead to celebrate? I dunno. Just the Narrator's opinion.`,
			`Do nothing to stop them and help your brothers.`, `Convince them to do something else instead.`, ``, 
			"2.1.33", "2.1.13", null);
			break;
		case "2.1.13":
			renderNode(`Sarah: Wait! Tommy rolls his eyes. Ugh. Of course you were going to be the spoilsport. Tommy: what is it?`,
			`*NEXT*`, ``, ``, 
			"2.1.14", null, null);
		break;
		case "2.1.14": 
			renderNode(`Sarah: I don't think this prank is a good idea at all! If we do it, we could get into big trouble! And clean until the end of our days!`,
			`*NEXT*`, ``, ``, 
			"2.1.15", null, null);
		break;
		case "2.1.15": 
			renderNode(`Kane: Sarah has a point. What do you suggest that we do instead to celebrate. The Narrator: Let's see what you can do!`, 
			`Have a playing with dolls party instead. You love dolls!`, `Have a bubble pool party. Why not do something with bubbles?`, `What about an all out prank war?!`,
			"2.1.16", "2.1.18", "2.1.20");
		break;
		case "2.1.16": 
			renderNode(`Sarah: let's play with dolls instead! I'm sure that will be a safe activity!`, 
			`*NEXT*`, ``, ``, 
			"2.1.17", null, null);
		break;
		case "2.1.17": 
			renderNode(`Tommy: WHAT!?!? NO WAY. WE WILL NEVER PLAY WITH DOLLS, NOW, WILL WE BOYS?! (everyone chants, "THAT'S RIGHT!") Tommy: Nice try. We're still going to do the prank anyway! Especially since I can't think of anything better! Carl: But are you really sure that -- Tommy: SILENCE!!!!!`, 
			`*NEXT*`, ``, ``, 
			"2.1.12", null, null);
		break;
		case "2.1.18":
		p2bcPlan = "bubble";
			renderNode(`Sarah: Why not do a bubble pool party instead? You did suggest something about a bubble prank. We could fill up the pool outside with bubbles and have a blast!`, 
			`*NEXT*`, ``, ``, 
			"2.1.19", null, null);
		break;
		case "2.1.19": 
			renderNode(`Carl: Hmm... you know what? That's a great idea! If, of course, the Prank Master gives his stamp of approval. Tommy: ARE YOU KIDDING ME?! LET'S DO IT!`, 
			`*NEXT*`, ``, ``, 
			"2.1.23", null, null);
		break;
		case "2.1.20": 
		updateRelationships("s", 1);
		p2bcPlan = "pranks";
			renderNode(`Sarah: Guys... this meeting is super big. I mean, I didn't even know that this was your 200th meeting! So, why not pull off something massive? Tommy: I like the sound of this. Sarah: So why don't we have the Siblingtown Prankoff? A week-long competition... where all the teams prank each other! I'll explain the rules.`,
			`*NEXT*`, ``, ``, 
			"2.1.21", null, null);
		break;
		case "2.1.21": 
			renderNode(`The Narrator: Tommy suddenly gets glowing eyes. "Prank" is his favorite word in the English language. Seriously.`,
			`*NEXT*`, ``, ``, 
			"2.1.22", null, null);
		break;
		case "2.1.22": 
			renderNode(`Tommy: LET'S DO IT! Sarah: And everyone's invited! All our friends can participate... if they wish. Tommy: YEAAAAAAAAAAAAAAAH!!!!!!!!`, 
			`*NEXT*`, ``, ``, 
			"2.1.23", null, null);
		break;
		case "2.1.23": 
			renderNode(`The Narrator: Looks like the meeting is just about to end. As you're -- (suddenly...) Xavier: EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!! YE-<b>OUCH</b>!!! What was THAT all about?! Tommy: XAVIER! Why have you interrupted this meeting in such an unseemly manner!? Explain yourself RIGHT THIS INSTANT! Xavier: LOOK!!!`, 
			`*NEXT*`, ``, ``, 
			"2.1.24", null, null);
		break;
		case "2.1.24": 
			renderNode(`(Xavier rewinds a little on the YouToo premiere) Siblingtown News Announcer 1: Breaking News Today! Today is going to be a happy day for ALL of Siblingtown, the capital of Sibling State. This year's extremely popular annual talent show will be held with an extremely special guest. Donkey Doodily, everyone's favorite donkey! That's right, Donkey Doodily. We decided to invite him, knowing it was a long shot, and couldn't believe he actually said yes!  <br> Siblingtown News Announcer 2: That's right, so mark your calendars for August 1st, because this year's talent show is going to be absolutely epic! Be there... or be square! <br> Siblingtown News Announcer 1: Oh, and we forgot to mention, the grand prize winner will receive $10,000. that's right, $10,000!! This morning on STV News! (fading news music)`,
				`*NEXT*`, ``, ``, 
				"2.1.25", null, null);
			break;
		case "2.1.25": 
			renderNode(`(You can literally hear the entire city break out into cheers) The Narrator: NOW I remember what Xavier really liked. <i>Donkey Doodily</i>, THE most popular kids' show on the block! Wait, you don't know what Donkey Doodily is? Maybe... you should ask?`,
			`(ugh, I don't know any better. I might as well ask my brothers.)`, `(are you crazy?! No way, I'm searching it up on Gaggle RIGHT NOW!)`, ``,
			"2.1.26", "2.1.28", null,);
		break;
		case "2.1.26": 
			renderNode(`Sarah: Who IS Donkey Doodily? I confess to having lived under a rock.`,
			`*NEXT*`, ``, ``, 
			"2.1.27", null, null);
		break;
		case "2.1.27": 
			renderNode(`Tommy: (looks completely dumbfounded) HOW COULD YOU NOT KNOW ABOUT DONKEY DOODILY?! (All the other brothers look at him quizzically) Oops, I mean, everyone knows about Donkey Doodily. He's like the most popular kids' show in the nation. Xavier loves that show more than anything else on earth. He has Donkey Doodily stuffies, Donkey Doodily shirts, Donkey Doodily everything. Look him up, you should know about this dude by now! (more quizzical stares) Uh... never mind.`, 
			`(look him up on your phone.)`, ``, ``, 
			"2.1.28", null, null);
		break;
		case "2.1.28": 
			renderNode(`The Narrator: You haul out your phone and search up Donkey Doodily on Gaggle. Hmm... let's see. Here's a post on Post-It, and a Wikipedia article. You click on the article and read through it.`, 
			`*NEXT*`, ``, ``, 
			"2.1.29", null, null);
		break;
		case "2.1.29": 
			renderNode(`The Narrator: Hmm... interesting. He had his rise to fame five years ago when one of his skits went viral with two of his horse buddies, Waylon and Corcel. They ended up becoming really good at writing episodes for kids and it was marketed as a show for preschoolers. These two, along with Doodily, became one of THE most popular shows in the nation. They are beloved for their comedy. Interesting stuff.`, 
			`*NEXT*`, ``, ``, 
			"2.1.30", null, null);
		break;
		case "2.1.30": 
			renderNode(`Tommy: I am SO going to win those $10,000. No, seriously. Come on, <i>amigos</i>! We've got to tell Mom the great news! After this, we'll plan out what to do next!`,
			`*NEXT*`, ``, ``, 
			"2.1.31", null, null);
		break;
		case "2.1.31": 
			if (p2didBubblePrank) {
				updateRelationships("p", -1);
				renderNode(`The Narrator: You all run upstairs to the living room and find your parents. They were just about to go on their "weekly shopping date". After breathlessly explaining about the talent show, your mom speaks up. Mom: ...yes. But I don't remember seeing anything about Donkey Doodily showing up (checks phone)... wait a moment. You're right. Wow. My guess is you guys want to sign up? (all the brothers cheer wildly) Tommy: TEN THOUSAND DOLLARS, HERE I COME!! Mom: FIRST, clean up the bubbles, and then you can start planning. That will be your only punishment, since it seems like nothing else is damaged.  Alright. Applications are due by next week. Just simply agree on what you're going to do. (everyone cheers)`, 
			`*NEXT*`, ``, ``, 
			"2.1.32", null, null);
			} else {
				renderNode(`The Narrator: You all run upstairs to the living room and find your parents. They were just about to go on their "weekly shopping date". After breathlessly explaining about the talent show, your mom speaks up. Mom: ...yes. But I don't remember seeing anything about Donkey Doodily showing up (checks phone)... wait a moment. You're right. Wow. My guess is you guys want to sign up? (all the brothers cheer wildly) Tommy: TEN THOUSAND DOLLARS, HERE I COME!! Mom: Alright. Applications are due by next week. Just simply agree on what you're going to do. (everyone cheers)`, 
			`*NEXT*`, ``, ``, 
			"2.1.32", null, null);
			}
			
		break;
		case "2.1.32": 
			if (p2bcPlan == "pranks") {
				
			} else if (p2bcPlan == "bubble") {
				
			} else {
				renderNode(
			}
		break;
		case "2.1.33": 
			
		break;
	}	
}


	
function changeBackground(imgName) {
	document.getElementById("background").src = "./background/" + imgName;
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
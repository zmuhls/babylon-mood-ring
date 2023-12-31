const poetryDisplay = document.getElementById('poetryDisplay');

const poems = [
    "frozen custard in the city of babylon by zach muhlbauer",
    "heaven-spotted, sand-blown, the nightingale croons out one last tune",
    "graffiti on the bridge leading out of town, out of your hometown before it was your hometown",
    "go ahead, do your worst; you won't find any secrets in your name",
    "in the untold story of that word, not insight here or outside there",
    "not in the frenzy of a live wire or upon the kaon of a birdsong",
    "not in the snap of your finger, let alone a twig",
    "you are what breaks you",
    "you are what saves you",
    "for you, like most, were born unheard, driveling sea spores in the cusp",
    "at the mouth, foaming squeals, and the earsplitting sob of the cord that cuts",
    "cheating you of your cosmic pause, evacuating it of you",
    "and you of it, freshly soiled in yourself, washed and restored",
    "in the almighty trashcan, circles wrapped in flesh so you could whisper home",
    "to make your place below the solar system, dangled sounds of noise above your crib",
    "your coffin, anodyne sweet and quiet as a thought",
    "sound asleep in a blanket of bees, a straitjacket soft, white and clean",

    "sure you knew nothing else or otherwise, brought up by those who know your cries",
    "as babble, cough, hiccup, cry, coo, cry, and tears",
    "a wee-little sneeze in the mist of the jabberwocky",
    "not long ‘til you think teenage thoughts, clip-clap, clippity-clap",
    "of the red ace of hearts drumming at the bicycle spokes",
    "your second spoke-card in two days, frayed, wet, and spindly hot",
    "in the humid glaze of summer with your torn-to-be ace of hearts",
    "babbling on and on, whittling down its plastic encasing",
    "until only the paper remains and rips in two as you lay on the brakes",
    "and you turn for home",
    "mister, mister, I’ll have, I’ll have one sour-cherry custard",
    "…now, honey, what do we say? pleaaaaaaase!",
    "what a windy day, you think, with a bid... sorting stray socks into pairs",
    "sorting outside over inside, often with a side-long glance at the windowpane",
    "framed with smudges of a block party down the way",
    "of a clown folding balloons, dogs, giraffes, exotic animals",
    "even rodents with a quip or two for the children in the summer balm",
    "or was it mild that day, the air so still at last?",

    "far too cold at any rate for frozen custard that day",
    "back again when you rode your bike clip-clap past the school bus",
    "pretended to be evil knievel in the making, back again",
    "another phantom in your head, in your thoughts, in your words",
    "baking a cake you'll forget to eat, encrusted with those oven-burnt murmurs",
    "spore-crusted critters that lap against your inner space and milk your webbings dry",
    "brain matter gone soft and sticky in return, as in those dollops on the boardwalk",
    "planks where you felt such loss, always already robbed of your ilk",
    "an echo of an echo of your red ace of heart tick-tocking at that wheel",
    "long caught in its gears, the refrain of paper coming apart",
    "an almost endless clapping in applause",

    "only when perched ajar in a grocery line one decade later",
    "do you realize what was lost that day and why",
    "but such a shame to think of time present, tick-tick, tock-tock, tsk-tsk",
    "like time past, interminably past, long before your hometown rituals",
    "and your pathologies of youth dropped chronic from that waffle-cone",
    "your one and only scoop having melted into pigeon-feed while the vultures of the moira",
    "were snip-snipping at your synapse, a flock of decomposing birds of flight",
    "turned to circus in one sad second",
    "looking back, you aren’t the least bit shocked",
    "after all, nothing ever changes, nothing but the lot of it",
    "puddling out of you like egg yolk",
    "you are not what breaks you",
    "you are not what saves you",
    "a bottle-sized tear in a garbage bag, snagged in a boxwood down on the block",
    "you emptied your shards and rung yourself hoarse talking in your sleep",
    "looking back for the word, for its sound and its meaning",
    "for that trickle from the bottom of the boardwalk, like a knock-knock",
    "a bark-and-growl, like the marrow of your spine gone plop",
    "now, you’ve grown deaf to the unnamable, an adult, twice as old",
    "as your mother when she didn’t hear you cry that day",
    "adults, like you — they fumigate their gingivitis with prepackaged oils",
    "spilled over cavernous cheeks of fissure and flesh",
    "foaming and frothing like frogs in an airtight box",
    "every morning, you walk the tightrope across your throat, your own personal abyss",
    "burbling ocean-blue bubbles in a struggle to endure all of which you cannot say",
    "cannot read, cannot know, as of yet unheard, waiting, waiting to be",
    "'twas brillig and the slivy toves, did gyre and gimble in the wabe,' reads alice, your granddaughter, checking her watch when this used to be her favorite part",
    "'all mimsy were the borogoves, and the mome raths outgabe,' waiting to be heard",
    "to be known, spattered at the drain, ferried by the faucet",
    "left on after so many years, like dripping, drops of memory",
    "nothing but a sound, a sound left on, if nothing more than the pigeons",
    "and the vultures back at it with your frozen custard",
    "still in a trickle from that plank",
    "from that boardwalk down in the city of babylon where you left it all behind"
];


document.addEventListener('mousemove', (e) => {
    const xRatio = e.clientX / window.innerWidth;
    const yRatio = e.clientY / window.innerHeight;

    const randomIndex = Math.floor(Math.random() * poems.length);
    const poem = poems[randomIndex];

    poetryDisplay.textContent = poem;
    poetryDisplay.style.color = `rgb(${Math.floor(xRatio * 255)}, ${Math.floor(yRatio * 255)}, ${Math.floor((1 - xRatio + yRatio) * 255)})`;
});

const input = document.querySelector('#myInput');
input.addEventListener('input', function () {
    let val = this.value;
    if (val === '') {
        closeAllLists();
    } else {
        closeAllLists();
        const div = document.createElement('div');
        div.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(div);
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].substr(0, val.length) === val) {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = "<strong>" + animals[i].substr(0, val.length) + "</strong>";
                resultDiv.innerHTML += animals[i].substr(val.length);
                resultDiv.innerHTML += "<input type='hidden' value='" + animals[i] + "'>";

                resultDiv.addEventListener("click", function() {
                    input.value = this.getElementsByTagName('input')[0].value;
                    closeAllLists();
                });
                div.appendChild(resultDiv)
            }
        }
    }
});

function closeAllLists() {
    const getDiv = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < getDiv.length; i++) {
        getDiv[i].parentNode.removeChild(getDiv[i]);
    }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

const animals = [
    "aardvark",
    "albatross",
    "alligator",
    "alpaca",
    "ant",
    "anteater",
    "antelope",
    "ape",
    "armadillo",
    "baboon",
    "badger",
    "barracuda",
    "bat",
    "bear",
    "beaver",
    "bee",
    "bison",
    "boar",
    "buffalo",
    "butterfly",
    "camel",
    "capybara",
    "caribou",
    "cassowary",
    "cat",
    "caterpillar",
    "cattle",
    "chamois",
    "cheetah",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chough",
    "clam",
    "cobra",
    "cockroach",
    "cod",
    "cormorant",
    "coyote",
    "crab",
    "crane",
    "crocodile",
    "crow",
    "curlew",
    "deer",
    "dinosaur",
    "dog",
    "dogfish",
    "dolphin",
    "donkey",
    "dotterel",
    "dove",
    "dragonfly",
    "duck",
    "dugong",
    "dunlin",
    "eagle",
    "echidna",
    "eel",
    "eland",
    "elephant",
    "elephant-seal",
    "elk",
    "emu",
    "falcon",
    "ferret",
    "finch",
    "fish",
    "flamingo",
    "fly",
    "fox",
    "frog",
    "gaur",
    "gazelle",
    "gerbil",
    "giant-panda",
    "giraffe",
    "gnat",
    "gnu",
    "goat",
    "goose",
    "goldfinch",
    "goldfish",
    "gorilla",
    "goshawk",
    "grasshopper",
    "grouse",
    "guanaco",
    "guinea-fowl",
    "guinea-pig",
    "gull",
    "hamster",
    "hare",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hornet",
    "horse",
    "human",
    "hummingbird",
    "hyena",
    "ibex",
    "ibis",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "kangaroo",
    "kingfisher",
    "koala",
    "komodo-dragon",
    "kookabura",
    "kouprey",
    "kudu",
    "lapwing",
    "lark",
    "lemur",
    "leopard",
    "lion",
    "llama",
    "lobster",
    "locust",
    "loris",
    "louse",
    "lyrebird",
    "magpie",
    "mallard",
    "manatee",
    "mandrill",
    "mantis",
    "marten",
    "meerkat",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mouse",
    "mosquito",
    "mule",
    "narwhal",
    "newt",
    "nightingale",
    "octopus",
    "okapi",
    "opossum",
    "oryx",
    "ostrich",
    "otter",
    "owl",
    "ox",
    "oyster",
    "panther",
    "parrot",
    "partridge",
    "peafowl",
    "pelican",
    "penguin",
    "pheasant",
    "pig",
    "pigeon",
    "polar-bear",
    "pony",
    "porcupine",
    "porpoise",
    "prairie-dog",
    "quail",
    "quelea",
    "quetzal",
    "rabbit",
    "raccoon",
    "rail",
    "ram",
    "rat",
    "raven",
    "red-deer",
    "red-panda",
    "reindeer",
    "rhinoceros",
    "rook",
    "salamander",
    "salmon",
    "sand-dollar",
    "sandpiper",
    "sardine",
    "scorpion",
    "sea-lion",
    "sea-urchin",
    "seahorse",
    "seal",
    "shark",
    "sheep",
    "shrew",
    "skunk",
    "snail",
    "snake",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starling",
    "stingray",
    "stinkbug",
    "stork",
    "swallow",
    "swan",
    "tapir",
    "tarsier",
    "termite",
    "tiger",
    "toad",
    "trout",
    "turkey",
    "turtle",
    "vicuña",
    "viper",
    "vulture",
    "wallaby",
    "walrus",
    "wasp",
    "water-buffalo",
    "weasel",
    "whale",
    "wolf",
    "wolverine",
    "wombat",
    "woodcock",
    "woodpecker",
    "worm",
    "wren",
    "yak",
    "zebra"
];
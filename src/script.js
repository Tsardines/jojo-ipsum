let jojoArr = ["Anubis", "Atum", "Bastet", "Cream", "Dark Blue Moon", "Death Thirteen", "Ebony Devil", "Emperor", "Empress", "The Fool", "Geb", "Hanged Man", "Hermit Purple", "Hierophant Green", "High Priestess", "Horus", "Judgement", "Justice", "Khnum", "Lovers", "Magician's Red", "Osiris", "Sethan", "Silver Chariot", "Star Platinum", "Strength", "Sun", "Tenore Sax", "Tohth", "Tower of Gray", "Wheel of Fortune", "Za Warudo", "Yellow Temperance", "Achtung Baby", "Aqua Necklace", "Atom Heart Father", "Bad Company", "Boy II Man", "Cheap Trick", "Cinderella", "Crazy Diamond", "Earth Wind and Fire", "Echoes", "Enigma", "Za Hando", "Harvest", "Heaven's Door", "Hermit Purple", "Highway Star", "Killer Queen", "The Lock", "Love Deluxe", "Pearl Jam", "Ratt", "Red Hot Chili Pepper", "Star Platinum", "Stray Cat", "Super Fly", "Surface", "Aerosmith", "Baby Face", "Beach Boy", "Black Sabbath", "Chariot Requiem", "Clash", "Echoes", "Gold Experience", "Gold Experience Requiem", "The Grateful Dead", "Green Day", "King Crimson", "Kraft Work", "Little Feet", "Man in the Mirror", "Metallica", "Moody Blues", "Mr. President", "Notorious B.I.G", "Oasis", "Purple Haze", "Rolling Stones", "Sex Pistols", "Silver Chariot", "Soft Machine", "Spice Girl", "Sticky Fingers", "Talking Head", "White Album", "Kono Dio da!", "Sono Chi no Sadame", "Crazy Noisy Bizarre Town", "Yare yare", "Oh that's a baseball!", "Serect yur cur", "Jaggrs", "Red Dragern", "Yo Angelo", "Nani?!", "Temeh", "ORA ORA ORA", "MUDA MUDA MUDA", "WRYYY", "Robert E.O. Speedwagon", "Smokey Brown", "Dio Brando", "Tarkus", "Jojo", "Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo", "Josuke Higashikata", "Giorno Giovanna", "Jolyne Kujo", "Johnny Joestar", "Kars", "Esidisi", "Wammu", "Santana", "Straizo", "Stroheim", "Oingo", "Boingo", "Kakyoin", "Polnareff", "Lisa Lisa", "Holly Kujo", "Avdol", "D'Arby the Elder", "D'Arby the Younger", "Enya", "Vanilla Ice", "Yoshikage Kira", "Rohan Kishibe", "Okuyasu", "Yukako", "Diavolo", "Doppio", "Polpo", "Cioccolata", "Chariot Requiem", "Secco", "Bruno Bucciarati", "Leone Abbacchio", "Narancia Ghirga", "Guido Mista", "Baron Zeppeli", "Caesar Zeppeli", "Pannacotta Fugo", "Koichi", "Messina", "Erina Pendleton", "Donovan", "Devo", "Alessi", "N'Doul", "Mariah", "Pet Shop", "Suzi Q", "Iggy", "Stone Mask", "Vampires", "Phantom Blood", "Battle Tendency", "Stardust Crusaders", "Diamond is Unbreakable", "Golden Wind", "Stone Ocean", "Morioh", "Pillar Men", "Red Stone of Aja", "Hamon", "Nani...stando!", "Passione", "Roundabout", "Walk Like An Egyptian", "Vento Aureo", "Hirohiko Araki"];

function shuffle(jojoArr) {
    let currIdx = jojoArr.length, temporaryValue, randomIdx;

    while (0 !== currIdx) {
        randomIdx = Math.floor(Math.random() * currIdx);
        currIdx -= 1;

        temporaryValue = jojoArr[currIdx];
        jojoArr[currIdx] = jojoArr[randomIdx];
        jojoArr[randomIdx] = temporaryValue;
    }

   return jojoArr;
}

let result = shuffle(jojoArr);

console.log([result.join(' ')]);

let resultsBox = document.getElementsByClassName("results_box");
$.each(result, function(idx, value) {
    $(resultsBox).append(`${value} `);
})

$(".btn_shuffle").click(function() {
    shuffle(result);
    console.log('click')
})




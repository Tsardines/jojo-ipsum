

function shuffle(arr) {
    let currIdx = arr.length, temporaryValue, randomIdx;

    while (0 !== currIdx) {
        randomIdx = Math.floor(Math.random() * currIdx);
        currIdx -= 1;

        temporaryValue = arr[currIdx];
        arr[currIdx] = arr[randomIdx];
        arr[randomIdx] = temporaryValue;
    }

    return arr;
}

let arr = ["Anubis", "Atum", "Bastet", "Cream", "Dark Blue Moon", "Death Thirteen", "Ebony Devil", "Emperor", "Empress", "The Fool", "Geb", "Hanged Man", "Hermit Purple", "Hierophant Green", "High Priestess", "Horus", "Judgement", "Justice", "Khnum", "Lovers", "Magician's Red", "Osiris", "Sethan", "Silver Chariot", "Star Platinum", "Strength", "Sun", "Tenore Sax", "Tohth", "Tower of Gray", "Wheel of Fortune", "Za Warudo", "Yellow Temperance", "Achtung Baby", "Aqua Necklace", "Atom Heart Father", "Bad Company", "Boy II Man", "Cheap Trick", "Cinderella", "Crazy Diamond", "Earth Wind and Fire", "Echoes", "Enigma", "The Hand", "Harvest", "Heaven's Door", "Hermit Purple", "Highway Star", "Killer Queen", "The Lock", "Love Deluxe", "Pearl Jam", "Ratt", "Red Hot Chili Pepper", "Star Platinum", "Stray Cat", "Super Fly", "Surface", 
"Aerosmith", "Baby Face", "Beach Boy", "Black Sabbath", "Chariot Requiem", "Clash", "Echoes", "Gold Experience", "Gold Experience Requiem", "The Grateful Dead", "Green Day", "Category:Integrated Stands", "King Crimson", "Kraft Work", "Little Feet", "Man in the Mirror", "Metallica", "Moody Blues", "Mr.President", "Notorious B.I.G", "Oasis", "Purple Haze", "Rolling Stones", "Sex Pistols", "Silver Chariot", "Soft Machine", "Spice Girl", "Sticky Fingers", "Talking Head", "White Album", "Kono Dio da", "Yare yare", "Oh that's a baseball!", "Serect yur cur", "Jaggrs", "Yo Angelo", "Nani?!", "Temeh", "ORA ORA ORA", "MUDA MUDA MUDA", "WRYYY", "Speedwagon", "Dio Brando", "Tarkus", "Jonathan", "Joseph", "Jotaro", "Josuke", "Giorno", "Jolyne", "Kars", "Esidisi", "Wammu", "Santana", "Straizo", "Stroheim", "Oingo", "Boingo", "Kakyoin", "Polnareff", "Lisa Lisa", "Holly Kujo", "Avdol", "D'Arby the Elder", "D'Arby the Younger", "Enya", "Vanilla Ice", "Yoshikage Kira", "Rohan Kishibe", "Okuyasu", "Yukako", "Diavolo", "Doppio", "Polpo", "Cioccolata", "Chariot Requiem", "Secco", "Bruno Bucciarati", "Leone Abbacchio", "Narancia Ghirga", "Guido Mista", "Baron Zeppeli", "Caesar Zeppeli", "Pannacotta Fugo", "Koichi"];

let result = shuffle(arr);

console.log([result.join(' ')]);




let newHTML = [];
for (var i = 0; i < result.length; i++) {
    newHTML.push('<p>' + result[i] + '</p>');
}
$(".results_div").html(newHTML.join(""));
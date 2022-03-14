function rollDie(sides = 6) {
    return Math.floor(Math.random() * sides + 1);
}

function greetYou(name, msg = "hey there!") {
    return `${name}, ${msg}`;
}
// greetYou("Aldair")
// 'Aldair, hey there!'
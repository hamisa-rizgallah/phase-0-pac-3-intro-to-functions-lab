function shout(hello) {
    return (hello).toUpperCase();
}

function whisper(HELLO) {
    return (HELLO).toLowerCase();
}

function logShout() {
    const upperCase = "hello".toUpperCase();
    console.log(upperCase);
}

function logWhisper() {
    const lowerCase = "HELLO".toLowerCase();
    console.log(lowerCase);
}

function sayHiToHeadphonedRoommate(greeting) {

    if (greeting === greeting.toLowerCase()) {
        return "I can\'t hear you!";
    } 
    else if (greeting === greeting.toUpperCase()) {
        return "YES INDEED!";
    } 
    else if (greeting === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}

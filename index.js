// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return messages
}

function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}
// Create a function that reverses a string:
// "Hi my name is Andrei" should be:

const reverse = (str) => {
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Input error.  Make sure input is longer than 1 character and is a string."
    }

    const split = str.split("").reverse().join("")

    // Console logs to double check
    console.log(str)
    console.log(split)
}

reverse("Hello my name is Trevor")






const longReverse = (str) => {
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Input error.  Make sure input is longer than 1 character and is a string."
    }

    const backwards = [];
    const totalItems = str.length-1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }

    return backwards.join("")
}

longReverse("Hello my name is Trevor")
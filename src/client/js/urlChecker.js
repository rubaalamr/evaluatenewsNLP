function checkForurl(inputText) {
    console.log("::: Running checkForurl :::", inputText);
    let validurl = `[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)`;

    if(validurl.includes(inputText)) {
        console.log("correct url!")
    }
}

export { checkForurl }

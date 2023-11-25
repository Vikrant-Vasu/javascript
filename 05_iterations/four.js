const myObj = {
    js: 'javascript',
    rb:'ruby',
    cpp:'c++'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}
//we cannot iterate in maps using forin loops
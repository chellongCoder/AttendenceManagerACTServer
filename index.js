const Helpers = require('./helpers');
const Snippet = require('./SnippetSheet');
async function exec() {
    let helpers = await new Helpers();
    console.log(helpers);
    // let snippet = await new Snippet([helpers.driveService, helpers.sheetsService]);
    // console.log(snippet);
    // await snippet.create('demo');
}

exec();
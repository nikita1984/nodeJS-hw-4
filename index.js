#!/usr/bin/env node
const askUserPath = require('./actions/askUserPath');
const getUserPath = require('./actions/getUserPath');
const getContentFromUserPath = require ('./actions/getContentFromUserPath');


(async () => {
    const userString = await askUserPath();
    const userPath = await getUserPath(userString);
    await getContentFromUserPath(userPath);
})();
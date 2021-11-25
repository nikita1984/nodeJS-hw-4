const askUserPath = require('./actions/askUserPath');
const getUserPath = require('./actions/getUserPath');
const getContentFromUserPath = require ('./actions/getContentFromUserPath');


(async () => {
    const userString = await askUserPath();

    // console.log('userString:', userString); 

    const userPath = await getUserPath(userString);

    // console.log('userPath:', userPath); 
    
    await getContentFromUserPath(userPath);
    
})();
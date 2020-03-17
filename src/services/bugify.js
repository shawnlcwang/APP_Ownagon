const axios = require('axios');
// const xml2js = require('xml2js');
const debug = require('debug')('app:bugify');

// const parser = xml2js.Parser({ explicitArray: false });

function bugify() {
    function view() {
        return new Promise((resolve, reject) => {
            axios.get('http://demo.bugify.com/api&api_key=28accbe43ea112d9feb328d2c00b3eed')
                // .then((res) => {
                //     parser.parseString(res.data, (err, result) => {
                //         if (err) {
                //             debug(err);
                //         } else {
                //             debug(result);
                //             resolve(result.GoodreadsResponse.book);
                //         }
                //     });
                // })
                .catch((err) => {
                    reject(err);
                    debug(err);
                });
            // resolve({

            //     description: 'our description'
            // });
        });
    }

    return {
        bugify
    };
}

module.exports = bugify(); // can be executed since no paraments passed in

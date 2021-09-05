const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require('../support/dataset/HomepageData');

describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        homepage.visit('');
    })

    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote)
    })

    it('Select colour', () => {
        homepage.choose_colour(HomepageData.datatest.quote_colour)
    })

    it('Submit a Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote.HomepageData.datatest.quote_colour)
    })

    it('Clear specific quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote)
    })


})
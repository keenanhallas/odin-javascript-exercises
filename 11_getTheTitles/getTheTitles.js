const getTheTitles = function(books) {
    return books.map(book => book.title);
    // This works too, but is not standard practice
    // return books.reduce((titles, book) => {
    //     titles.push(book.title);
    //     return titles;
    // }, []);
};

// Do not edit below this line
module.exports = getTheTitles;

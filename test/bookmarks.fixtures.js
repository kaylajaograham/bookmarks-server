function makeBookmarksArray() {
    return [
            {
                id: 1, 
                title: 'First test title', 
                url: 'www.first.com',
                description: 'First test right here',
                rating: 1
            }, 
            {
                id: 2, 
                title: 'Second test title', 
                url: 'www.second.com',
                description: 'Second test right here',
                rating: 2
            },
            {
                id: 3, 
                title: 'Three test title', 
                url: 'www.three.com',
                description: 'Three test right here',
                rating: 3
            },
            {
                id: 4, 
                title: 'Four test title', 
                url: 'www.four.com',
                description: 'Four test right here',
                rating: 4
            },
            {
                id: 5, 
                title: 'Five test title', 
                url: 'www.five.com',
                description: 'Five test right here',
                rating: 5
            },
    ]
}

module.exports = {
    makeBookmarksArray,
}
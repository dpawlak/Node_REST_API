exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            { 
                _id: 1,
                title: 'First Post', 
                content: 'This is the first post!', 
                imageUrl: 'images/footbal.jpg',
                creator: {
                    name: 'Daniel'
                },
                createdAt: new Date()
            }
        ] 
    })
}

exports.createPost = (req, res, next) => {
    const title = req.body.title
    const content = req.body.content
    // Create post in db
    res.status(201).json({
        message: 'Post create successfully!',
        post: { 
            id: new Date().toISOString(), 
            title: title, 
            content: content, 
            creator: { name: 'Daniel' },
            createdAt: new Date() 
        }
    })
}

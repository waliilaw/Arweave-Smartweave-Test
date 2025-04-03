
export function handle(state , action){


    if(action.input.function === "initilized"){
        state.author = action.caller
    }
    if(action.input.function === "createPost" && action.caller == state.author){
        const posts = state.posts || []
        posts[action.input.post.id] = action.input.post
        state.posts = posts
        state.postCount = state.postCount || 0
        state.postCount += 1
    }
    if(action.input.function === "editPost" && action.caller == state.author){
        const posts = state.posts || []
        const postToUpdate = posts[action.input.post.id]
        posts[action.input.post.id] = action.input.post
        state.posts = posts
    }

    if(action.input.function === "deletePost" && action.caller == state.author){

    }

    return (
        state
    )

}

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

    return (
        state
    )

}
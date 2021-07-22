export const state = () => ({
    loadedPosts: [],
});

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts;
    },
    addPost(state, posts) {
        state.loadedPosts.push(posts);
    },
    editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(
            posts => posts.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
    },
};

export const actions = {
    nuxtServerInit(vuexContext, context) {
        return context.app.$axios
            .$get('/posts.json')
            .then(data => {
                const postsArray = [];
                for (const key in data) {
                    postsArray.push({...data[key], id: key})
                }
                vuexContext.commit('setPosts', postsArray)
            })
            .catch(e => context.error(e));
    },
    setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
    },
};

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    }
};

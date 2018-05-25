const toolbar = {
    state: {
        toolbar: ''
    },

    mutations: {
        changeTitle(state, title) {
            state.toolbar = title;
        }
    }
};

export default toolbar

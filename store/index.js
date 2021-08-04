export const state = () => ({
  loadedProjects: [],
});

export const mutations = {
  setProjects(state, projects) {
    state.loadedProjects = projects;
},
viewProject(state, editedProject){
  const projectIndex = state.loadedProjects.findIndex(
      projects => projects.id === editedProject.id
  );
  state.loadedProjects[projectIndex] = editedProject;
}
};

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
        .$get('/posts.json')
        .then(data => {
            const projectsArray = [];
            for (const key in data) {
                projectsArray.push({...data[key], id: key})
            }
            vuexContext.commit('setProjects', projectsArray)
        })
        .catch(e => context.error(e));
},
setProjects(vuexContext, projects) {
  vuexContext.commit('setProjects', projects);
},
viewProject(vuexContext, editedProject) {
  return this.$axios
      .$put('/posts/' + context.params.id, editedProject)
      .then(result => {
          vuexContext.commit('viewProject', editedProject)
      })
      .catch(e => console.log(e));
},
};

export const getters = {
  loadedProjects(state) {
    return state.loadedProjects;
}
};

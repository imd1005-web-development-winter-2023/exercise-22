// Get an instance of the createApp Vue object
const { createApp, ref } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    // component logic
    const pokemons = ref([
      "Pikachu",
      "Meowth",
      "Charizard",
      "Gyarados",
      "Growlithe",
    ]);
    // expose to the template
    return {
      pokemons,
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");

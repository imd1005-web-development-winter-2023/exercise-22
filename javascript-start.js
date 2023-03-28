// Get an instance of the createApp Vue object
// ADD REF OR REACTIVE TO THE DESTRUCTURING STATEMENT BELOW
const { createApp } = Vue;

// This is where our app logic will go - in the createApp method
const app = createApp({
  setup() {
    // component logic
    // [
    //   "Pikachu",
    //   "Meowth",
    //   "Charizard",
    //   "Gyarados",
    //   "Growlithe",
    // ]

    // CREATE A REF OR REACTIVE OBJECT AND
    // INITIALISE THE VARIABLE TO THE ARRAY
    // ABOVE

    // expose to the template
    return {
      // RETURN THE REACTIVE OR REF VARIABLE
    };
  },
});

// Finally, we mount our app to our web page
app.mount("#app");

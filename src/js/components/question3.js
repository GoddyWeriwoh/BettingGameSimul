Vue.component('question3', {
    data: () => {
        return {
            searchInput: "",
        }
    },
    template: `
      <form v-on:submit.prevent="search">
      <input type="text"  id="searchBox" placeholder=" Filter by Country name..." v-model="searchInput">
      <input type="submit" value="search" id="button">
      </form>`,
    methods: {
        search(event) {  
            this.$root.filterByCountryName(this.searchInput);
        },
        displayAll(){
          alert("Here");
            fetch('https://restcountries.com/v3.1/all',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })       .then(response => response.json())
            .then(response => this.$root.countries = response);
         }
    },
    watch: {
        '$store.state.list': {
          handler() {
            this.displayAll();
          },
          immediate: true
        } 
      },
}
)

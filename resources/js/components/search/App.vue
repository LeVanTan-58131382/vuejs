<template>
    <div id="app">
        <h1>Vue.js Search</h1>

        <div class="form-group">
            <input
                type="text"
                v-model="searchterm"
                class="form-control"
                placeholder="Search term"
            />
        </div>

        <div class="result-container">
            <h2>Results<span></span></h2>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    v-for="entry in filteredList"
                    v-bind:id="entry.id"
                    :key="entry.id"
                >
                    {{ entry.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSearch',
    data() {
        return {
            searchterm: "",
            entries: [
                { id: 0, name: "Captain Marvel" },
                { id: 1, name: "Thanos" },
                { id: 2, name: "Black Panther" },
                { id: 3, name: "Spider-Man" },
                { id: 4, name: "Iron Man" },
                { id: 5, name: "Captain America" },
                { id: 6, name: "Black Widow" },
                { id: 7, name: "Hulk" },
                { id: 8, name: "Thor" },
                { id: 9, name: "Hawkeye" }
            ]
        }
    }
    ,
    computed: {
        filteredList() {
            return this.entries.filter(entry => {
                return entry.name
                    .toLowerCase()
                    .includes(this.searchterm.toLowerCase());
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>

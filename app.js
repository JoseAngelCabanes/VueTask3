const app = Vue.createApp({

    data() {
        return {
            counter: 0
        };
    },
    watch: {

    },
    methods: {
        add(num) {
            this.num = this.counter + num;
        }
    },
});

app.mount('#assignment')
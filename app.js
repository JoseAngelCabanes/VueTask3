const app = Vue.createApp({

    data() {
        return {
            counter: 0,
            counterMessage: ''
        };
    },
    watch: {
        counter(value) {
            if (value != 1) {
              const that = this;
              that.counterMessage = ''
              setTimeout(function() {
                that.counter = 0;
              }, 5000);
            } else {
                if (value === 1) {
                    console.log('FIRST IF');
                    that.counterMessage = ''
                } else {
                    if (value ) {
                        
                    }
                }
            }
          }
            // if (value === 37) {
            //     return 'That is it!'
            // } else {
            //     if (value < 37) {
            //         return 'Not there yet'
            //     } else {
            //         if (value > 37) {
            //             return 'Too much!'
            //         }
            //     }
                
            // }
        
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');
var app = new Vue({
    el: '#app',
    data: {
      message: `I like to put aubergines up my bottom but my bottom hurts`
    }
  });

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: "i prefer marrows"
    }
});

var app4 = new Vue ({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something' }
        ]
    }
})

var app5 = new Vue ({
    el: "#app-5",
    data: {
        message: 'My butt looks sooo big and tasty'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
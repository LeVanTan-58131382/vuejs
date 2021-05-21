<template>
    <div id="app">
        <div class="row">
            <div class="d-flex flex-row justify-content-center py-3">
                <div class="turns p-3"><span class="btn btn-info">Turns : <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{turns}}</span> </span></div>
                <div class="totalTime p-3"><span class="btn btn-info">Total Time : <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{min}} : {{sec}}</span></span></div>
                <div class="totalTime p-3"><button class="btn btn-info" @click="reset" :disabled="!start">Restart</button></div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-5 mx-auto">
                <div class="row justify-content-md-center">
                    <div
                        v-for="card in memoryCards"
                        :key="card.name"
                        class="col-auto mb-3 flip-container"
                        :class="{
                            flipped: card.isFlipped,
                            matched: card.isMatched
                        }"
                        @click="flipCard(card)"
                    >
                        <div class="memorycard">
                            <div class="front border rounded shadow">
                                <img
                                    width="100"
                                    height="150"
                                    src="/memory_fruit/pattern.PNG"
                                />
                            </div>
                            <div class="back rounded border">
                                <img
                                    width="100"
                                    height="150"
                                    :src="'/memory_fruit/' + card.img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "AppMemoryGame",

    created() {

        this.reset();
        // this.cards.forEach(card => {
        //     // card.isFlipped = false;
        //     Vue.set(card, "isFlipped", false);
        //     Vue.set(card, "isMatched", false);
        // });

        // var cards1 = [...this.cards];
        // var cards2 = [...this.cards];

        // var cards1 = _.cloneDeep(this.cards);
        // var cards2 = _.cloneDeep(this.cards);
        // this.memoryCards = this.memoryCards.concat(cards1, cards2);

        // this.memoryCards = _.shuffle(
        //     this.memoryCards.concat(
        //         _.cloneDeep(this.cards),
        //         _.cloneDeep(this.cards)
        //     )
        // );
    },

    data() {
        return {
            cards: [
                {
                    name: "Apple",
                    img: "apple.PNG"
                },
                {
                    name: "Banana",
                    img: "banana.PNG"
                },
                {
                    name: "Orange",
                    img: "orange.PNG"
                },
                {
                    name: "Pineapple",
                    img: "pineapple.PNG"
                },
                {
                    name: "Strawberry",
                    img: "strawberry.PNG"
                },
                {
                    name: "watermelon",
                    img: "watermelon.PNG"
                }
            ],
            memoryCards: [],
            flippedCards: [],
            finish: false,
            start: false,
            turns: 0,
            totalTime: {
                minutes: 0,
                seconds: 0
            }
        };
    },

    methods: {
        flipCard(card) {
            if (
                card.isMatched ||
                card.isFlipped ||
                this.flippedCards.length === 2
            ) {
                return;
            }

            if (!this.start) {
                this._startGame();
            }

            card.isFlipped = true;

            if (this.flippedCards.length < 2) this.flippedCards.push(card);
            if (this.flippedCards.length === 2) this._match(card);
        },

        _match(card) {
            if (this.flippedCards[0].name === this.flippedCards[1].name) {
                setTimeout(() => {
                    this.flippedCards.forEach(card => (card.isMatched = true));
                    this.flippedCards = [];

                    // All cards matched ?
                    if (
                        this.memoryCards.every(card => card.isMatched === true)
                    ) {
                        clearInterval(this.interval);
                        this.finish = true;
                    }
                }, 400);
            } else {
                setTimeout(() => {
                    this.flippedCards.forEach(card => {
                        card.isFlipped = false;
                    });
                    this.flippedCards = [];
                }, 800);
            }

            this.turns++;
        },

        _startGame() {
            this._tick();
            this.interval = setInterval(this._tick, 1000);
            this.start = true;
        },

        _tick() {
            if (this.totalTime.seconds !== 59) {
                this.totalTime.seconds++;
                return;
            }

            this.totalTime.minutes++;
            this.totalTime.seconds = 0;
        },
        reset(){
            clearInterval(this.interval);

            this.cards.forEach((card) => {
                Vue.set(card, 'isFlipped',false);
                Vue.set(card, 'isMatched',false);
            });

            setTimeout(() => {  
                this.memoryCards = [];
                this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
                this.totalTime.minutes = 0;
                this.totalTime.seconds = 0;
                this.start = false;
                this.finish = false;
                this.turns = 0;
                this.flippedCards = [];
                
                }, 600);
            
        },
    },

    computed:{
        sec(){
            if(this.totalTime.seconds < 10){
                return '0'+this.totalTime.seconds;
            }
            return this.totalTime.seconds;
        },
        min(){
            if(this.totalTime.minutes < 10){
                return '0'+this.totalTime.minutes;
            }
            return this.totalTime.minutes;
        }
    }
};

// https://www.freecodecamp.org/news/how-to-build-a-memory-card-game-with-vuejs/
</script>

<style scoped>
.flip-container {
    perspective: 1000;
    min-height: 120px;
    cursor: pointer;
}

.front,
.back {
    backface-visibility: hidden;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
}

.back {
    transform: rotateY(-180deg);
    position: absolute;
}

.flip-container.flipped .back {
    transform: rotateY(0deg);
}

.flip-container.flipped .front {
    transform: rotateY(180deg);
}

.matched {
    opacity: 0.3;
}
</style>



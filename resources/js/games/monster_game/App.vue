<template>
	<div id="wrapper">
  <div class="player you">
    <h1>YOU</h1>
    <div class="health">
      <div class="bar" :style="{width: health_me < 0 ? 0 : health_me + '%'}"></div>
      {{ health_me }} / 100
    </div>
  </div>
  <div class="player enemy">
    <h1>MONSTER</h1>
    <div class="health">
      <div class="bar" :style="{width: health_enemy < 0 ? 0 : health_enemy + '%'}"></div>
      {{ health_enemy }} / 100
    </div>
  </div>
  <div class="row">
    <button class="start-over" v-if="!playing" @click="playing = !playing">START NEW GAME</button>
    <div class="game-buttons" v-if="playing">
      <button @click="attack(10)">Attack</button>
      <button @click="attack(15)">Special Attack</button>
      <button @click="heal">Heal</button>
      <button @click="flee">Flee</button>
    </div>
  </div>
  <div class="row">
  <ul class="status">
    <li v-for="update in updates" :key="update.actor"
        :class="update.actor">
      {{ capitalize(update.actor) }} {{ update.message }} {{ update.dmg }}HP
    </li>
  </ul>
</div>
</div>
</template>

<script>
	export default {
    name: "AppMonsterGame",
    data() {
        return {
            health_me: 100,
            health_enemy: 100,
            updates: [
            ],
            playing: false
        }
    },
  methods: {
    capitalize: function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    attack: function(highest) {
      var damage = Math.floor(Math.random() * highest) + 1;
      this.health_enemy -= damage;
      this.updates.push({
        actor: 'you', 
        message: ' hit Monster for ', 
        dmg: damage
      });
      this.monsterAttack();
    },
    heal: function() {
      var healAmount = Math.floor(Math.random() * 10) + 1;
      this.health_me += healAmount;
      if(this.health_me>100) this.health_me = 100;
            this.updates.push({
        actor: 'you', 
        message: ' healed for ', 
        dmg: healAmount
      });
      this.monsterAttack();
    },
    monsterAttack() {
      
      var damage = Math.floor(Math.random() * 10) + 1;
      this.health_me -= damage;
      this.updates.push({
        actor: 'enemy', 
        message: ' hit Player for ', 
        dmg: damage
      });
      this.checkState();
    },
    flee: function() {
      this.playing = false;
      alert("You have fled the battle!");
      this.restartGame();
    },
    restartGame: function() {
      this.updates = [];
      this.health_me = 100;
      this.health_enemy = 100;
    },
    checkState: function() {
      if(this.health_me < 0) { 
        this.playing = false;
        alert("You have lost!");
        this.restartGame();
      } else if(this.health_enemy < 0) {
        this.playing = false;
        alert("You have won!");
        this.restartGame();
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#wrapper {
  margin: 0 auto;
  width: 80%;
}


.player {
  color: white;
  display: inline-block;
  text-align: center;
  margin: 0;
  width: 50%;    
  &.you { color: black; }
  &.enemy { color: black; float: right;}
  & .health {
    margin: 0 auto;
    height: 20%;
    width: 80%;
    background: lightgray;
    position: relative;
    display: block;
    overflow: hidden;
    color: black;
    & .bar {
      height: 80%;
      width: 100%;
      padding: 0.5em 0;
      background: green;
      transition: width 500ms;
    }
  }
}

.start-over {
  display: block;
  width: 100%;
  padding: 1em;
  background: #fefefe;
}

.row {
  margin: 1em auto;
}

.game-buttons {
  text-align: center;
  & button {
    background: #fafafa;
    padding: 1em;
    width: 24.71%;
    border: none;
  }
}

.status { 
  padding: 0;
  & li { color: rgb(0, 0, 0); 
    text-align: center; padding: 1em; list-style-type: none; }
  & li.you { background: rgba(10,255,225,0.5); }
  & li.enemy { background: rgba(225,10,25,0.5); }
}
</style>
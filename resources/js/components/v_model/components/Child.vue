<template>
  <div>
    <div class="field" style="width: 700px">
      <div class="control">
        <label for="name" class="label">Name</label>
        <input class="input" :value="value.name" @input="updateValue('name', $event.target.value)">
      </div>
    </div>
    <div class="field" style="width: 700px">
      <div class="control">
        <label for="date" class="label">Date</label>
        <input
          class="input"
          type="date"
          :value="value.date"
          @input="updateValue('date', $event.target.value)"
        >
      </div>
    </div>
    <div class="field" style="width: 700px">
      <div class="control">
        <label for="textarea" class="label">Textarea</label>
        <textarea
          class="textarea"
          :value="value.description"
          @input="updateValue('description', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateValue(key, value) {
      this.$emit("input", { ...this.value, [key]: value });
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <ul>
      <li v-for="item in announces" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    announces: [
      { id: 1, text: "Just do it" },
      { id: 2, text: "You Just do it" }
    ]
  })
};
</script>

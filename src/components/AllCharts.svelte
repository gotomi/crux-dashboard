<script>
  import Chart from "./Chart.svelte";
  export let data;
  export let title;
  let which = 0;
  $: options = data[which];
</script>

<h2>{title}</h2>
<p><strong>Choose metric:</strong></p>
<ul>
  {#each data as item, index}
    <li>
      <span
        class={which === index ? "active" : ""}
        on:click={() => (which = index)}>{item.title.text}</span
      >
    </li>
  {/each}
</ul>

<div><Chart {options} /></div>

<style>
  ul,
  li,
  p {
    list-style: none;
    display: inline-block;
    padding: 0 10px 0 0;
  }

  span {
    background-color: antiquewhite;
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
  .active {
    background-color: coral;
  }
  div {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #999;
  }
</style>

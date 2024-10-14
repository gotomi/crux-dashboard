<script>
  import Chart from "./Chart.svelte";
  /** @type {{data: any, title: any}} */
  let { data, title } = $props();
  let which = $state(0);
  let options = $derived(data[which]);
</script>

<h2>{title}</h2>
<p><strong>Choose metric:</strong></p>
<ul>
  {#each data as item, index}
    <li>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <span
        class={which === index ? "active" : ""}
        onclick={() => (which = index)}>{item.title.text}</span
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
    border: 1px solid #ccc9;
    margin: 30px 0;
    background: #fcfcfc;
    padding: 10px;
  }
</style>

<script>
  export let url;
  const icon =
    "https://www.google.com/s2/favicons?sz=16&domain_url=" +
    url.replace("https://", "");
  const isSpecial = ["allegro.pl", "allegrolokalnie.pl"].includes(url.split("/")[0])
</script>

<img src={icon} class="icon" width="12" height="12" alt={url} />
{#if isSpecial}
  <strong title={url}>{url}</strong>
{:else}
  <span title={url}>{url}</span>
{/if}

<style>
  .icon {
    max-width: 12px;
    margin: 0 3px 0 0;
  }

  span,
  strong {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    margin-right: 10px;
  }
</style>

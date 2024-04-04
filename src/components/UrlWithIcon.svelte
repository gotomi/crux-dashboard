<script>
  export let url;
  const icon =
    "https://www.google.com/s2/favicons?sz=16&domain_url=" +
    url.replace("https://", "");
</script>

<img src={icon} class="icon" width="12" height="12" alt={url} />

<span title={url}>{url}</span>

<style>
  .icon {
    max-width: 12px;
    margin: 0 3px 0 0;
  }

  span {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    margin-right: 10px;
  }
</style>

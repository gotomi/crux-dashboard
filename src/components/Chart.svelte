<script>
  import { chart } from "svelte-apexcharts";

  /** @type {{options?: any}} */
  let { options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  } } = $props();

  // apexcharts mutates the options object it receives. With a reactive proxy
  // (Svelte 5 state) those writes retrigger the action's update in a loop, so
  // hand the chart a plain, detached copy instead.
  let plainOptions = $derived($state.snapshot(options));
</script>

<div use:chart={plainOptions}></div>

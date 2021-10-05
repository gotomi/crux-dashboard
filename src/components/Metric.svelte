<script>
    export let post;
    import UrlWithIcon from "./UrlWithIcon.svelte";

    const rank = ["good", "average", "poor"];

    const rankMap = {
        good: " 🟢 ",
        average: " 🟠 ",
        poor: " 🔴 ",
    };
</script>

<div class="row">
    <h3>
        <UrlWithIcon url={post.url} />
        <span class="p75">&nbsp;{post.p75}&nbsp; {rankMap[post.rank]}</span>
    </h3>
    <ul>
        {#each post.histogram as item, index}
            <li class={rank[index]} style={"flex:" + item}>
                <span>{item}%</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    h3 {
        font-weight: 400;
        font-size: inherit;
        padding: 0 15px 0 0;
        text-align: right;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-self: end;
        justify-content: flex-start;
        align-items: baseline;
        margin: 3px 0;
    }

    .row {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2.18fr;
    }

    @media (max-width: 1022px) {
        .row {
            display: block;
        }
    }

    .row:hover h3 {
        color: tomato;
    }

    ul {
        display: flex;
    }
    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding: 5px;
        text-align: right;
        margin: 3px 0;
        text-indent: -999px;
        overflow: hidden;
    }

    .row:hover li:hover {
        overflow: initial;
    }

    .row:hover li:hover span {
        text-shadow: 1px 1px #000;
        background: #000;
        color: #fff;
        padding: 3px;
        border-radius: 3px;
    }

    .p75 {
        width: 60px;
    }

    /* li:first-child{
    border-radius: 5px  0 0 5px;
} */
    li:last-child {
        border-radius: 0 5px 5px 0;
    }

    .good {
        background-color: #34a853;
    }

    .average {
        background-color: #fbbc04;
    }

    .poor {
        background-color: #ea4335;
        color: #fff;
    }
</style>

<script lang="ts">
  export let content : string
</script>

<section id="document-container">
  <textarea placeholder="Start typing away" bind:value={content}></textarea>
</section>

<style>
  #document-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247,248,250);
  }
  textarea {
    box-shadow: 0 1px 3px 1px rgb(60 64 67 / 15%);
    outline: none;
    border: none;
    resize: none;

    width: 816px;
    height: min(1056px, 1056px);
    margin: 1rem;
    padding: 5rem;
  }
</style>
<script lang="ts">
  export let preview : string
  export let documentName : string
  export let documentContent = undefined
  const documentNameLength = documentName.length
  export let event : any
</script>

<article class="document-icon">
  <button class="icon-btn" on:click={event}></button>
  {#if preview === "classic"}
    <p class="document-content">{documentContent}</p>
  {:else}
    {#if preview === "new"}
      <svg class="file-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    {/if}
  {/if}
</article>
{#if documentNameLength < 23}
  <p class="document-title">{documentName}</p>
{:else}
    <p class="document-title" title={documentName}>{documentName.slice(0,23)}...</p>
{/if}

<style>
  .document-icon {
    position: relative;
    display: flex;
    border: 1px solid #dfe1e5;
    background-color: white;
    width: 208px;
    height: 255px;
    border-radius: .35rem;
    transition: border 50ms ease;
  }
  .document-icon:hover {
    border: 1px solid #1a73e8;
    transition: border 100ms ease;
  }
  .document-title {
    text-align: center;
  }
  .document-content {
    font-size: calc(208/816 * 1rem);
    padding: calc(208/816 * 5rem);
  }
  .file-icon {
    width: 3rem;
    margin: auto;
  }
  .icon-btn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
  }
</style>
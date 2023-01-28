<script lang="ts">
  export let preview : string
  export let documentName : string
  export let documentContent = undefined
  const documentNameLength = documentName.length
  export let clickEvent : any
  export let deleteEvent = undefined
</script>

<article class="document-icon">
  <button class="icon-btn" on:click={clickEvent}></button>
  {#if preview === "classic"}
    <p class="document-content">{documentContent}</p>
    <button class="trash-btn" on:click={deleteEvent}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </button>    
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
  .trash-btn {
    position: absolute;
    right: .25rem;
    top: .25rem;
    opacity: 100;
    padding: 0;
    width: 20px;
    background-color: transparent;
    border: none;
  }
  .trash-btn:hover svg {
    stroke: red;
  }
  .document-icon:hover .trash-btn {
    opacity: 100;
  }
</style>
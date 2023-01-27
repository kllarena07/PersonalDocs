<script lang="ts">
  export let icon : string
  export let documentName : string
  const documentNameLength = documentName.length
  export let event : any
</script>

<article class="document-icon">
  <button class="icon-btn" on:click={event}></button>
  {#if icon === "classic"}
    <svg class="file-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  {:else}
    {#if icon === "new"}
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
    align-items: center;
    justify-content: center;
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
  .file-icon {
    width: 3rem;
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
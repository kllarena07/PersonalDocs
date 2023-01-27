<script lang="ts">
  export let newDocumentName : string
  export let addEvent : any
  export let exitEvent : any
</script>

<section id="creator-background">
  <div id="creator-modal">
    <input bind:value={newDocumentName} placeholder="enter the new documents name" />
    <button on:click={addEvent}>Add</button>
    <button id="exit" on:click={exitEvent}>X</button>
  </div>
</section>

<style>
  #creator-background {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
  #creator-modal {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 3rem 1rem 1rem;
    background-color: white;
  }
  #creator-modal input {
    padding: 1rem;
  }
  #exit {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
  }
</style>
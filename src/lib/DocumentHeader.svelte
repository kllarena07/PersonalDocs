<script lang="ts">
  import githubIcon from '../assets/github.png'
  
  export let documentTitle : string
  export let event : any
</script>

<header id="document-header">
  <section id="icon-container">
    <button on:click={event} title="go back to docs">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(83,131,236)">
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
      </svg>
    </button>
    <input bind:value={documentTitle} spellcheck="false" title="Rename" />
  </section>
  <a id="github-icon" target="_blank" rel="noreferrer" href='https://github.com/kllarena07/PersonalDocs'><img alt="github icon. this is here to link to the github repo" src={githubIcon} /></a>
</header>

<style>
  #document-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #dfe1e5;
    box-shadow: 0 -.25rem .5rem black;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  input {
    border: none;
  }
  #icon-container {
    display: flex;
    align-items: center;
  }
  #icon-container svg {
    width: 3rem;
  }
  #github-icon {
    width: 3rem;
    height: 3rem;
  }
</style>
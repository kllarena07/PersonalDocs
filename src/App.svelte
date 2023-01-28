<script lang="ts">
	import CreatorModal from "./lib/CreatorModal.svelte";
  import DocumentBody from "./lib/DocumentBody.svelte";
  import DocumentHeader from "./lib/DocumentHeader.svelte";
  import DocumentIcon from "./lib/DocumentIcon.svelte";
  import Searchbar from "./lib/Searchbar.svelte";
  import { serialize, deserialize } from "./lib/utils";
	import { documentStorage } from "./storage";

  $: clientStorage = deserialize($documentStorage)
  $: clientStorageLength = clientStorage.length

  let newDocumentName : string
  function addNewDocument(documentName : string) {
    if(documentName == undefined || documentName == ' ') return
    clientStorage.push( { title: documentName, content: "" } )
    $documentStorage = serialize(clientStorage)
    displayDocumentCreator = false
  }

  function removeDocument(index : number) {
    clientStorage.splice(index, 1)
    $documentStorage = serialize(clientStorage)
  }

  let selectedDocumentTitle : string
  let selectedDocumentContent : string
  let selectedDocumentIndex : number
  let enteredDocument = false
  function selectDocument(title : string, content : string, index : number) {
    selectedDocumentTitle = title
    selectedDocumentContent = content
    selectedDocumentIndex = index
    enteredDocument = true
  }
  function deselectDocument() {
    selectedDocumentTitle = undefined
    selectedDocumentContent = undefined
    selectedDocumentIndex = undefined
    enteredDocument = false
  }

  function saveContent(title: string, content : string, index: number) {
    if(index < 0) return
    clientStorage[index] = { title: title, content: content }
    $documentStorage = serialize(clientStorage)
  }
  
  $: { saveContent(selectedDocumentTitle, selectedDocumentContent, selectedDocumentIndex) }

  let displayDocumentCreator = false
</script>

{#if !enteredDocument}
  <Searchbar />
{:else}
  <DocumentHeader event={deselectDocument} bind:documentTitle={selectedDocumentTitle} />
{/if}
<main>
  {#if displayDocumentCreator}
    <CreatorModal bind:newDocumentName={newDocumentName} addEvent={() => addNewDocument(newDocumentName)} exitEvent={() => displayDocumentCreator = false} />
  {/if}
  {#if enteredDocument}
    <DocumentBody bind:content={selectedDocumentContent} />
  {:else}
    <section id="documents-container">
      <ul>
        <li>
          <DocumentIcon documentName={"New document"} preview={"new"} clickEvent={() => displayDocumentCreator = true} />
        </li>
        {#if clientStorageLength > 0}
          {#each clientStorage as { title, content }, index}
            <li>
              <DocumentIcon documentName={title} documentContent={content} preview={"classic"}  clickEvent={() => selectDocument(title, content, index)} deleteEvent={() => removeDocument(index)} />
            </li>
        {/each}
        {/if}
      </ul>
    </section>
  {/if}
</main>

<style>
  main {
    min-height: 100%;
  }
  #documents-container {
    padding: 2rem;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 2rem;
  }
</style>
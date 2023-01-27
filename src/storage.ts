import { writable } from "svelte/store";
import { serialize } from "./lib/utils";

export const documentStorage = writable(localStorage.getItem("documentStorage") || serialize([]))
documentStorage.subscribe((doc) => localStorage.setItem("documentStorage", doc))
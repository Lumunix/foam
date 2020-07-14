import { NoteGraph, Note, NoteLink } from './note-graph';

export {
  createNoteFromMarkdown,
  createMarkdownReferences,
  stringifyMarkdownLinkReferenceDefinition,
} from './markdown-provider';

export { TextEdit } from './janitor'

export { NoteGraph, Note, NoteLink };

export interface FoamConfig {
  // TODO
}

export interface Foam {
  notes: NoteGraph;
  // config: FoamConfig
}

export const createFoam = (config: FoamConfig) => ({
  notes: new NoteGraph(),
  config: config,
});
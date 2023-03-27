import React from 'react';
import { Note, TNote } from './Note';

interface NotesListProps {
  notes: Array<TNote>;
}

class NotesList extends React.Component<NotesListProps> {
  constructor(props: NotesListProps) {
    super(props);
  }
  render() {
    return !this.props.notes
      ? 'Add notes about pokemons you met'
      : this.props.notes.map((note, index) => <Note key={index} {...note} />);
  }
}

export default NotesList;

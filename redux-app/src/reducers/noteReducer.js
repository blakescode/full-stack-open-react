const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE': 
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToUpdate = state.find(n => n.id === id)
      const updatedNote = {
        ...noteToUpdate,
        important: !noteToUpdate.important
      }
      return state.map(note =>
        note.id === id ? updatedNote : note 
      )
    }
    default:
      return state
  }
}

export default noteReducer
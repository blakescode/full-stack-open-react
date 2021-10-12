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

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer
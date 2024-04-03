import { createContext, useReducer } from "react";

export const NoteContext = createContext() 

export const NoteReducer = (state, action) => {
    switch (action.type) {
      case 'SET_NOTES':
        return { 
          notes: action.payload 
        }
      case 'CREATE_NOTES':
        return { 
          notes: [action.payload, ...state.notes] 
        }
      default:
        return state
    }
  }
  
  export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NoteReducer, { 
      notes: null
    })
    
    return (
      <NoteContext.Provider value={{ ...state, dispatch }}>
        { children }
      </NoteContext.Provider>
    )
  }
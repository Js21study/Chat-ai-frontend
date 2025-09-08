import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Conversation, Message } from '../@types'


interface ChatStore {
  conversations: Record<string, Conversation>
  currentConversationId: string | null
  isTyping: boolean
  isLoading: boolean
  

  createConversation: (id?: string) => string
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  updateConversationTitle: (conversationId: string, title: string) => void
  setTyping: (typing: boolean) => void
  setLoading: (loading: boolean) => void
  setCurrentConversation: (id: string) => void
  deleteConversation: (id: string) => void
  clearCurrentConversation: () => void
  

  getCurrentConversation: () => Conversation | null
  getCurrentMessages: () => Message[]
  getAllConversations: () => Conversation[]
  
  sendMessageToAI: (userMessage: string) => Promise<void>
}

interface PersistedChatState {
  conversations: Record<string, Conversation>
  currentConversationId: string | null
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      conversations: {},
      currentConversationId: null,
      isTyping: false,
      isLoading: false,
      
      createConversation: (id = `chat-${Date.now()}`) => {
        const newConversation: Conversation = {
          id, 
          messages: [{
            id: 1,
            text: "Hello! I'm your AI assistant. How can I help you today?",
            sender: "ai",
            timestamp: new Date()
          }], 
          createdAt: new Date(),
          title: "New Chat"
        }
        
        set((state) => ({
          conversations: {
            ...state.conversations,
            [id]: newConversation
          },
          currentConversationId: id
        }))
        
        return id
      },
      
      addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => {
        const state = get()
        const conversationId = state.currentConversationId
        
        if (!conversationId) return
        
        const newMessage: Message = {
          ...message,
          id: Date.now(),
          timestamp: new Date()
        }
        
        set((state) => ({
          conversations: {
            ...state.conversations,
            [conversationId]: {
              ...state.conversations[conversationId],
              messages: [...state.conversations[conversationId].messages, newMessage]
            }
          }
        }))
      },
      
      updateConversationTitle: (conversationId: string, title: string) => {
        set((state) => ({
          conversations: {
            ...state.conversations,
            [conversationId]: {
              ...state.conversations[conversationId],
              title
            }
          }
        }))
      },
      
      setTyping: (typing: boolean) => {
        set({ isTyping: typing })
      },
      
      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },
      
      setCurrentConversation: (id: string) => {
        set({ currentConversationId: id })
      },
      
      deleteConversation: (id: string) => {
        set((state) => {
          const { [id]: deleted, ...rest } = state.conversations
          return {
            conversations: rest,
            currentConversationId: state.currentConversationId === id ? null : state.currentConversationId
          }
        })
      },
      
      clearCurrentConversation: () => {
        const state = get()
        const conversationId = state.currentConversationId
        
        if (!conversationId) return
        
        const welcomeMessage: Message = {
          id: 1,
          text: "Hello! I'm your AI assistant. How can I help you today?",
          sender: "ai",
          timestamp: new Date()
        }
        
        set((state) => ({
          conversations: {
            ...state.conversations,
            [conversationId]: {
              ...state.conversations[conversationId],
              messages: [welcomeMessage]
            }
          }
        }))
      },
      
      getCurrentConversation: () => {
        const state = get()
        return state.currentConversationId ? state.conversations[state.currentConversationId] : null
      },
      
      getCurrentMessages: () => {
        const state = get()
        const conversation = state.getCurrentConversation()
        return conversation?.messages || []
      },
      
      getAllConversations: () => {
        const state = get()
        return Object.values(state.conversations).sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      },
      

      sendMessageToAI: async (userMessage: string) => {
        const { addMessage, setTyping, setLoading } = get()
        
        addMessage({
          text: userMessage,
          sender: "user"
        })
        
        setTyping(true)
        setLoading(true)
        
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              message: userMessage,
              conversationId: get().currentConversationId 
            }),
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const data = await response.json()
          
          addMessage({
            text: data.response || "I'm sorry, I couldn't process that request.",
            sender: "ai"
          })
          
        } catch (error) {
          console.error('Error sending message:', error)
          addMessage({
            text: "Sorry, there was an error processing your message. Please try again.",
            sender: "ai"
          })
        } finally {
          setTyping(false)
          setLoading(false)
        }
      }
    }),
    {
      name: 'chat-app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state): PersistedChatState => ({
        conversations: state.conversations,
        currentConversationId: state.currentConversationId,
      }),
    }
  )
)

export const useCurrentMessages = () => useChatStore((state) => state.getCurrentMessages())
export const useCurrentConversation = () => useChatStore((state) => state.getCurrentConversation())
export const useAllConversations = () => useChatStore((state) => state.getAllConversations())
export const useTypingState = () => useChatStore((state) => state.isTyping)
export const useLoadingState = () => useChatStore((state) => state.isLoading)
import AsyncStorage from "@react-native-community/async-storage"
import createUseAsyncStorate from "./plugins/asyncStorage"

const REACTOTRON_ASYNC_CLIENT_ID = "@REACTOTRON/clientId"

export default {
  getClientId: () => {
    debugger
    return AsyncStorage.getItem(REACTOTRON_ASYNC_CLIENT_ID)
  },
  setClientId: (clientId: string) => {
    return AsyncStorage.setItem(REACTOTRON_ASYNC_CLIENT_ID, clientId)
  },
}

export const useAsyncStorage = createUseAsyncStorate(AsyncStorage)

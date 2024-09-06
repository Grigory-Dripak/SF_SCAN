import './config'

export const serviceAPI= {
    async login(username, password) {
        const responce = (await axios.get(AUTH_URL))
        return responce.data
    },
    
    async userDetails() {
        return $api.get(LOGIN_INFO_URL)
    },

    async getHistograms() {
        return $api.get(HISTOGRAMS_URL)
    },

    async objectsearch() {
        return $api.get(OBJECTSEARCH_URL)
    },

    async getDocs() {
        return $api.get(DOCUMENTS_URL)
    }
}


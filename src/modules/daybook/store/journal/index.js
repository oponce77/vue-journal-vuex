// vamos a importar en el store que vamos a definir
import state from './state'
import * as actions from './actions'
import * as mutations from './actions'
import * as getters from './getters'

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule
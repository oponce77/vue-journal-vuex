import { createStore } from "vuex";
import journal from '@/modules/daybook/store/journal'

const store = createStore ({
    modules: {
        journal  // No olvidar, esto es igual a journal : journal
    }
})

export default store
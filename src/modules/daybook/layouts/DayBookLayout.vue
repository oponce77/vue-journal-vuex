<template>
    <Navbar></Navbar>
    <div class="d-flex">
        <div class="col-4">
            <EntryList></EntryList>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('@/modules/daybook/components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('@/modules/daybook/components/EntryList.vue'))
    }
}
</script>
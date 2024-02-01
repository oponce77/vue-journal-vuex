<template>
  <div class="d-flex justify-content-center">
    <h1 class="aling-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab></Fab>
</template>

<script>
import {defineAsyncComponent} from 'vue'  // Las vistas se usan para navegar entre las rutas, una vista es un contenedor de componentes

export default {
  components: {
    Fab: defineAsyncComponent( () => import('@/modules/daybook/components/Fab.vue'))
  }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%
}
</style>
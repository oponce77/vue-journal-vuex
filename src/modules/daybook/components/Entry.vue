<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
        <div class="entry-title d-flex">
            <span class="text-sucess fs-5 fw-bold">15</span>
            <span class="mx1 fs-5">Julio</span>
            <span class="mx2 fw-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Exercitation voluptate incididunt ut anim consequat. Occaecat duis culpa ea eiusmod non mollit enim eu fugiat consectetur duis velit veniam. Cillum occaecat eiusmod commodo non nostrud. Nulla pariatur voluptate sit irure ad cupidatat. Id ipsum consequat occaecat elit ut velit exercitation sunt mollit.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount:45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>
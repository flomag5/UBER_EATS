<template>
    <div class="restaurant--row">
        <div class="restaurant--popular">
            <h2 class="title">Populaires à proximité</h2>
            <div class="wrapper--card">
                <RestoCard v-for="(card, index) in three_restaurant" :info_restaurant="card" :key="index" />
            </div>
        </div>
    </div>
</template>

<script>
import RestoCard from './RestoCard.vue'

export default {
    name: "RestoRow",
    props: {
        three_restaurant: Array
    },
    components: {
    RestoCard,
}
}
</script>

<style lang="scss">
.restaurant--row{
    .title{
        font-size: 1.8rem;
    }
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

</style>
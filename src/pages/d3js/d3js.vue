<template>
    <div>
        <page :title="title"></page>
    </div>
</template>


<script>
import Page from '../../components/shared/Display';

export default {
        components: {
        page: Page
    },

    data() {
        return {
            title: 'D3js'
        }
    },
}
</script>

<style scoped>

</style>
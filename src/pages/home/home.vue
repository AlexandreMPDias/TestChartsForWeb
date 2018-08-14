<template>
    <div>
        <page :title="title"></page>
        <md class="pl-5 pr-5">{{ text }}</md>
    </div>
</template>


<script>
import Page from '../../components/shared/Display';
import Text from './Text';
import VueMarkdown from 'vue-markdown';

export default {
        components: {
        page: Page,
        md: VueMarkdown
    },

    data() {
        return {
            title: 'Home',
            text: Text.text
        }
    },
}
</script>

<style scoped>

</style>
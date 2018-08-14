<template>
    <div class="">
        <div class="d-flex justify-content-center">
            <h4 class="alert alert-warning text-center w-50" role="alert">{{ title }}</h4>
            <slot>
            </slot>
        </div>
    </div>
</template>


<script>
export default {
    props: [
        'title'
    ],
    created(){
        console.log('Created');
    },
    beforeDestroy(){
        console.log('Destroyed');
    }
}
</script>

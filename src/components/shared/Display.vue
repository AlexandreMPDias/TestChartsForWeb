<template>
    <div>
        <h4 class="alert alert-warning" role="alert">{{ title }}</h4>
        <slot>
        </slot>
    </div>
</template>


<script>
export default {
    props: [
        'title'
    ]
}
</script>

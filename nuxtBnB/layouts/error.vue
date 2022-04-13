<template>
<div style="text-align: center;">
    <img async src="https://c.tenor.com/FcVg5W9zZJQAAAAC/error.gif"/><br/><br/>
    <h1>Error!</h1>
    {{ error.message }} {{ error.statusCode }}
    </div>
</template>
<script>
export default {
    head(){
        return {
            title: 'BIG PROBLEMS',
        }
    },
    props: {
        error:{
            type: Object,
            required: true,
        }
    }
}
</script>
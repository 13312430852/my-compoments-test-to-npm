<template>
    <div>
        <button :class="buttonClass">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "SimpleButton",
        props: {
            type: {
                type: String,
                def: 'default',
                validator: (val) => {
                    let strArry = ['default','primary','waring']
                    if (strArry.includes(val)) {
                        return val
                    }else {
                        console.error('传参有误')
                        return 'default'
                    }
                }
            }
        },
        data () {
            return {
                buttonClass: `button-${this.type}`
            }
        }
    }
</script>

<style scoped>
.button-default {
    color: #2c3e50;
}
.button-primary {
    color: deepskyblue;
}
.button-waring {
    color: red;
}
</style>

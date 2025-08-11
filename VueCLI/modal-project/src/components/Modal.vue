<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <slot></slot>
            <div class="actions">                
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'header',
        'text',
        'theme'
    ],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    },
}
</script>


<style>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal h1{
    margin: 0;
    font-size: 24px;
    color: #21bb73;
}
.modal p {
    font-style: normal;
    margin-top: 10px;
    font-size: 16px;
    color: #333;
}
.modal.sale {
    background-color: crimson;
    color: white
}   
.modal.sale h1 {
    color: white;
}
.modal.sale h4{
    color: blue;
}
.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
}
.modal .actions a {
    margin: 10px;
    color: #333;
    text-decoration: none;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
}

</style>
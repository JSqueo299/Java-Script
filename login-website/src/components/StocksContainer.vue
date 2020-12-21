<template>
    <div>
        <p>Stocks</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'StocksContainer',
    created() {
        this.addUserStock('FB');
        setTimeout(() => {
            this.fetchUserStocks();
        }, 5000);
    },
    methods: {
        ...mapActions(['fetchUserStocks', 'addUserStock'])
    },
    computed: {
        ...mapGetters(['userData'])
    }
}
</script>
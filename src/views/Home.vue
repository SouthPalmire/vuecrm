<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <loader v-if="loading" />

    <div v-else class="row">

    <HomeBill />

    <HomeCurrency />
      
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'
import Loader from '../components/app/Loader.vue'

export default {
  name: 'home',
  data() {
    return {
      loading: true,
      currency: null
    }
  },
  components: {
    HomeBill,
    HomeCurrency,
    Loader
  }
}
</script>


  <template>
  <div id="index">
    <h1>MY Inedex PAGE</h1>
    <button @click="goToPageOne">pageOne</button>
    <button @click="goToPageTwo">pageTwo</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPageOne = async () => {
await setTimeout(() => {
  router.push('/pageOne');
  },1500)
};

const goToPageTwo = async() => {
await setTimeout(() => {
  router.push('/pageTwo');
  },1500)
  
};
</script>

<style scoped>
#index{
min-height: 100vh;
background: rebeccapurple;
}
</style>

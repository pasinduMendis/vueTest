
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

const goToPageOne = () => {
  router.push('/pageOne');
};

const goToPageTwo = () => {
  router.push('/pageTwo');
};
</script>

<style scoped>
#index{
min-height: 100vh;
background: rebeccapurple;
}
</style>

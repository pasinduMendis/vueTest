
  <template>
  <div id="index">
    <h1>MY PAGE One</h1>
    <button @click="goToPageIndex">Index</button>
    <button @click="goToPageTwo">pageTwo</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPageTwo = () => {
  router.push('/pageTwo');
};

const goToPageIndex = () => {
  router.push('/');
};
</script>


<style scoped>
#index{
min-height: 100vh;
background: red;
}
</style>

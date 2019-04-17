<template>
  <div class="p_list">
    <mGameListNav></mGameListNav>
    <mGameList></mGameList>
  </div>
</template>

<script>
import mGameListNav from '@/components/mGameListNav.vue'
import mGameList from '@/components/mGameList.vue'
export default {
    name: 'list',
    components:{
      mGameListNav,mGameList
    }
}
</script>

<style less scoped>
.m_game_list_nav a{
				color:#666;
				display: block;
				float: left;
				padding:0.04rem 0.3rem;
			    font-size: 1rem;
			    margin:0.5rem 0.5rem 0 0;
			    background:#f5f5f5;
			    border-radius: 3px;
			}
			.m_game_list_nav .active{
				background: #ff5d75;
				color:#fff;
			}
</style>


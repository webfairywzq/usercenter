<template>
    <el-pagination layout="sizes, prev, pager, next"
        :page-sizes="[10,20,30]"
        :total="total"
        @current-change="currentChange"
        @size-change="sizeChange"
    ></el-pagination>
</template>

<script>
import bus from '../../bus'
export default {
    computed:{
        total(){
            return this.$store.state.users.total
        }
    },
    methods:{
        currentChange(current){
            //current:当前页
            this.$store.commit('users/setPage',{page:current});
            bus.$emit('getuser');
        },
        sizeChange(size){
            this.$store.commit('users/setPage',{pagesize:size});
            bus.$emit('getuser');
        }
    }
}
</script>

<style>
.el-pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>

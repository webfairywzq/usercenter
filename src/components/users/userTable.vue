<template>
    <el-table @selection-change="getIds" v-loading="userLoading" :data="users" style="width:100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="150">
        </el-table-column>
        <el-table-column prop="sex" label="性别" :formatter="formatSex" width="150">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="150">
        </el-table-column>
        <el-table-column prop="birth" label="出生日期" width="150">
        </el-table-column>
        <el-table-column prop="addr" label="地址" width="150">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
            <template slot-scope="scope">
                <el-button type="info" size="mini" @click="edit(scope.row,scope.$index)">编辑</el-button>
                <el-button type="danger" size="mini" @click="removeUser(scope.row.id, scope.$index)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import bus from '../../bus'
    export default {
        data(){
            return {
                userLoading:false,
                ids:[]
            }
        },
        computed: {
            users() {
                return this.$store.state.users.all
            }
        },
        methods:{
            getIds(selection){
                // 对得到的数据进行处理只得到数组中每个对象的 id 组成新的数组
                this.ids=selection.map(u => u.id);
                // console.log(this.ids);
                // 得到选中的所有 ids 传递给 users/ids 进行数据修改
                this.$store.dispatch('users/ids',this.ids);
            },
            async getUsers(){
                this.userLoading = true;
                // this.$store.dispatch('users/setUsers').then(() => {
                //     this.userLoading = false;
                // })
                try{
                    await this.$store.dispatch('users/setUsers');
                    this.userLoading = false;
                }catch(err){
                    console.log(err);
                }
            },
            removeUser(id,index){
                this.$confirm('确定删除该用户吗?','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    return  this.$store.dispatch('users/removeUser',{id,index});
                }).then(() => {
                    this.$message.success("删除成功！");
                }).catch(() => {
                    this.$message.info("取消删除！");
                })
            },
            edit(user,index){
                // console.log(index);
                const u = Object.assign({},user);
                // console.log(u);
                bus.$emit('editUser',{u,index});
            },
            formatSex(row,column,cellValue){
                return cellValue ? '男' : '女'
            }
        },
        created() {
            this.getUsers();
            bus.$on('getuser',this.getUsers);
        }
    }
</script>

<style>

</style>
<template>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="addStatus">
        <el-form v-if="addUser" :model="addUser">
            <el-form-item label="姓名" :label-width="labelWidth">
                <el-input v-model="addUser.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="labelWidth">
                <el-radio v-model="addUser.sex" :label="1">男</el-radio>
                <el-radio v-model="addUser.sex" :label="0">女</el-radio>
            </el-form-item>
            <el-form-item label="年龄" :label-width="labelWidth">
                <el-input v-model="addUser.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" :label-width="labelWidth">
                <el-date-picker :picker-options="pickOptions" @change="addUserDateChange" v-model="addUser.birth"
                    type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" :label-width="labelWidth">
                <el-input v-model="addUser.addr" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addStatus=false">取 消</el-button>
            <el-button type="primary" :loading="addLoading" @click="addEnter">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import bus from '../../bus'
import axios from '../../axios'
export default {
    data(){
        return {
            addStatus:false,
            addLoading:false,
            labelWidth:'90',
            pickOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            addUser:{
                name:'',
                age:'',
                sex:0,
                birth:'',
                addr:''
            }
        }
    },
    methods:{
        addUserDateChange(date){
            const d = new Date(date);
            this.addUser.birth = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
            this.addUser.age = new Date().getFullYear() - d.getFullYear();
        },
        addEnter(){
            return new Promise((resolve,reject) => {
                this.addLoading = true;
                axios.get('/user/add',{
                    params:this.addUser
                }).then(res => {
                    // console.log(res.data);
                    if(res.data.code === 200){
                        this.addStatus = false;
                        this.$store.commit('users/addUser',this.addUser);
                    }
                    this.addLoading = false;
                    resolve();
                })
            })
        }
    },
    created(){
        bus.$on('addUser',(bool) => {
            // console.log(bool);
            this.addStatus = bool;
        })
    }
}
</script>

<style scoped>
.el-form{
    flex-direction: column;
}
</style>

<template>
    <div>
        <user-from></user-from>
        <user-table></user-table>
        <user-page></user-page>
    </div>
</template>

<script>
import userTable from '../components/users/userTable'
import userPage from '../components/users/userPage'
import userFrom from '../components/users/userFrom'
export default {
    components:{
        userTable,
        userPage,
        userFrom
    }
}
</script>

<style>

</style>

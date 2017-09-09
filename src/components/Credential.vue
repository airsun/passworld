<template>
  <div class="credential">

  <md-layout md-gutter>
    <md-layout md-align="start" class="sub-toolbar-align">
      <span class="md-headline">你的帐号</span>
    </md-layout>

    <!-- <md-layout md-flex="20" md-align="end">
      <md-input-container class="search-input" md-inline>
        <label>搜索</label>
        <md-input md-clearable="true" v-model="autocompleteValue" :fetch="fetchFunction"></md-input>
      </md-input-container>
    </md-layout> -->

    <md-layout md-align="end" md-flex="5" class="sub-toolbar-align">
      <md-button id="btn-add" class="md-icon-button md-raised md-accent" @click="openDialog('add-dialog')">
        <md-icon>add</md-icon>
      </md-button>
    </md-layout>
  </md-layout>

  <!-- 添加认证信息的对话窗口 -->

  <md-dialog md-open-from="#btn-add" md-close-to="#btn-add" ref="add-dialog">
    <md-dialog-title>添加账户信息</md-dialog-title>

    <md-dialog-content>
      <form id="newCredentialForm">
        <md-input-container>
          <label>账户应用</label>
          <md-input v-model="newCredential.application"></md-input>
        </md-input-container>
        <md-input-container>
          <label>账户名</label>
          <md-input v-model="newCredential.accountName"></md-input>
        </md-input-container>
        <md-input-container>
          <label>账户密码</label>
          <md-input type="password" v-model="newCredential.password"></md-input>
        </md-input-container>
        <md-input-container>
          <label>密码-再次输入</label>
          <md-input type="password" ></md-input>
        </md-input-container>
        <md-input-container>
          <label>备注</label>
          <md-textarea v-model="newCredential.note"></md-textarea>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="closeDialog('add-dialog')">取消</md-button>
      <md-button class="md-primary" @click="saveAndClose('add-dialog')">添加</md-button>
    </md-dialog-actions>
  </md-dialog>

  </div>
</template>

<script>
export default {
  name: 'credential',
  data () {
    return {
      newCredential: {},
      autocompleteValue: ''
    }
  },
  methods: {
    fetchFunction () {
      console.log('do nothing')
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    saveAndClose (ref) {
      var that = this
      that.saveCredential().then(function () {
        console.log('Credential saved.')
        that.$refs[ref].close()
      })
    },
    saveCredential () {
      var that = this
      return new Promise(function (resolve, reject) {
        console.log(that.newCredential)
        that.$repository.create(that.newCredential)
        that.$ajax.get('/static/credentials.json').then(function (response) {
          console.log(response.data)
          resolve()
        }).catch(function (error) {
          console.log(error)
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-toolbar-align {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

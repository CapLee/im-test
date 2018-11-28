<template>
	<section id="app" ref="messageBox" class="message-wrapper">
		<section class="message-content" ref="message-content">
			<section v-for="({ text, type }, index) in msgList" :key='index' :class="type === 'self' ? 'right' : 'left'">
				<span v-if="type === 'receive'" class="username">jay</span>
				<section>{{ text }}</section>
				<span class="username username-right" v-if="type === 'self'">我</span>
			</section>
		</section>
		<section class="footer">
			<input type="text" v-model="message">
			<button @click="sendMsg">发送</button>
		</section>
	</section>
</template>
<script>
  export default {
    name: 'UserList',
    data: () => ({
      message: '',//发送的消息
      msgList: [],//存储消息的数组
    }),
    created() {
      // 监听chat-one， webId为1，userId1房间里的chat事件， 收到消息追加到msgList中， 类型为其他人
      this.$Echo.channel('chat-one:1:1').listen('Chat', data => {
        const text = data.msg.content
        this.msgList.push({
          text,
          type: 'receive'
        })
      })

    },
    methods: {
      sendMsg() {
        if (!this.message.trim()) return //发送的信息为空串，不操作
        this.$axios.post('/api/sendMsg', {
          from_id: 1,//谁发消息
          to_id: 1,//谁收消息
          content: this.message,//发送的消息
          content_type: 1,//?
          user_identity_id: 1//?,
        }).then(() => {
          this.msgList.push({
            text: this.message,
            type: 'self'
          })
          // 列表追加一项类型自己， 然后清空输入框
          this.message = ''
        })
        
      },
    },
  }
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.message-wrapper {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}
	
	.message-content {
		flex: 1;
		overflow: scroll;
	}
	
	.message-content > section {
		margin: 5px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #fff;
	}
	
	.message-content > section section {
		padding: 10px;
		max-width: 200px;
		background: #ccc;
		border-radius: 8px;
		text-align: left;
	}
	
	.username {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		margin-right: 5px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		color: #fff;
		font-size: 10px;
	}
	
	.username-right {
		margin-left: 5px;
		margin-right: 0;
	}
	
	.message-content > .right {
		display: flex;
		justify-content: flex-end;
	}
	
	.message-content > .right section {
		background: green;
	}
	
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 40px;
		padding: 5px 2px;
		box-sizing: border-box;
		border-top: 1px solid #ccc;
	}
	
	input {
		flex: 1;
		padding: 10px 5px;
		margin: 0 5px;
		color: #666;
		outline: none;
		border: none;
		transition: all 0.3s ease;
	}
	
	input:focus {
		box-shadow: 0 0 20px #14d61c;
	}
	
	button {
		border: none;
		outline: none;
		border-radius: 4px;
		width: 100px;
		height: 100%;
	}
</style>

<!--  -->
<template>
  <div style="min-height: 200px;">
      lalalgrgerg
    <Row>
      <Col span="10" class="commentslist">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="评论人:" prop="name" placeholder="输入评论内容...">
            <Input v-model="formValidate.name"></Input>
          </FormItem>
          <FormItem label="评论内容:" prop="commentDetail" placeholder="输入评论人...">
            <Input
              v-model="formValidate.commentDetail"
              type="textarea"
              :autosize="{minRows: 5,maxRows: 10}"
              placeholder="输入评论内容..."
            ></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">添加</Button>
          </FormItem>
        </Form>
      </Col>
      <Col span="14" class="addComment">评论列表</Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'addComment',
  data () {
    return {
      commentUser: '',
      commentDetail: '',
      formValidate: {
        name: '',
        commentDetail: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        commentDetail: [
          {
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    handleSubmi (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style >
.addComment {
  background-color: aquamarine;
}
.commentslist {
  background-color: lightgoldenrodyellow;
}
</style>

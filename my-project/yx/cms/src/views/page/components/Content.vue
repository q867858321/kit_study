<template>
  <div>
    <el-collapse v-model="controlList">
      <el-form ref="dataForm" v-if="spObj" v-model="spObj">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="el-switch">选择行为</div>
          </template>
          <el-switch
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="游戏"
            @change="changeValue4"
            :disabled="editSpecComponent.name=='Tab'"
            inactive-text="页面"
          ></el-switch>
          <TableGame
            :timeId="timeId"
            v-if="value4"
            @choiceData="choiceData"
            :selectId="spObj.content"
          />
          <TablePage
            :timeId="timeId"
            v-if="!value4"
            @choiceData="choiceData"
            :selectId="spObj.content"
          />
        </el-collapse-item>
        <el-collapse-item title="宣传图片" name="2">
          <el-upload
            :before-upload="beforeAvatarUpload"
            :http-request="addAttachment"
            :show-file-list="false"
            class="avatar-uploader"
            action
          >
            <img v-if="spObj.image.originalUrl" :src="spObj.image.originalUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-collapse-item>
        <el-collapse-item title="说明文字" name="3">
          <el-input v-model="spObj.title"/>
        </el-collapse-item>
        <el-collapse-item title="新游戏" name="4">
          <el-switch
            v-model="spObj.isNew"
            :active-value="true"
            :inactive-value="false"
            active-text="是"
            inactive-text="否"
          ></el-switch>
        </el-collapse-item>
      </el-form>
    </el-collapse>
  </div>
</template>
<script>
import TablePage from "./TablePage.vue";
import TableGame from "./TableGame.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import { imageUpload } from "../../../api/page";
let tmpSpObj = null;
export default {
  data() {
    return {
      lock: false,
      timeId: null,
      dataTmp: null,
      value4: true,
      control: ["1"],
      spObj: null
    };
  },
  components: {
    TablePage,
    TableGame
  },
  computed: {
    ...mapGetters("page", ["editSpecComponent", "getSpecCompAttr"]),
    controlList: {
      get() {
        this.timeId;
        let spObj = this.spObj || {};
        return ["1"];
      },
      set(val) {
        let spObj = this.spObj || {};
        if (!spObj.content) {
          val.splice(1);
        }
      }
    }
  },
  watch: {
    editSpecComponent: {
      deep: true,
      handler(val) {
        let spObj = (val || {}).spObj;
        if (tmpSpObj != spObj) {
          this.handleSp(spObj);
        }
      }
    },
    spObj: {
      deep: true,
      handler(val) {
        if (val) {
          this.UPDATA_SPOBJ({ content: val });
        }
      }
    }
  },
  methods: {
    ...mapMutations("page/", ["UPDATA_SPOBJ", "RESET_SPOBJ"]),
    handleSp(val) {
      let spObj = val;
      if (tmpSpObj != spObj) {
        tmpSpObj = spObj || {};
        if (tmpSpObj.type == 1 || tmpSpObj.type == 3) {
          this.value4 = true;
        } else {
          this.value4 = false;
        }
        this.timeId = +new Date();
      }
      this.spObj = spObj;
    },
    changeValue4(val) {
      this.RESET_SPOBJ(this.spObj);
    },
    choiceData(row) {
      let spObj = this.spObj;
      this.dataTmp = row;
      if (this.value4) {
        let icon = row.icon;
        this.spObj = Object.assign(spObj, {
          type: row.type == "html5" ? 1 : 3,
          content: row.appId,
          image: {
            originalUrl: icon.originalUrl,
            originalSize: icon.originalSize
          }
        });
      } else {
        this.spObj = Object.assign(spObj, {
          type: 2,
          content: row.id
        });
      }
    },
    addAttachment(data) {
      var formData = new FormData();
      formData.append("files", data.file);
      imageUpload(formData).then(data => {
        this.spObj = Object.assign(this.spObj, {
          image: {
            originalUrl: data.url,
            originalSize: data.originalSize,
            originalFormat: data.originalFormat
          }
        });
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

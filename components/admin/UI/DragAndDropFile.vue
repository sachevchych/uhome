<template>
  <div class="uploader">
    <div class="uploader-header">
      <span class="uploader-header-label">Завантаження зображень</span>
      <div v-show="fileList.length > 0">
        <el-button v-show="display.dashboard" size="mini" plain round @click="displayDropZone">Додати</el-button>
        <el-button v-show="display.uploadZone" size="mini" type="warning" plain round @click="hideDropZone">Закрити
        </el-button>
      </div>
    </div>
    <div class="upload-zone" v-show="display.uploadZone" @dragover="dragover" @dragleave="dragleave" @drop="drop">
      <input type="file"
             multiple
             name="fields[assetsFieldHandle][]"
             id="assetsFieldHandle"
             @change="onChange"
             ref="file"
             accept=".jpg,.jpeg,.png"/>

      <div class="label" v-show="display.startLabel">
        <label for="assetsFieldHandle">
          Перетягніть файли або <span>натисніть тут</span> щоб завантажити файли.
        </label>
        <small>Зображення з розширенням jpg, jpeg, png</small>
      </div>
      <div class="label" v-show="display.uploadLabel">
        <i class="el-icon-download"></i>
        <small>Покладіть ваші файли сюди</small>
      </div>
    </div>
    <div class="dashboard" v-show="display.dashboard">
      <draggable tag="ul" v-if="fileList.length" v-bind="dragOptions" v-model="fileList" handle=".preview-handle">
        <transition-group type="transition">
          <li v-for="file in fileList" :key="file.id">
            <div class="preview">
              <div class="preview-handle">
                <i class="el-icon-rank"></i>
              </div>
              <div class="img">
                <el-image style="height: 100%; width: 100%" :src="file.url" fit="scale-down"></el-image>
              </div>
              <div class="info">
                <span>{{ file.image.name }}</span>
                <small>{{ file.size }}</small>
              </div>
            </div>
            <div class="action">
              <el-button @click="remove(file)" type="danger" size="mini" round plain>Видалити</el-button>
            </div>
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "DragAndDropFile",
  components: {
    draggable,
  },
  props: ['images-url'],
  data() {
    return {
      display: {
        startLabel: true,
        uploadLabel: false,
        uploadZone: true,
        dashboard: false
      },
      fileList: []
    }
  },
  methods: {
    onChange() {
      if (this.$refs.file.files.length > 0) {
        if (this.typeValidation(this.$refs.file.files)) {
          this.hideDropZone()
          this.addToList(this.$refs.file.files)
        } else {
         this.$message.error('Файли повинні бути тільки у форматі jpg, jpeg, png')
        }
      }
    },
    typeValidation(files) {
      for (const prop in files) {
        if (files.hasOwnProperty(prop)) {
          if (files[prop].type !== "image/jpeg") {
            return false
          }
        }
      }
      return true
    },
    addToList(files) {
      const set = [...files]
      for (const file of set) {
        let id = this.getFileId()
        this.fileList.push({
          id: id,
          image: file,
          url: '',
          size: this.getFileSize(file.size),
        })
        this.getFileUrl(file, id)
      }
    },
    getFileId() {
      if (this.fileList.length > 0) {
        let maxID = 0
        this.fileList.forEach(file => {
          if (file.id > maxID) {
            maxID = file.id
          }
        })
        return maxID + 1
      } else {
        return 1
      }
    },
    getFileSize(size) {
      if (size > 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(0) + ' MB'
      } else if (size > 1024) {
        return (size / 1024).toFixed(0) + ' KB'
      } else {
        return size + ' B'
      }
    },
    getFileUrl(file, id) {
      let reader = new FileReader()
      reader.onloadend = e => {
        this.fileList.forEach(element => {
          if (element.id === id) {
            element.url = e.target.result
          }
        })

      }
      reader.readAsDataURL(file)
    },
    remove(fileObject) {
      this.fileList = this.fileList.filter(file => file.image !== fileObject.image)
      if (this.fileList.length === 0) {
        this.displayDropZone()
      }
    },
    dragover(event) {
      event.stopPropagation()
      event.preventDefault()
      event.currentTarget.classList.add('active')
      this.display.startLabel = false
      this.display.uploadLabel = true
    },
    dragleave(event) {
      event.currentTarget.classList.remove('active')
      this.display.startLabel = true
      this.display.uploadLabel = false
    },
    drop(event) {
      event.stopPropagation()
      event.preventDefault()
      this.display.startLabel = true
      this.display.uploadLabel = false

      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
    },
    displayDropZone() {
      this.display.uploadZone = true
      this.display.dashboard = false

    },
    hideDropZone() {
      this.display.uploadZone = false
      this.display.dashboard = true
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 100,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  },
  watch: {
    fileList: function () {
      this.$emit('update', this.fileList)
    }
  }
}
</script>

<style lang="scss" scoped>
.uploader {
  min-height: 300px;
  min-width: 400px;
  background-color: #F3F6F9;
  border-radius: .5rem;
  border: 1px solid #EBEDF3;
  position: relative;

  &-header {
    height: 40px;
    border-bottom: 1px solid #EBEDF3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    &-label {
      color: #3F4254;
      font-size: 14px;
      font-weight: 500;
    }
  }
}

.active {
  border-color: $main-color !important;
}

.upload-zone {
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  border-radius: .5rem;
  border: 1px dashed #dfdfdf;


  input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;

    label {
      font-size: 18px;
      cursor: pointer;
    }

    i {
      color: $main-color;
      font-size: 3rem;
    }

    span {
      color: $main-color;
      text-decoration: underline;
    }

    small {
      padding-top: 1rem;
      color: #3F4254;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
}

.dashboard {

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;


    .preview {
      display: flex;
      justify-content: flex-start;

      .preview-handle {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 1rem;
        cursor: move;

        i {
          font-size: 1.2rem;
        }
      }

      .img {
        height: 60px;
        width: 60px;
        border-radius: .2rem;
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        display: flex;
        align-items: center;

      }

      .info {
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
          font-size: 12px;
          line-height: 1.3;
          font-weight: 500;
          margin-bottom: 4px;
          color: #333;
        }

        small {
          font-size: 11px;
          line-height: 1.3;
          font-weight: 400;
          color: #757575;
        }
      }
    }

    .action {
      display: flex;
      align-items: center;
    }
  }

}
</style>

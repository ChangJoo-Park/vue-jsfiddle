<template>
  <div class="v-fiddle">
    <iframe
    v-show="isLoaded"
    :width="width"
    :height="height"
    :src="parsedURL"
    frameborder="0"
    @load="onLoad"></iframe>

    <div v-show="!isLoaded">
      <slot name="loader">
        Loading...
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-fiddle',
  props: {
    width: {
      type: String,
      default: '100%',
      required: false
    },
    height: {
      type: String,
      default: '300',
      required: false
    },
    src: {
      type: String,
      required: true
    },
    js: {
    	type: Boolean,
      required: false,
      default: true
		},
    css: {
    	type: Boolean,
      required: false,
      default: true
		},
    html: {
    	type: Boolean,
      required: false,
      default: true
		},
    result: {
    	type: Boolean,
      required: false,
      default: true
    }
  },
  data: function () {
  	return {
    	isLoaded: false
    }
	},
  computed: {
  	parsedURL () {
      if (this.src === undefined) {
        throw new Error('Should have fiddle URL')
        return
      }
    	let url = this.src.replace('https:', '').replace('http:', '')
      let tabOptions = []
      if (this.result) {
      	tabOptions.push('result')
      }
      if (this.html) {
      	tabOptions.push('html')
			}
      if (this.js) {
      	tabOptions.push('js')
			}
      if (this.css) {
      	tabOptions.push('css')
      }
      url += tabOptions.join(',')
    	return url.trim()
    }
	},
  methods: {
  	onLoad: function () {
      this.isLoaded = true
      this.$emit('loaded')
		}
	}
}
</script>

<style>

</style>

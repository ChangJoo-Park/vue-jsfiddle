import JSFiddle from 'src/JSFiddle.vue'
import { createVM } from '../helpers/utils.js'
import expect from 'chai'

describe('JSFiddle.vue', function () {
  it('should have src', function () {
    const vm = createVM(this, `
    <v-fiddle></v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
  })

  it('should render correct iframe', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/"></v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })

  it('should render loader slot', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/">
      <div slot="loader">로딩중</div>
    </v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })

  it('should render only JS', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/" :js=true :css=false :html=false :result=false>
    </v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })

  it('should render only HTML', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/" :js=false :css=false :html=true :result=false>
    </v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })

  it('should render only CSS', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/" :js=false :css=true :html=false :result=false>
    </v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })

  it('should render only Result', function () {
    const vm = createVM(this, `
    <v-fiddle src="https://jsfiddle.net/1x140dfw/embedded/" :js=false :css=false :html=false :result=true>
    </v-fiddle>`, { components: { 'v-fiddle': JSFiddle }})
    vm.$el.querySelector('iframe').should.exist
  })
})

new Vue({
  el: '#root',
  data: {
    token: '',
    domain: '',
    showTokenError: false,
    showDomainError: false,
    errorMsg: '',
    resultUrl: '',
    resultMd: '',
    showResult: false,
    isCopyUrl: false,
    isCopyMd: false
  },
  methods: {
    onFileChange(e) {
      this.showResult = false
      let observable = qiniu.upload(e.target.files[0], e.target.files[0].name, this.token)
      observable.subscribe((res) => {
      }, (error) => {
        this.errorMsg = error.message
      }, (res) => {
        this.resultUrl = `${this.domain}/${res.key}`
        this.resultMd = `![${res.key.split('.')[0]}](${this.domain}/${res.key})`
        this.showResult = true
        this.errorMsg = ''
      })

    },
    onTokenBlur() {
      this.showTokenError = this.token === '' || this.token === null
      if (this.showTokenError) {
        return
      }
      localStorage.setItem('token', this.token)
    },
    onDomainBlur() {
      this.showDomainError = this.domain === '' || this.token === null
      if (this.showDomainError) {
        return
      }
      localStorage.setItem('domain', this.domain)
    },
    onCopyUrl(e) {
      this.isCopyUrl = true
      this.isCopyMd = false
    },
    onCopyMd(e) {
      this.isCopyMd = true
      this.isCopyUrl = false
    },
    onError() {

    }
  },
  created() {
    this.token = localStorage.getItem('token')
    this.domain = localStorage.getItem('domain')
  }
})
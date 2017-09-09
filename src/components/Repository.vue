<script>
export default {
  name: 'repository',
  data () {
    return {
      rawdata: []
    }
  },
  methods: {
    create (newCredentail) {
      this.rawdata.push(newCredentail)
    },
    all () {
      return this.rawdata
    }
  }
}
</script>

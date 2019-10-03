<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="patient in displayedPatients" :key="patient._id">
          <div class="card mb-2">
            <div class="card-body">
              <h5>{{patient.name}}</h5>
              <p>{{patient.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="btn-group col-md-2 offset-md-5">
          <button
            type="button"
            v-if="page != 1"
            @click="page--"
            class="btn btn-sm btn-outline-secondary"
          >Before</button>
          <button
            type="button"
            @click="page = pageNumber"
            v-for="pageNumber in pages.slice(page-1, page+5)"
            :key="pageNumber"
            class="btn btn-sm btn-outline-secondary"
          >{{pageNumber}}</button>
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="btn btn-sm btn-otuline-secondary"
          >After</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      patients: [],
      baseURL: "http://localhost:3000",
      page: 1,
      perPage: 10,
      pages: []
    };
  },
  created() {
    this.getPatients();
  },
  methods: {
    async getPatients() {
      const res = await this.axios.get(`${this.baseURL}/patients`);
      this.patients = res.data.patients;
    },
    paginate(patients) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return patients.slice(from, to);
    },
    setPatients() {
      let numberOfPages = Math.ceil(this.patients.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    }
  },
  computed: {
    displayedPatients() {
      return this.paginate(this.patients);
    }
  },
  watch: {
    patients() {
      this.setPatients();
    }
  }
};
</script>
<style>
</style>
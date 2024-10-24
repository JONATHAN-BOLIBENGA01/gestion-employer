<template lang="">
    <div class="col-lg-8 col-md-10 mx-auto shadow rounded p-3 mt-4">
     <h1 class="text-muted">
        modifier un employe
     </h1>

     <form @submit.prevent="editEmploye">
        <div class="mb-3">
          <input
            type="text"
            v-model="employee.nom"
            placeholder="nom"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="employee.prenom"
            placeholder="prenom"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="employee.titre"
            placeholder="poste"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="employee.salaire"
            placeholder="montant salaire"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="date"
            v-model="employee.dateEmbauche"
            placeholder="date d'embauche"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">modifier</button>
      </form>
        
    </div>
</template>
<script>
export default {
    // pour recuperer l'id depuis la route 
    props:['id'],
     data() {
        return {
            employee: {
            id: null,
            nom: '',
            prenom: '',
            titre: '',
            salaire: null,
            dateEmbauche: ''
          },
          employees : []
        }
  },
    methods: {
      fetchEmployee() {
        try {
          const data = localStorage.getItem("employees")
          this.employees = JSON.parse(data)
          this.employee = this.employees.find((emp)=> emp.id == this.id)
        } catch (error) {
          console.error("erreur lors de la recuperation du detail de l'employer", error)
        }
      },
      editEmploye() {
        const newEmployeList = this.employees.map((emp) => {
          if (emp.id == this.employee.id) {
            return this.employee
          } else {
            return emp
          }
        })
        localStorage.setItem("employees", JSON.stringify(newEmployeList))
        this.$router.push("/")

      }
  },

  created() {
    this.fetchEmployee()
  }
}
</script>
<style lang="">

</style>
<template lang="">
  <div class="col-lg-8 col-md-10 col-sm-12 mx-auto shadow rounded p-3 mt-4">
    <h1 class="text-muted">Ajout d'un nouvel employer</h1>
    <div class="shadow rounded p-5">
      <form @submit.prevent="addEmploye">
        <div class="mb-3">
          <input
            type="text"
            v-model="newEMpolye.nom"
            placeholder="nom"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="newEMpolye.prenom"
            placeholder="prenom"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="newEMpolye.titre"
            placeholder="poste"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            v-model="newEMpolye.salaire"
            placeholder="montant salaire"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="date"
            v-model="newEMpolye.dateEmbauche"
            placeholder="date d'embauche"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            newEMpolye: {
                nom: '',
                prenom: '',
                titre: '',
                salaire: null,
                dateEmbauche: ''
            }
        }
    },
    methods: {
        addEmploye() {
            try {
                let data = localStorage.getItem("employees")
                let employees = []
                data && (employees = JSON.parse(data))
                const id = employees.length > 0 ? employees.length + 1 : 1
                this.newEMpolye = { ...this.newEMpolye, id }
                if (employees.length > 0) {
                    employees.push(this.newEMpolye)
                    localStorage.setItem("employees", JSON.stringify(employees))
                } else {
                    localStorage.setItem("employees", JSON.stringify([this.newEMpolye]))
                }
                // retourner a la page d'acceuil apres ajout
                this.$router.push("/")
            } catch (error) {
                console.error("erreur lors du chargement", error)
            }
        }
    }
}
</script>
<style lang=""></style>

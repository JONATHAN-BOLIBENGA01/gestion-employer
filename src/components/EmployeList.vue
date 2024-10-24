<template lang="">
    <div class="col-lg-8 col-md-10 mx-auto shadow rounded p-3 mt-4">
        <h1 class="text-muted">Liste des employes</h1>
        <!-- afficher la liste de emploes ici -->
        <table v-if="employees.length > 0 " class="table table-stiped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>Titre</th>
                    <th>salaire</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employe in employees" :key="employe.id">
                    <td>{{employe.id}}</td>
                    <td>{{employe.nom}}</td>
                    <td>{{employe.prenom}}</td>
                    <td>{{employe.titre}}</td>
                    <td>{{employe.salaire}} $</td>
                     <td>
                        <span class="me-3">
                            <router-link :to="'/detail-employe/'+employe.id"  class="btn btn-primary mt-2">detail</router-link>
                        </span>

                        <span class="me-3">
                            <router-link :to="'/edit-employe/'+employe.id" class="btn btn-primary mt-2">modifier</router-link>
                        </span>
 
                        <button @click="deleteEmploye(employe.id)" class="btn btn-danger float-end btn-sm">Suprimer</button>
                     </td>

                </tr>
            </tbody>
        </table>
        <p v-else class="text-info h5">votre list d'employer est vide !</p>
        <router-link to="/add-employe" class="btn btn-primary mt-2">ajouter un nouvel employer </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            employees : [] // initialisation de la liste des employer
        }
    }, 

    methods: {
        fetchEmployes() {
            try {
                //localStorage.getItem pour recuperer les donnees de puis le localStorage
                const res = localStorage.getItem("employees")
                if (res) {
                    this.employees = JSON.parse(res)
                } else {
                    //localStorage.setItem pour mettre les donnees dans le localStorage
                    localStorage.setItem("employees", JSON.stringify(this.employees))
                }
            } catch (error) {
                console.error("Erreuur lors de la recuperation de ", error)
            }
        },
        deleteEmploye(employeeId) {
            if (confirm("etes-vous sur de vouloir suprimer cet employer  ?")) {
                try {
                    const employees = this.employees.filter((employee) => employee.id !== employeeId)
                    localStorage.setItem("employees", JSON.stringify(employees)) 
                    //actualisez la liste des employees apres supression
                    this.fetchEmployes()
                } catch (error) {
                    console.error("Erreuur lors de la supression d'un employer ", error)
                }
            }
        }
    },
    // le cycle de vie du component
    created() {
        // charger la liste des employees lors de la creation du composant
        this.fetchEmployes()
    }
}
</script>
<style lang="">

</style>
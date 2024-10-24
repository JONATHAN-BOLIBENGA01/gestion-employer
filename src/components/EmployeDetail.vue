<template lang="">
    <div class="col-lg-8 col-md-10 mx-auto shadow rounded p-3 mt-4">
     <h1 class="text-muted">
        detail de l'employes
     </h1>
     <div class="card">
        <div class="card-body">
        <h5 class="card-title">
            nom: {{employee.nom}} {{employee.prenom}}
        </h5>
        <p class="card-title">
            poste : {{employee.titre}}
        </p>
        <p class="card-title">
           salaire : {{employee.salaire}} $
        </p>
        <p class="card-title">
           date d'embauche :  {{employee.dateEmbauche}}
        </p>
        
     </div>
     </div>
    </div>
</template>
<script>
export default {
    props:['id'],
    data() {
        return {
           employe : null
        }
    },
    methods: {
        fetchEmployeDetail() {
            try {
                const data = localStorage.getItem("employees")
                this.employees = JSON.parse(data)
                this.employee = this.employees.find((emp) => emp.id == this.id)
            } catch (error) {
                console.error("erreur lors de la recuperation du detail de l'employer", error)
            }
        }
    },
    created(){
        this.fetchEmployeDetail()
    }
}
</script>
<style lang="">
    
</style>
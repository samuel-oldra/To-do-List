<template>
 <div class="home">
    <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
     class="pa-3"
            filled
            label="Adicione Tarefas"
            append-icon="mdi-plus"
            hide-details
            clearable
         ></v-text-field>
  
    <v-list class="pt-0" flat8>       
        <div
             v-for="task in tasks"
             :key="task.id"
           >
     <v-list-item
     @click="doneTask(task.id)"
     :class="{'teal lighten-4' : task.done}"
     >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
                
            <v-list-item-content>
            <v-list-item-title
             :class="{ 'text-decoration-line-through' : task.done }"
            
            >
              {{ task.title }}
              </v-list-item-title>
        
            </v-list-item-content>
          
           <v-list-item-action>
             <v-btn 
             @click.stop="deleteTask(task.id)" 
             icon
             >
            <v-icon color="primary grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
        
          </template>

         </v-list-item>
        <v-divider></v-divider>
        </div>
    </v-list>
  </div>
</template>

<script>
 
  export default {
    name: 'Home',
    data () {
      return {
        newTaskTitle: '',
       tasks: [
          {
            id:1,
            title: 'Acorde',
            done: false
         },
          {
            id:2,
            title: 'Faça um Café',
            done: false  
         },
          {
            id:3,
            title: 'Beba o Café',
            done: false
         },
           ]        
         }
       
      },
      methods: {
        addTask() {
          let newTask = {
            id: Date.now(),
             title: this.newTaskTitle,
             done: false          
          }
           this.tasks.push(newTask)
           this.newTaskTitle = ''
        },
       doneTask(id)  {
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done

       },
       deleteTask(id) {
         this.tasks= this.tasks.filter(task => task.id !== id)

       }

      }
    }

    
  
</script>

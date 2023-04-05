<template>
    <div class="container">

         <table class="table table-hover">
            <thead>
                <tr>
                    
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody v-for="contact in contacts" :key="contact.id">

                <tr class="table-secondary"></tr>
                
                <th scope="row">{{contact.name}}</th>
                <th scope="row">{{contact.email}}</th>
                <th scope="row">{{contact.designation}}</th>
                <th scope="row">{{contact.contact_no}}</th>
                <th scope="row"><router-link :to="{name:'EditContact',params:{id:contact.id}}" class="btn  btn-sm" >Edit</router-link></th>
                <!-- <th scope="row"><button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#editUserModal"  @click.prevent="editContact(contact.id)">Edit</button></th> -->
                <th scope="row"><button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal"  @click.prevent="deleteContact(contact.id)">Delete</button></th>
                 
            </tbody>
         </table>
         
    </div>
    <!-- Modal -->
<div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteUserModalLabel">Confirm Deletion!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Are You Sure you want to delete this user?</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button @click.prevent="confirmDelete" type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
 

import axios from 'axios';
export default{
  
    name:'ContactList',
    data(){
        return{
                contacts:Array,
                deletingContactId: null,
                editContactId:null
        }
    },
        created(){
         this.getContacts();
        },
        methods:{
            async getContacts(){
                let url='http://127.0.0.1:8000/api/contacts';
                await axios.get(url).then(response=>{
                     this.contacts=response.data.contacts;
                     console.log(this.contacts);
                }).catch(error =>{
                    console.log(error);
                });
            },

           

            async deleteContact(id){
                 this.deletingContactId = id;
                // await this.$modal.show('confirm-delete-modal');
                //  $('#deleteUserModal').modal('show');
                $('#deleteUserModal').modal('show');
                
            },

            async confirmDelete() {
                                let url = `http://127.0.0.1:8000/api/delete_contact/${this.deletingContactId}`;
                                await axios.delete(url).then(response => {
                                    if (response.data.code == 200) {
                                    
                                    this.getContacts();
                                    this.$toast.success("User deleted Successfully",{

                                        position:'bottom',

                                    });
                                    setTimeout(() =>{
                                        $('#deleteUserModal').hide();
                                        window.location.reload();
                                    },300); 
                                    }
                                }).catch(error => {
                                    console.log(error);
                                });
                              
                                
                                }

        
        },
        mounted(){
            console.log('contact list component mounted');
        }
    }


</script>
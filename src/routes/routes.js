import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import UserInfo from '../components/UserInfo';
import { createRouter, createWebHistory } from 'vue-router';

const routes=[
  {
    name:'UserInfo',
    path:'/',
    component:UserInfo

  },
    
    {


        name:'ContactList',
        path:'/contact_list',
        component:ContactList
  },
  {

    name:'AddContact',
    path:'/add_contacts',
    component:AddContact
  },
   {

    name:'EditContact',
   path:'/contact/edit/:id?',
   component:EditContact

   }

];

const router =createRouter({
   
    history:createWebHistory(),
    routes

})

export default router;
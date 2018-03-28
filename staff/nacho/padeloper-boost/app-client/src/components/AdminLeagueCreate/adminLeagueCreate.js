import React, {Component}from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import Form from './Form/form'
import swal from 'sweetalert2'
import api_client from 'api-client'

class AdminLeagueCreate extends Component{
        constructor(){
          super()
          this.state = {
            name:"",
            city:"",
            club:"",
            category:"1",
            type:"public",
            date:"",
            maxplayers:""
          }
        }

        createLeague = (e) => {
          e.preventDefault();
          const {name,city,club,type,category,date,maxplayers} = this.state
          api_client.registerLeague(this.props.userInfo._id,name,city,club,category,type,date,maxplayers)
            .then((data) => {
              if(data){
                swal({
                  type: 'success',
                  title: 'League created successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }else{
                swal({
                  type: 'error',
                  title: 'You should fill every input',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .catch(console.error)
            
        }


        keepInputName = (e) => {e.preventDefault(); this.setState({name:e.target.value})}
        keepInputCity = (e) => {e.preventDefault(); this.setState({city:e.target.value})}
        keepInputClub = (e) => {e.preventDefault(); this.setState({club:e.target.value})}
        keepInputCategory = (e) => {e.preventDefault(); this.setState({category:e.target.value})}
        keepInputType = (e) => {e.preventDefault(); this.setState({type:e.target.value})}
        keepInputDate = (e) => {e.preventDefault(); this.setState({date:e.target.value})}
        keepInputMaxPlayers = (e) => {e.preventDefault(); this.setState({maxplayers:e.target.value})}

        render(){
        return(
            <div className="wrapper">
        {/* Sidebar Holder */}
        <AdminSidebar userName = {this.props.userInfo}/>
        {/* Page Content Holder */}
        <div id="content">
          <AdminHeader />
          <div className="container">
            <div className="row">
                <h3 className ="title">Create League</h3>
                <p className = "text-explanation">
                    Create your league its so simple, just fill the form and submit it.
                    You can see your created leagues at the top panel by clicking in "my leagues".
                    By creating a league you are the admin of that league so you can remove players, generate and edit teams and matches.
                    
                </p>
            </div>
          </div>
        <div className="line" />
          <div className="row">
            

          <div className="col-xs-12">
          <Form 
              create = {this.createLeague}
              inputName = {this.keepInputName}
              inputCity = {this.keepInputCity}
              inputClub = {this.keepInputClub}
              inputCategory = {this.keepInputCategory}
              inputType = {this.keepInputType}
              inputDate = {this.keepInputDate}
              inputMaxPlayers = {this.keepInputMaxPlayers}
          />
          </div>
            
      
          </div>
        </div>
      </div>
        )
      }
    
}
export default AdminLeagueCreate
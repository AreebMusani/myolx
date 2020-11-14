import React,{useEffect,useState} from 'react'
import './itemDetails.css'
import Firebase from '../../Firebase'


class itemDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            isData: false
        }
        
    }
    componentDidMount(){
        const addid = this.props.match.params.id;
        Firebase.database().ref('posts/'+addid).once("value",(snapdata)=>{
            this.setState({
                data: snapdata.val(),
                isData: true 
            })
            console.log(this.state.data)
        }).catch(error=>{console.log(error)})
    }
    render(){
    return (
        <div className="container main">
            <div className="row item-detail">
                <div className="col-md-8 col-lg-8">
                    <div className="img">
                        <img src={this.state.data.imageURL} alt="ad-pic" />
                    </div>
                    <div className="div1 Details">
                        <h2>Details</h2>
                        <div className="Details-cont">
                            <div className="cont">
                                <p>Condition</p>
                                <p className="value">Used</p>
                            </div>
                            <div className="cont">
                                <p>Type</p>
                                <p className="value">{this.state.data.category}</p>
                            </div>
                        </div>
                        <div className="Des">
                            <h2>Description</h2>
                            <p>{this.state.data.description}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="div1">
                        <div className="flex">
                            <p className="price">{this.state.data.price}</p>
                            <div>
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <p className="title">{this.state.data.title}</p>
                        <div className="flex flex1">
                            <p>{this.state.data.location}</p>
                            <p>{this.state.data.published}</p>
                        </div>
                    </div>
                    <div className="div1 seller">
                        <p className="seller-des">Seller description</p>
                        <button>Chat with seller</button>
                        <div className="contact">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p>032616879</p>
                        </div>
                    </div>
                    <div className="div1 location1">
                        <h2>Posted in</h2>
                        <p>{this.state.data.location}</p>
                        <img src="https://maps.googleapis.com/maps/api/staticmap?center=33.148%2C73.752&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=5f2fvQmkDX5LClF9wkWwC9AxXek=" alt="google map" />
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default itemDetails
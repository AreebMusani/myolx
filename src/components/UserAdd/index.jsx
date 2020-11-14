import React, { useEffect } from 'react'
import { useState } from 'react'
import './UserAdd.css'
import Firebase from '../../Firebase'

const UserAdd = (props) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState();
    const [price, setPrice] = useState(0);
    const [imageurl, setImageurl] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        Firebase.auth().onAuthStateChanged(
            authUser => {
                if (!authUser) {
                    props.history.push("/");
                }
            },
        );
    })

    const nav = [
        { ID: 1, Label: "Mobile Phones" },
        { ID: 2, Label: "Cars" },
        { ID: 3, Label: "Motorcycles" },
        { ID: 4, Label: "Houses" },
        { ID: 5, Label: "TV-Video-Audio" },
        { ID: 6, Label: "Tablets" },
        { ID: 7, Label: "Land & Plots" },
    ]
    const Submit = () => {
        const storageRef = Firebase.storage().ref();
        const uploadTask = storageRef.child(`images/${imageurl.name}`).put(imageurl);
        uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, function (error) {
            console.log(error)
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                const userId = Firebase.auth().currentUser.uid;
                const currentDate = new Date().toString().split(' ').slice(1, 3).join(' ');
                const newPostKey = Firebase.database().ref().push().key;
                const postData = {
                    uid: newPostKey,
                    title: title,
                    price: price,
                    description: description,
                    location: location,
                    published: currentDate,
                    imageURL: downloadURL,
                    category: category
                }
                var updates = {};
                updates['posts/' + newPostKey] = postData;
                updates['user-posts/' + userId + '/' + newPostKey] = postData;
                Firebase.database().ref().update(updates).then(() => { alert("Item Created succeessfully") }).catch(error => { alert(error) });
            });
        });
    }

    // const Submit = () => {
    //     uploadImg();
    //     console.log(Downloadurl)
    //     //console.log(uploadImg());
    //     const userId = Firebase.auth().currentUser.uid;
    //     const currentDate = new Date().toString().split(' ').slice(1, 3).join(' ');
    //     const newPostKey = Firebase.database().ref().push().key;
    //     const postData = {
    //         uid: newPostKey,
    //         title: title,
    //         price: price,
    //         description: description,
    //         location: location,
    //         published: currentDate,
    //         imageURL: imageurl,
    //         category: category
    //     }
    //     var updates = {};
    //     updates['posts/' + newPostKey] = postData;
    //     updates['user-posts/' + userId + '/' + newPostKey] = postData;
    //     Firebase.database().ref().update(updates).then(() => { alert("Item Created succeessfully") }).catch(error => { alert(error) });
    // }
    return (
        <div className="PostAdd">
            <div className="img">
                <img src={require('../../Images/postimg.jpg')} />
                <h1>POST YOUR AD</h1>
            </div>
            <div className="PostForm">
                <div className="postItem">
                    <label>Item title</label>
                    <input type="text" placeholder="Title Name" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="postItem">
                    <label>Item Category</label>
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value="" selected="true" disabled="disabled">Select Category</option>
                        {nav.map(item => {
                            return (
                                <option>{item.Label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="postItem">
                    <label>Item Price</label>
                    <input type="text" placeholder="Item Price (in pkr)" onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="postItem">
                    <label>Item Image</label>
                    <input type="file" onChange={(e) => setImageurl(e.target.files[0])} />
                    {/* <input type="text" placeholder="Image URL" onChange={e=>setImageurl(e.target.value)}/> */}
                </div>
                <div className="postItem">
                    <label>Item Location</label>
                    <input type="text" placeholder="Your Location" onChange={e => setLocation(e.target.value)} />
                </div>
                <div className="postItem">
                    <label>Item Description</label>
                    <textarea cols="30" placeholder="Write Description about your item" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="postbtn">
                    <button className="load-btn" onClick={Submit}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default UserAdd
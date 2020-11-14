import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdItem from './AdItem'
import Firebase from '../Firebase'
import { configure } from '@testing-library/react'
function Home() {
    const [limit, SetLimit] = useState(12)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        if (loading) {
            let newList = [];
            for (let index = 0; index < 12; index++) {
                newList.push(<AdItem placeholder={true} />);
            }
            setList(newList);
            console.log(list)
        }

        Firebase.database().ref('/posts').limitToFirst(limit).once('value', (snapshot) => {
            const usersObject = snapshot.val();
            console.log(usersObject);
            console.log(Object.keys(usersObject));
            const post = Object.keys(usersObject)
            let array = [];
            snapshot.forEach((item) => {
                array.push(item.val());
            })
            console.log(array)
            setData(array)
            setLoading(false)
            // for(let i=0;i<post.length;i++){
            //     const dd = usersObject[i];
            //     console.log(post[i].title)
            // }
            // console.log(data)
            // post.map(key =>{
            //     console.log(usersObject[key]).title
            // })
            // ...usersObject[key],
            // uid: key,

            // setData(usersList);
            // setLoading(false)
            // console.log(list,data)
            // const datas = Object.values(datasnap.val());
            // console.log(datas);
            // const arr = [];

            // setList(array)
            // for (let i = 0; i < datas.length; i++) {
            //     console.log(datas[i]);
            //     arr.push(datas[i]);
            // }
            // console.log(Object.values(arr))
            // Object.keys(arr).map(function(key){console.log(arr[key])})

            // setData(arr)
            // console.log(data)
        })
        console.log(list, data)

    }, [limit])

    return (
        <>
            <div className="home-page">
                <div class="banner">
                    <img src={require('../Images/banner.JPG')} alt="Banner" />
                </div>
                <div><h2 className="item-head">Fresh recommendations</h2>
                <div className="item-container">
                    {loading ? list :
                        data.map((item, key) => {
                            return (
                                <AdItem
                                    userId={item.uid}
                                    price={item.price}
                                    title={item.title}
                                    location={item.location}
                                    URL={item.imageURL}
                                    description={item.description}
                                    published={item.published}
                                    category={item.category}
                                />
                            )
                        })
                    }
                </div></div>
                <div className="bttn">
                    <button onClick={() => { SetLimit(limit + 2) }} className="load-btn">Load more</button>
                </div>
            </div>
            <div className="home-ad">
                <div className="img">
                    <img src={require('../Images/app.png')} />
                </div>
                <div className="ad-2">
                    <h2>Try the olx app</h2>
                    <h3>Buy, sell and find just about anything using the app on your mobile.</h3>
                </div>
                <div className="ad-l"></div>
                <div className="ad-3">
                    <h2>Get your app today</h2>
                    <div className="ad-app">
                        <a href="//apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_black"><img src={require('../Images/appstore.png')} /></a>
                        <a href="//play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_black"><img src={require('../Images/playstore.png')} /></a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home

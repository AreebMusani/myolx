import React, { useEffect, useState } from 'react'
import AdItem from '../AdItem'
import Firebase from '../../Firebase'
import { useLocation } from 'react-router-dom'

const Category = (props) => {
    const [limit,SetLimit] = useState(12)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [url, setUrl] = useState(props.match.params.id)

    useEffect(() => {
        //setUrl(props.match.params.id)
        //console.log(props.match.params.id)
        //console.log(url)
        if (loading) {
            let newList = [];
            for (let index = 0; index < 12; index++) {
                newList.push(<AdItem placeholder={true} />);
            }
            setList(newList);
        }
        Firebase.database().ref('/posts').orderByChild("category").equalTo(props.match.params.id).limitToFirst(limit).on('value', (snapshot) => {
            //const usersObject = snapshot.val();
            //const post = Object.keys(usersObject)
            let array = [];
            snapshot.forEach((item)=>{
                array.push(item.val()); 
            })
            setData(array)
            setLoading(false)

        })
    }, [props.match.params.id])
    
    return (<>
        <div><h2 className="item-head">{props.match.params.id}</h2>
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
        </div>
        </div>
            </>
    )
}

export default Category

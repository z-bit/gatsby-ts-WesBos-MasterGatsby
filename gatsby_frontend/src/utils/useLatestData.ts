import { useState, useEffect } from 'react'



export default function useLatestState() {

    const gql = String.raw
    const name_id_pic = gql`
        name
        _id
        image {
            asset {
                url
                metadata {
                    lqip
                }
            }
        }
    `

    const [slicemasters, setSlicemasters] = useState([])
    const [hotSlices, setHotSlices] = useState([])

    useEffect( () => {
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: gql`
                    query {
                        StoreSettings(id: "downtown") {
                            name
                            slicemasters {
                                ${name_id_pic}
                            }
                            hotSlices {
                                ${name_id_pic}
                            }
                        }
                    } 
                `
            })    
        }).then(
            res => res.json()
        ).then(
            res => {
                setSlicemasters(res.data.StoreSettings.slicemasters)
                setHotSlices(res.data.StoreSettings.hotSlices)
            }
        )
        .catch(err => console.log('ERROR: ', err))
    }, [])
    return { slicemasters, hotSlices } 
}


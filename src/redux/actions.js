
import axios from 'axios';

 const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
})

export const fetchPosts =  () => {

    return async dispatch => {
        try {
            let posts = await axios.get('https://shopsmartcart.reflomsolutions.com/public/api_store')
            dispatch(fetchPostsSuccess(posts.data) )
        }
        catch(e){
            console.log(e)
        }
    }
}




export const fetchProductData =productData=>({
    type:'FETCH_PRODUCT_DATA',
    payload: {productData}
})



export const productdetailpage = () =>{

    return async dispatch =>{

        try{
            let productData = await axios.get('https://shopsmartcart.reflomsolutions.com/public/api_city')
            dispatch(fetchProductData(productData.data))
        }
        catch(e){
            console.log(e)
        }


    }


}
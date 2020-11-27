const posts = (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return action.payload.posts
        default:
            return state
    }
}


const productData=(state=[],action)=>{

    switch(action.type){
        case 'FETCH_PRODUCT_DATA':
            return action.payload.productData
        default:
            return state
    }



}

export default posts
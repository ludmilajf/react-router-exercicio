export function goToHomePage(navigate){
navigate('/')
}

export function goToProfilePage(navigate, name){
    navigate(`profile/${name}`)
}

export function goToIdPage(navigate, id){
    navigate(`/product/${id}`)
    }
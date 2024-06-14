export default function ProductReview({
    params, 
}: {
    params: {productId: string}
}){
    return (
        <>
            <h1>Main Review Page</h1>
            <h2>Details about Product {params.productId}</h2>
        </>
    )
}
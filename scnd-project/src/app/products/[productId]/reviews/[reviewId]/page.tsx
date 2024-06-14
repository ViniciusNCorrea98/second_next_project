export default function ProductReview({
    params, 
}: {
    params: {
        productId: string;
        reviewId: string;
    }
}){
    return (
        <>
            <h1>Details about Product {params.productId}</h1>
            <h2>about product Details about Product {params.reviewId}</h2>
        </>
    )
}
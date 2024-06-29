function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  console.log("🚀 ~ ReviewDetails ~ params:", params);

  return (
    <>
      <h1>
        review {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}
export default ReviewDetails;

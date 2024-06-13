import { useTopSeller } from "@/hooks/useHome";
import { Container, Spinner } from "react-bootstrap";
import TopSellerCard from "./TopSellerCard";

const TopSeller = () => {
    const { loading, topSellers } = useTopSeller();
    return (
        <>
            <div className="top-seller-block">
                <Container>
                    <div className="common-title-block text-center">
                        <h2>Top Collectors</h2>
                    </div>
                    {loading ? (
                        <>
                            <div className="d-flex justify-content-center">
                                <Spinner animation="border" size="lg" />
                            </div>
                        </>
                    ) : !topSellers?.length > 0 ? (
                        <>
                            {/* <div className="d-flex justify-content-center">
                                No Top seller Found!
                            </div> */}
                        </>
                    ) : (
                        <>
                            <div className="top-seller-block-main justify-content-center">
                                {topSellers?.map((user, index) => (
                                    <TopSellerCard
                                        key={user?._id}
                                        index={index}
                                        user={user}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </Container>
            </div>
        </>
    );
};

export default TopSeller;

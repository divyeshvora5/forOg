import { useOpenSeaListing } from "@/hooks/listingsHook";
import { ZeroAddress } from "ethers";



const opensea = () => {

    const { loading, isSupportedChain, fee, listOnOpenSea } = useOpenSeaListing();
   

    const createListing = async () => {

        await listOnOpenSea({
            itemCollection: '0xd40c3060460dcc19f3d281ad5a8e900c42542e00',
            tokenId: "1",
            price: "0.001",
            currency: ZeroAddress
        });
    }

    return (
        <>
         <button onClick={createListing}>listing</button>
         {isSupportedChain ? <p>supported</p> : <p>unsupported</p>}
         {loading && <p>Loading...</p>}
        </>
    )
}

export default opensea
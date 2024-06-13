const ShowRecoredCount = ({ page, data, count }) => {
	// console.log("ShowRecoredCount", { page, data, count });
	// const startingRecord =
	// 	page === 1 ? (page - 1) * data?.length : page * data?.length;
	// const lastRecord = startingRecord + data?.length;
	return `Showing ${0}–${data?.length} of ${count} results`;
};

export default ShowRecoredCount;

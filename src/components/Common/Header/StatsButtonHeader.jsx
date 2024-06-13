import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

const StatsButtonHeader = () => {
	const statsRef = useRef(null);
	const [active, setActive] = useState(false);
	const router = useRouter();

	const clickHandler = useCallback(() => {
		setActive(true);
		window.addEventListener("click", onClick);
	}, []);

	const onClick = useCallback((event) => {
		if (statsRef.current && !statsRef.current.contains(event.target)) {
			setActive(false);
			window.removeEventListener("click", onClick);
		}
	}, []);

	useEffect(() => {
		setActive(false);
	}, [router]);

	return (
    <>
      <div className='header-dropdown-block' onClick={clickHandler} ref={statsRef}>
        <div className='header-dropdown-block-link group'>
          <span>
            <p className="inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:!text-transparent group-hover:bg-clip-text">Stats</p>
            <svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_73_3456)'>
                <path
                  d='M5.32212 8.35018C5.1429 8.35018 4.9637 8.28175 4.82706 8.14518L0.527285 3.84536C0.253763 3.57184 0.253763 3.12837 0.527285 2.85496C0.800696 2.58155 1.24408 2.58155 1.51762 2.85496L5.32212 6.65968L9.12663 2.85509C9.40016 2.58168 9.84349 2.58168 10.1169 2.85509C10.3905 3.1285 10.3905 3.57197 10.1169 3.8455L5.81717 8.14531C5.68047 8.28191 5.50127 8.35018 5.32212 8.35018Z'
                  fill='#191820'
                />
              </g>
              <defs>
                <clipPath id='clip0_73_3456'>
                  <rect width='10' height='10' fill='white' transform='translate(0.322144 0.5)' />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        {active && (
          <div className={`header-dropdown-block-dropdown`}>
            {/* <Link href="/auctions">
                            <p>Auctions</p>
                        </Link> */}
            <Link href={PATH_DASHBOARD.stats.ranking}>
              <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.8333 3H4.16667C3.72464 3 3.30072 3.17559 2.98816 3.48816C2.67559 3.80072 2.5 4.22464 2.5 4.66667V16.3333C2.5 16.7754 2.67559 17.1993 2.98816 17.5118C3.30072 17.8244 3.72464 18 4.16667 18H15.8333C16.2754 18 16.6993 17.8244 17.0118 17.5118C17.3244 17.1993 17.5 16.7754 17.5 16.3333V4.66667C17.5 4.22464 17.3244 3.80072 17.0118 3.48816C16.6993 3.17559 16.2754 3 15.8333 3ZM15.8333 16.3333H4.16667V4.66667H15.8333V16.3333ZM7.5 14.6667H5.83333V10.5H7.5V14.6667ZM10.8333 14.6667H9.16667V6.33333H10.8333V14.6667ZM14.1667 14.6667H12.5V8.83333H14.1667V14.6667Z'
                  fill='black'
                />
              </svg>
              <p>Ranking</p>
            </Link>
            <Link href={PATH_DASHBOARD.stats.collectors}>
              <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.99992 10.4987C11.8416 10.4987 13.3333 9.00703 13.3333 7.16536C13.3333 5.3237 11.8416 3.83203 9.99992 3.83203C8.15825 3.83203 6.66659 5.3237 6.66659 7.16536C6.66659 9.00703 8.15825 10.4987 9.99992 10.4987ZM9.99992 12.1654C7.77492 12.1654 3.33325 13.282 3.33325 15.4987V16.332C3.33325 16.7904 3.70825 17.1654 4.16659 17.1654H15.8333C16.2916 17.1654 16.6666 16.7904 16.6666 16.332V15.4987C16.6666 13.282 12.2249 12.1654 9.99992 12.1654Z'
                  fill='black'
                />
              </svg>
              <p>Collectors</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default StatsButtonHeader;

import { motion } from "framer-motion";
import React, { useState } from "react";

import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";
import { useRouter } from "next/router";

const createNfts = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.49992 10.4987C7.94195 10.4987 8.36587 10.3231 8.67843 10.0105C8.99099 9.69798 9.16658 9.27406 9.16658 8.83203C9.16658 8.39 8.99099 7.96608 8.67843 7.65352C8.36587 7.34096 7.94195 7.16536 7.49992 7.16536C7.05789 7.16536 6.63397 7.34096 6.32141 7.65352C6.00885 7.96608 5.83325 8.39 5.83325 8.83203C5.83325 9.27406 6.00885 9.69798 6.32141 10.0105C6.63397 10.3231 7.05789 10.4987 7.49992 10.4987ZM9.99992 1.33203L17.9166 5.91536V15.082L9.99992 19.6654L2.08325 15.082V5.91536L9.99992 1.33203ZM3.74992 6.8762V14.1212L5.72659 15.2654L12.4541 10.332L16.2499 12.6104V6.87703L9.99992 3.25703L3.74992 6.8762Z"
            fill="black"
        />
    </svg>
);

const createCollections = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.56748 3.15221C3.17104 3.25839 2.7994 3.44162 2.47377 3.69145C2.14815 3.94127 1.87493 4.25279 1.66971 4.60821C1.46448 4.96363 1.33128 5.356 1.27771 5.7629C1.22414 6.16981 1.25125 6.58328 1.35748 6.97971L2.64998 11.8097C2.85387 12.5715 3.33821 13.228 4.00588 13.6476C4.67355 14.0672 5.47517 14.2189 6.24998 14.0722V10.501C6.24998 9.5064 6.64507 8.55257 7.34833 7.84931C8.05159 7.14605 9.00542 6.75096 9.99998 6.75096H12.9425L12.225 4.06846C12.1188 3.67202 11.9356 3.30037 11.6857 2.97475C11.4359 2.64913 11.1244 2.3759 10.769 2.17068C10.4136 1.96546 10.0212 1.83226 9.61429 1.77869C9.20738 1.72512 8.79391 1.75222 8.39748 1.85846L3.56748 3.15096V3.15221ZM7.49998 10.501C7.49998 9.83792 7.76337 9.20203 8.23221 8.73319C8.70106 8.26435 9.33694 8.00096 9.99998 8.00096H16.25C16.913 8.00096 17.5489 8.26435 18.0177 8.73319C18.4866 9.20203 18.75 9.83792 18.75 10.501V16.751C18.75 17.414 18.4866 18.0499 18.0177 18.5187C17.5489 18.9876 16.913 19.251 16.25 19.251H9.99998C9.33694 19.251 8.70106 18.9876 8.23221 18.5187C7.76337 18.0499 7.49998 17.414 7.49998 16.751V10.501ZM13.125 10.501C12.9592 10.501 12.8003 10.5668 12.683 10.684C12.5658 10.8012 12.5 10.9602 12.5 11.126V13.001H10.625C10.4592 13.001 10.3003 13.0668 10.183 13.184C10.0658 13.3012 9.99998 13.4602 9.99998 13.626C9.99998 13.7917 10.0658 13.9507 10.183 14.0679C10.3003 14.1851 10.4592 14.251 10.625 14.251H12.5V16.126C12.5 16.2917 12.5658 16.4507 12.683 16.5679C12.8003 16.6851 12.9592 16.751 13.125 16.751C13.2907 16.751 13.4497 16.6851 13.5669 16.5679C13.6841 16.4507 13.75 16.2917 13.75 16.126V14.251H15.625C15.7907 14.251 15.9497 14.1851 16.0669 14.0679C16.1841 13.9507 16.25 13.7917 16.25 13.626C16.25 13.4602 16.1841 13.3012 16.0669 13.184C15.9497 13.0668 15.7907 13.001 15.625 13.001H13.75V11.126C13.75 10.9602 13.6841 10.8012 13.5669 10.684C13.4497 10.5668 13.2907 10.501 13.125 10.501Z"
            fill="black"
        />
    </svg>
);

const createImports = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.56748 3.15221C3.17104 3.25839 2.7994 3.44162 2.47377 3.69145C2.14815 3.94127 1.87493 4.25279 1.66971 4.60821C1.46448 4.96363 1.33128 5.356 1.27771 5.7629C1.22414 6.16981 1.25125 6.58328 1.35748 6.97971L2.64998 11.8097C2.85387 12.5715 3.33821 13.228 4.00588 13.6476C4.67355 14.0672 5.47517 14.2189 6.24998 14.0722V10.501C6.24998 9.5064 6.64507 8.55257 7.34833 7.84931C8.05159 7.14605 9.00542 6.75096 9.99998 6.75096H12.9425L12.225 4.06846C12.1188 3.67202 11.9356 3.30037 11.6857 2.97475C11.4359 2.64913 11.1244 2.3759 10.769 2.17068C10.4136 1.96546 10.0212 1.83226 9.61429 1.77869C9.20738 1.72512 8.79391 1.75222 8.39748 1.85846L3.56748 3.15096V3.15221ZM7.49998 10.501C7.49998 9.83792 7.76337 9.20203 8.23221 8.73319C8.70106 8.26435 9.33694 8.00096 9.99998 8.00096H16.25C16.913 8.00096 17.5489 8.26435 18.0177 8.73319C18.4866 9.20203 18.75 9.83792 18.75 10.501V16.751C18.75 17.414 18.4866 18.0499 18.0177 18.5187C17.5489 18.9876 16.913 19.251 16.25 19.251H9.99998C9.33694 19.251 8.70106 18.9876 8.23221 18.5187C7.76337 18.0499 7.49998 17.414 7.49998 16.751V10.501ZM13.125 10.501C12.9592 10.501 12.8003 10.5668 12.683 10.684C12.5658 10.8012 12.5 10.9602 12.5 11.126V13.001H10.625C10.4592 13.001 10.3003 13.0668 10.183 13.184C10.0658 13.3012 9.99998 13.4602 9.99998 13.626C9.99998 13.7917 10.0658 13.9507 10.183 14.0679C10.3003 14.1851 10.4592 14.251 10.625 14.251H12.5V16.126C12.5 16.2917 12.5658 16.4507 12.683 16.5679C12.8003 16.6851 12.9592 16.751 13.125 16.751C13.2907 16.751 13.4497 16.6851 13.5669 16.5679C13.6841 16.4507 13.75 16.2917 13.75 16.126V14.251H15.625C15.7907 14.251 15.9497 14.1851 16.0669 14.0679C16.1841 13.9507 16.25 13.7917 16.25 13.626C16.25 13.4602 16.1841 13.3012 16.0669 13.184C15.9497 13.0668 15.7907 13.001 15.625 13.001H13.75V11.126C13.75 10.9602 13.6841 10.8012 13.5669 10.684C13.4497 10.5668 13.2907 10.501 13.125 10.501Z"
            fill="black"
        />
    </svg>
);

const createHypercubes = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.2227 5.82414C17.2462 5.81038 17.2658 5.79068 17.2794 5.767C17.293 5.74332 17.3002 5.71649 17.3002 5.68918C17.3002 5.66188 17.293 5.63505 17.2794 5.61137C17.2658 5.58769 17.2462 5.56798 17.2227 5.55422L11.2563 2.08782C10.8745 1.86653 10.4411 1.75 9.99981 1.75C9.55855 1.75 9.12512 1.86653 8.74336 2.08782L2.77813 5.55422C2.75454 5.56798 2.73497 5.58769 2.72137 5.61137C2.70777 5.63505 2.70062 5.66188 2.70062 5.68918C2.70062 5.71649 2.70777 5.74332 2.72137 5.767C2.73497 5.79068 2.75454 5.81038 2.77813 5.82414L9.92188 10.0265C9.94591 10.0406 9.97329 10.0481 10.0012 10.0481C10.0291 10.0481 10.0564 10.0406 10.0805 10.0265L17.2227 5.82414ZM2.10938 6.88703C2.08555 6.87328 2.05851 6.86606 2.031 6.8661C2.00349 6.86614 1.97647 6.87345 1.95269 6.88729C1.9289 6.90112 1.9092 6.92099 1.89556 6.94488C1.88191 6.96878 1.87482 6.99585 1.875 7.02336V13.8159C1.87559 14.1433 1.96187 14.4648 2.12524 14.7484C2.28862 15.032 2.52341 15.268 2.80625 15.4327L9.14063 19.2308C9.16437 19.2445 9.1913 19.2517 9.21871 19.2517C9.24613 19.2517 9.27306 19.2445 9.29681 19.2308C9.32056 19.2171 9.34028 19.1974 9.35401 19.1737C9.36774 19.15 9.37498 19.123 9.375 19.0956V11.2148C9.37498 11.1874 9.36774 11.1605 9.35403 11.1367C9.34032 11.113 9.32061 11.0933 9.29688 11.0796L2.10938 6.88703ZM10.625 11.2421V19.0937C10.625 19.1211 10.6323 19.148 10.646 19.1717C10.6597 19.1955 10.6794 19.2152 10.7032 19.2289C10.7269 19.2426 10.7539 19.2498 10.7813 19.2498C10.8087 19.2498 10.8356 19.2425 10.8594 19.2288L17.1934 15.4308C17.476 15.2662 17.7107 15.0306 17.8741 14.7474C18.0375 14.4641 18.124 14.143 18.125 13.8159V7.02336C18.1249 6.99598 18.1176 6.96911 18.1039 6.94543C18.0901 6.92175 18.0704 6.90211 18.0466 6.88846C18.0229 6.87481 17.996 6.86764 17.9686 6.86766C17.9412 6.86769 17.9143 6.87491 17.8906 6.8886L10.7031 11.1073C10.6795 11.121 10.6598 11.1407 10.6461 11.1643C10.6324 11.1879 10.6251 11.2148 10.625 11.2421Z"
            fill="black"
        />
    </svg>
);

const exploreAuctions = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_599_9677)">
            <path
                d="M2.23832 9.21882C2.0448 9.41228 1.8913 9.64197 1.78657 9.89477C1.68183 10.1476 1.62793 10.4185 1.62793 10.6922C1.62793 10.9658 1.68183 11.2367 1.78657 11.4895C1.8913 11.7423 2.0448 11.972 2.23832 12.1655L4.59582 14.5222C4.93427 14.8606 5.37893 15.0722 5.85504 15.1213C6.33115 15.1705 6.80966 15.0542 7.21011 14.792C7.61055 14.5298 7.90851 14.1378 8.05388 13.6818C8.19925 13.2257 8.18316 12.7335 8.00832 12.288L8.66748 11.6288L14.0067 17.7888C14.216 18.0302 14.4729 18.2258 14.7612 18.3636C15.0495 18.5014 15.363 18.5783 15.6824 18.5896C16.0017 18.6009 16.3199 18.5464 16.6173 18.4294C16.9146 18.3123 17.1846 18.1353 17.4106 17.9094C17.6365 17.6834 17.8135 17.4134 17.9305 17.1161C18.0476 16.8188 18.1021 16.5005 18.0908 16.1812C18.0795 15.8619 18.0026 15.5483 17.8648 15.26C17.727 14.9717 17.5313 14.7149 17.29 14.5055L11.13 9.16632L11.7892 8.50799C12.2349 8.68325 12.7273 8.6996 13.1837 8.55428C13.6401 8.40896 14.0324 8.11084 14.2947 7.71012C14.557 7.30939 14.6732 6.83054 14.6238 6.35416C14.5743 5.87779 14.3623 5.43299 14.0233 5.09465L11.6667 2.73715C11.3282 2.3987 10.8835 2.18712 10.4074 2.13797C9.93132 2.08882 9.45281 2.20511 9.05236 2.46729C8.65192 2.72946 8.35395 3.12153 8.20859 3.57755C8.06322 4.03358 8.07931 4.52576 8.25415 4.97132L4.47332 8.75215C4.09579 8.60394 3.68321 8.56915 3.2862 8.65205C2.88918 8.73495 2.525 8.93192 2.23832 9.21882Z"
                fill="black"
            />
        </g>
        <defs>
            <clipPath id="clip0_599_9677">
                <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

const statsRanking = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.8333 3H4.16667C3.72464 3 3.30072 3.17559 2.98816 3.48816C2.67559 3.80072 2.5 4.22464 2.5 4.66667V16.3333C2.5 16.7754 2.67559 17.1993 2.98816 17.5118C3.30072 17.8244 3.72464 18 4.16667 18H15.8333C16.2754 18 16.6993 17.8244 17.0118 17.5118C17.3244 17.1993 17.5 16.7754 17.5 16.3333V4.66667C17.5 4.22464 17.3244 3.80072 17.0118 3.48816C16.6993 3.17559 16.2754 3 15.8333 3ZM15.8333 16.3333H4.16667V4.66667H15.8333V16.3333ZM7.5 14.6667H5.83333V10.5H7.5V14.6667ZM10.8333 14.6667H9.16667V6.33333H10.8333V14.6667ZM14.1667 14.6667H12.5V8.83333H14.1667V14.6667Z"
            fill="black"
        />
    </svg>
);

const statsCollectors = (
    <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.99992 10.4987C11.8416 10.4987 13.3333 9.00703 13.3333 7.16536C13.3333 5.3237 11.8416 3.83203 9.99992 3.83203C8.15825 3.83203 6.66659 5.3237 6.66659 7.16536C6.66659 9.00703 8.15825 10.4987 9.99992 10.4987ZM9.99992 12.1654C7.77492 12.1654 3.33325 13.282 3.33325 15.4987V16.332C3.33325 16.7904 3.70825 17.1654 4.16659 17.1654H15.8333C16.2916 17.1654 16.6666 16.7904 16.6666 16.332V15.4987C16.6666 13.282 12.2249 12.1654 9.99992 12.1654Z"
            fill="black"
        />
    </svg>
);

const rewards = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.74935 1.66663C2.59935 1.66663 1.66602 2.59996 1.66602 3.74996V5.68663C1.66646 6.13219 1.78598 6.56954 2.01219 6.95341C2.23841 7.33728 2.56311 7.65371 2.95268 7.86996L7.74602 10.535C6.74201 11.0418 5.93822 11.8724 5.4645 12.8924C4.99079 13.9125 4.87482 15.0625 5.13533 16.1566C5.39585 17.2507 6.01763 18.225 6.90022 18.9221C7.78281 19.6192 8.87466 19.9984 9.99935 19.9984C11.124 19.9984 12.2159 19.6192 13.0985 18.9221C13.9811 18.225 14.6028 17.2507 14.8634 16.1566C15.1239 15.0625 15.0079 13.9125 14.5342 12.8924C14.0605 11.8724 13.2567 11.0418 12.2527 10.535L17.0477 7.87163C17.4372 7.65502 17.7617 7.33823 17.9876 6.95406C18.2136 6.56989 18.3327 6.13231 18.3327 5.68663V3.74996C18.3327 2.59996 17.3993 1.66663 16.2493 1.66663H3.74935ZM8.33268 8.95329V3.33329H11.666V8.95329L9.99935 9.87996L8.33268 8.95329ZM13.3327 15C13.3327 15.884 12.9815 16.7319 12.3564 17.357C11.7312 17.9821 10.8834 18.3333 9.99935 18.3333C9.11529 18.3333 8.26745 17.9821 7.64233 17.357C7.0172 16.7319 6.66602 15.884 6.66602 15C6.66602 14.1159 7.0172 13.2681 7.64233 12.6429C8.26745 12.0178 9.11529 11.6666 9.99935 11.6666C10.8834 11.6666 11.7312 12.0178 12.3564 12.6429C12.9815 13.2681 13.3327 14.1159 13.3327 15Z"
            fill="black"
        />
    </svg>
);

const leaderBoard = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.14258 16.6667V8.33337H6.60341V16.6667H3.14258ZM8.10924 16.6667V3.33337H11.8926V16.6667H8.10924ZM13.3984 16.6667V10H16.8601V16.6667H13.3984Z"
            fill="black"
        />
    </svg>
);

const achievements = (
    <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.2507 1.66663C13.5382 1.66663 12.6673 2.49996 12.6673 3.33329H6.33398C6.33398 2.49996 5.46315 1.66663 4.75065 1.66663H1.58398V9.16663C1.58398 9.99996 2.37565 10.8333 3.16732 10.8333H4.90898C5.22565 12.5 6.25482 13.9166 8.70898 14.1666V15.9C6.33398 16.2833 6.33398 18.3333 6.33398 18.3333H12.6673C12.6673 18.3333 12.6673 16.2833 10.2923 15.9V14.1666C12.7465 13.9166 13.7757 12.5 14.0923 10.8333H15.834C16.6257 10.8333 17.4173 9.99996 17.4173 9.16663V1.66663H14.2507ZM4.75065 9.16663H3.16732V3.33329H4.75065V9.16663ZM15.834 9.16663H14.2507V3.33329H15.834V9.16663Z"
            fill="black"
        />
    </svg>
);

const unlock = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.99935 13.3333C10.4596 13.3333 10.8327 12.9602 10.8327 12.5C10.8327 12.0397 10.4596 11.6666 9.99935 11.6666C9.53911 11.6666 9.16602 12.0397 9.16602 12.5C9.16602 12.9602 9.53911 13.3333 9.99935 13.3333Z"
            fill="url(#paint0_linear_8282_16176)"
        />
        <path
            d="M14.1673 6.66663H8.33398V4.99996C8.33398 4.55793 8.50958 4.13401 8.82214 3.82145C9.1347 3.50889 9.55862 3.33329 10.0007 3.33329C10.4427 3.33329 10.8666 3.50889 11.1792 3.82145C11.4917 4.13401 11.6673 4.55793 11.6673 4.99996C11.6673 5.22097 11.7551 5.43293 11.9114 5.58921C12.0677 5.74549 12.2796 5.83329 12.5007 5.83329C12.7217 5.83329 12.9336 5.74549 13.0899 5.58921C13.2462 5.43293 13.334 5.22097 13.334 4.99996C13.334 4.1159 12.9828 3.26806 12.3577 2.64294C11.7326 2.01782 10.8847 1.66663 10.0007 1.66663C9.1166 1.66663 8.26875 2.01782 7.64363 2.64294C7.01851 3.26806 6.66732 4.1159 6.66732 4.99996V6.66663H5.83398C5.17094 6.66663 4.53506 6.93002 4.06622 7.39886C3.59738 7.8677 3.33398 8.50358 3.33398 9.16663V15.8333C3.33398 16.4963 3.59738 17.1322 4.06622 17.6011C4.53506 18.0699 5.17094 18.3333 5.83398 18.3333H14.1673C14.8304 18.3333 15.4662 18.0699 15.9351 17.6011C16.4039 17.1322 16.6673 16.4963 16.6673 15.8333V9.16663C16.6673 8.50358 16.4039 7.8677 15.9351 7.39886C15.4662 6.93002 14.8304 6.66663 14.1673 6.66663ZM10.0007 15C9.5062 15 9.02285 14.8533 8.61173 14.5786C8.2006 14.3039 7.88017 13.9135 7.69095 13.4567C7.50173 12.9999 7.45222 12.4972 7.54869 12.0122C7.64515 11.5273 7.88325 11.0818 8.23288 10.7322C8.58251 10.3826 9.02797 10.1445 9.51293 10.048C9.99788 9.95153 10.5005 10.001 10.9574 10.1903C11.4142 10.3795 11.8046 10.6999 12.0793 11.111C12.354 11.5222 12.5007 12.0055 12.5007 12.5C12.5007 13.163 12.2373 13.7989 11.7684 14.2677C11.2996 14.7366 10.6637 15 10.0007 15Z"
            fill="black"
        />
        {/* fill="url(#paint1_linear_8282_16176)"/> */}
        <defs>
            {/* <linearGradient id="paint0_linear_8282_16176" x1="8.84901" y1="12.5" x2="11.1881" y2="12.51" gradientUnits="userSpaceOnUse">
<stop stop-color="#2BD7EF"/>
<stop offset="1" stop-color="#FB4EF1"/>
</linearGradient>
<linearGradient id="paint1_linear_8282_16176" x1="0.797961" y1="9.99996" x2="19.5105" y2="10.0645" gradientUnits="userSpaceOnUse">
<stop stop-color="#2BD7EF"/>
<stop offset="1" stop-color="#FB4EF1"/>
</linearGradient> */}
        </defs>
    </svg>
);

const Underline = () => (
    <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#2BD7EF] via-indigo-400 to-[#FB4EF1]"
        layoutId="underline"
        layout
    ></motion.div>
);

const DesktopMenu = () => {
    const router = useRouter();

    const handleFeedRoute = () => {
        router.push(PATH_DASHBOARD.feed.root);
    };

    return (
        <div className="">
            <motion.div className="px-0 py-2 flex justify-center flex-col md:flex-row">
                <MenuItem text={"Create"}>
                    <SubItem
                        title="Collectibles"
                        path={PATH_DASHBOARD.create.nfts}
                        icon={createNfts}
                    />
                    <SubItem
                        title="Collections"
                        path={PATH_DASHBOARD.create.collection}
                        icon={createCollections}
                    />
                    <SubItem
                        title="Import"
                        path={PATH_DASHBOARD.create.importCollection}
                        icon={createImports}
                    />
                    {/* <SubItem title="Hypercubes" path={""} icon={createHypercubes} /> */}
                </MenuItem>

                <MenuItem text={"Explore"}>
                    <SubItem
                        title="Collectibles"
                        path={PATH_DASHBOARD.explore.nfts}
                        icon={createNfts}
                    />
                    <SubItem
                        title="Collections"
                        path={PATH_DASHBOARD.explore.collectionRoot}
                        icon={createCollections}
                    />
                    <SubItem
                        title="Auctions"
                        path={PATH_DASHBOARD.explore.auctions}
                        icon={exploreAuctions}
                    />
                </MenuItem>

                <MenuItem text={"Stats"}>
                    <SubItem
                        title="Ranking"
                        path={PATH_DASHBOARD.stats.ranking}
                        icon={statsRanking}
                    />
                    <SubItem
                        title="Collectors"
                        path={PATH_DASHBOARD.stats.collectors}
                        icon={statsCollectors}
                    />
                </MenuItem>

                <MenuItem text={"Rewards"}>
                    <SubItem
                        title="Rewards"
                        path={PATH_DASHBOARD.rewards.root}
                        icon={rewards}
                    />
                    <SubItem
                        title="Leaderboard"
                        path={PATH_DASHBOARD.rewards.leaderBoard}
                        icon={leaderBoard}
                    />
                    <SubItem
                        title="Achievements"
                        path={PATH_DASHBOARD.rewards.achievements}
                        icon={achievements}
                    />
                    <SubItem
                        title="Unlock TesseractX"
                        path={PATH_DASHBOARD.rewards.membership}
                        icon={unlock}
                    />
                </MenuItem>
                <MenuItem
                    text={"Feed"}
                    ddSvg={false}
                    clickHandler={handleFeedRoute}
                >
                    {/* <SubItem title="Rewards" path={PATH_DASHBOARD.rewards.root} icon={rewards}/>
          <SubItem title="Leaderboard" path={PATH_DASHBOARD.rewards.leaderBoard}  icon={leaderBoard}/>
          <SubItem title="Achievements" path={PATH_DASHBOARD.rewards.achievements}  icon={achievements}/>
          <SubItem title="Unlock TesseractX" path={PATH_DASHBOARD.rewards.membership}  icon={unlock}/> */}
                </MenuItem>
            </motion.div>
        </div>
    );
};

const MenuItemVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const MenuItem = ({
    text,
    ddSvg = true,
    clickHandler = () => {},
    children,
    ...props
}) => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);

    return (
        <motion.div
            className="relative group cursor-pointer px-3 lg:px-6"
            onHoverStart={() => setIsBeingHovered(true)}
            onHoverEnd={() => setIsBeingHovered(false)}
            onClick={clickHandler}
        >
            <span className="flex items-center justify-center space-x-2">
                <p className="relative inline-block text-lg font-bold group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:!text-transparent group-hover:bg-clip-text">
                    {text}
                    {/* {isBeingHovered && <Underline />} */}
                </p>
                {ddSvg ? (
                    <svg
                        className="svg-dark-mode"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_73_3456)">
                            <path
                                d="M5.32212 8.35018C5.1429 8.35018 4.9637 8.28175 4.82706 8.14518L0.527285 3.84536C0.253763 3.57184 0.253763 3.12837 0.527285 2.85496C0.800696 2.58155 1.24408 2.58155 1.51762 2.85496L5.32212 6.65968L9.12663 2.85509C9.40016 2.58168 9.84349 2.58168 10.1169 2.85509C10.3905 3.1285 10.3905 3.57197 10.1169 3.8455L5.81717 8.14531C5.68047 8.28191 5.50127 8.35018 5.32212 8.35018Z"
                                fill="#191820"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_73_3456">
                                <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(0.322144 0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                ) : null}
            </span>

            {isBeingHovered && ddSvg && (
                <div className="py-0 min-w-max desktop_menu_item">
                    <motion.div
                        {...props}
                        layoutId="menu"
                        className="absolute border border-1 shadow-lg bg-white rounded-xl overflow-hidden left-0 z-40 min-w-[10rem]"
                        variants={MenuItemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

const SubItemVariants = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const SubItem = ({ title, icon, path }) => {
    return (
        <motion.div
            className="cursor-pointer min-w-max"
            layout
            variants={SubItemVariants}
        >
            <Link href={path}>
                <div className="flex items-center justify-start hover:bg-blue-300 py-3 px-[1.25rem] w-full">
                    <div className="flex space-x-2">
                        {icon || ""}
                        <p className="desktop_menu_text font-semibold text-gray-900 text-base">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default DesktopMenu;

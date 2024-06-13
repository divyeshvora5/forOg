/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { CommonProductBLock } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Select from "react-select";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
const profilepage = () => {
    const options = [
        { value: "chocolate", label: "Ethereum (ETH)" },
        { value: "strawberry", label: "PulseChain (PLS)" },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CommonPageBlockPad>
            <Container>
                <div className="graphics-inner-diff diff-img-graphics">
                    {/* <img
                        src={"../../images/graphics-img-ranking.svg"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-two diff-ranking">
                    {/* <img
                        src={"../../images/graphics-block-inner-2.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="common-title-page text-center-space">
                    <h1>Popular Collections</h1>
                </div>
                <div className="search-select">
                    <div className="search-box-inner">
                        <form>
                            <div className="search-box-form">
                                <input
                                    type="text"
                                    name="GlobalSearch"
                                    autoComplete="off"
                                    placeholder="Search items, collections, and accounts"
                                />
                                <button>
                                    <img
                                        src="../../images/search-icon-input.svg"
                                        alt="search-icon"
                                    ></img>
                                </button>
                            </div>
                        </form>
                    </div>
                    <Select
                        name="colors"
                        options={options}
                        className="TX-select2-wrapper"
                        classNamePrefix="TX-fix-select"
                    />
                </div>
                <div className="ranking-table-block">
                    <div className="ranking-table-block">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Collection</th>
                                    <th>Floor</th>
                                    <th>24h Vol</th>
                                    <th>24h % Vol</th>
                                    <th>Sales</th>
                                    <th>Total Vol</th>
                                    <th>Owners</th>
                                    <th>Supply</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3 className="flex-reward">
                                                Abstraction{" "}
                                                <div className="reward-block">
                                                    <svg
                                                        width="11"
                                                        height="10"
                                                        viewBox="0 0 11 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x="5.65674"
                                                            y="0.757964"
                                                            width="6"
                                                            height="6"
                                                            rx="1"
                                                            transform="rotate(45 5.65674 0.757964)"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </svg>
                                                    <span>Rewards</span>
                                                </div>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="red-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3 className="flex-reward">
                                                Abstraction{" "}
                                                <div className="reward-block">
                                                    <svg
                                                        width="11"
                                                        height="10"
                                                        viewBox="0 0 11 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x="5.65674"
                                                            y="0.757964"
                                                            width="6"
                                                            height="6"
                                                            rx="1"
                                                            transform="rotate(45 5.65674 0.757964)"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </svg>
                                                    <span>Rewards</span>
                                                </div>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="red-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3 className="flex-reward">
                                                Abstraction{" "}
                                                <div className="reward-block">
                                                    <svg
                                                        width="11"
                                                        height="10"
                                                        viewBox="0 0 11 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x="5.65674"
                                                            y="0.757964"
                                                            width="6"
                                                            height="6"
                                                            rx="1"
                                                            transform="rotate(45 5.65674 0.757964)"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </svg>
                                                    <span>Rewards</span>
                                                </div>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="red-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3 className="flex-reward">
                                                Abstraction{" "}
                                                <div className="reward-block">
                                                    <svg
                                                        width="11"
                                                        height="10"
                                                        viewBox="0 0 11 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect
                                                            x="5.65674"
                                                            y="0.757964"
                                                            width="6"
                                                            height="6"
                                                            rx="1"
                                                            transform="rotate(45 5.65674 0.757964)"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </svg>
                                                    <span>Rewards</span>
                                                </div>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="green-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="collection-name">
                                            <div className="collection-profile">
                                                <img
                                                    src={
                                                        "../../images/collection-img.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="verify-dots">
                                                    <img
                                                        src={
                                                            "../../images/check-verify-img.svg"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>102.53</td>
                                    <td>23.7K</td>
                                    <td className="red-text">+3456%</td>
                                    <td>226</td>
                                    <td>
                                        <div className="total-volume-block">
                                            <img
                                                src={
                                                    "../../images/icon-total-table.png"
                                                }
                                                alt="icon-img"
                                            ></img>
                                            <p>2M</p>
                                        </div>
                                    </td>
                                    <td>3.3k</td>
                                    <td>23k</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </CommonPageBlockPad>
    );
};

export default profilepage;

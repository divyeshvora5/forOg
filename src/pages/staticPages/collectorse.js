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
                {/* <div className='common-title-page'>
          <h1>Collectors</h1>
        </div> */}
                <div className="ranking-table-block">
                    <div className="ranking-table-block">
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Collection</th>
                                    <th>Volume</th>
                                    <th>Buy</th>
                                    <th>Sell</th>
                                    <th>Trade</th>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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
                                                            "../../images/check-verfy.png"
                                                        }
                                                        alt="check-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <h3>Abstraction</h3>
                                        </div>
                                    </td>
                                    <td>12,4353</td>
                                    <td>345</td>
                                    <td>34</td>
                                    <td>454</td>
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

"use client";
import {
  CartLink,
  LineItemsContainer,
  LineItemsCount,
} from "@commercelayer/react-components";
import Image from "next/image";

function Header(props) {
    return (
        <header id="header">
        <div id="left">
            <Image 
                src="/metrolinx_logo.png"
                width={200}
                height={80}
                alt="Metrolinx"
            />
        </div>
        <div id="right">
                <CartLink className="btn btn-dark rounded-pill px-3" label={props.cartLabel} />&nbsp;
                <LineItemsContainer>
                    <LineItemsCount className="btn btn-dark rounded-pill px-3" />
                </LineItemsContainer>
        </div>
    </header>
  );
}

export default Header;

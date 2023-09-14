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
                src="/commercelayer_glyph_black.png"
                width={180}
                height={80}
                alt="Commerce Layer + Jakala"
            />
        </div>
        <div id="right">
                <CartLink className="btn btn-light rounded-pill px-3" label={props.cartLabel} />&nbsp;
                <LineItemsContainer>
                    <LineItemsCount className="btn btn-dark rounded-pill px-3" />
                </LineItemsContainer>
        </div>
    </header>
  );
}

export default Header;
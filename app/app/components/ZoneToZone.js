'use client'
import { useState } from "react";
import styles from "../styles/productGrid.module.css";
import useCommerceLayer from "@commercelayer/react-components/hooks/useCommerceLayer";
import { useOrderContainer } from "@commercelayer/react-components";
import Button from 'react-bootstrap/Button';

function ZoneToZone(props){
    const { sdkClient } = useCommerceLayer()
    
    const [zStart, setZStart] = useState(1)
    const [zEnd, setZEnd] = useState(1)
    
    const {order,reloadOrder} = useOrderContainer();

    const calculateFare = () => {
        console.log("calculating cost from " + zStart + " to " + zEnd);
        sdkClient().line_items.create({
            quantity: 1,
            sku_code: "ZONETICKET",
            order: sdkClient().orders.relationship(order.id),
            metadata: {
                "zoneStart": zStart, 
                "zoneEnd": zEnd
            },
            _external_price: true
        }).then(reloadOrder());
        
    }

    const handleChange = (event) => {
        switch (event.target.id){
            case "startZone":
                setZStart(event.target.value);
                break;
            case "endZone":
                setZEnd(event.target.value);
                break;
        }        
    }

    return (
        <div className={styles.product}>
          <h4 className={styles.productName}>Zone to Zone ticket</h4>
          <p>select start and end zone to calculate your fare</p>
          
          Start zone: <br/>
          <select id="startZone" className="form-select" onChange={handleChange}>
            <option value="1">Zone A</option>
            <option value="2">Zone B</option>
            <option value="3">Zone C</option>
            <option value="4">Zone D</option>
          </select>
          <br/>
          End zone: <br/>
          <select id="endZone" className="form-select" onChange={handleChange}>
            <option value="1">Zone A</option>
            <option value="2">Zone B</option>
            <option value="3">Zone C</option>
            <option value="4">Zone D</option>
          </select>
          <br/>
          <Button id="myButton" className="me-3 btn-dark" onClick={calculateFare}>Get Your Ticket!</Button>
        </div>

        
      );
}

export default ZoneToZone
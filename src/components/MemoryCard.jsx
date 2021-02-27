import React, { Component } from 'react';
import './MemoryCard.css';




class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        }
    }
    
    render() {
 memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="DC-logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DC Logo"></img>
                    </div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                      
                    
                </div>
            </div>
            
    
        )
    }

}


export default MemoryCard;

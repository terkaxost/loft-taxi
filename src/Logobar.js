import React from 'react';

var currentHeight = window.screen.height
var currentWidth = window.screen.width

window.addEventListener('resize', function(event) {
    console.log(event.target)

});

class Logobar extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Logobar